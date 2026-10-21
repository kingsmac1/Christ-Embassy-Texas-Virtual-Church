import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase client. VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are public values
 * (the anon key is protected by Row Level Security), so they are safe in the browser.
 */
export const supabaseUrl = import.meta.env["VITE_SUPABASE_URL"] as string | undefined;
const supabaseAnonKey = import.meta.env["VITE_SUPABASE_ANON_KEY"] as string | undefined;

const isPlaceholder = (v: string | undefined) => !v || v.includes("YOUR-PROJECT-REF") || v.startsWith("your-");

export const isSupabaseConfigured = !isPlaceholder(supabaseUrl) && !isPlaceholder(supabaseAnonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

/** Calls a Supabase Edge Function. Returns a friendly error when Supabase is not set up yet. */
export async function callFunction<T = unknown>(
  name: string,
  body: unknown,
): Promise<{ data: T | null; error: string | null; fieldErrors?: Record<string, string> }> {
  if (!supabase) {
    return { data: null, error: "This feature is not connected yet. Please try again later." };
  }
  const { data, error } = await supabase.functions.invoke(name, { body: body as Record<string, unknown> });
  if (error) {
    // supabase-js puts the function's JSON error body on error.context (a Response).
    let message = "Something went wrong. Please try again.";
    let fieldErrors: Record<string, string> | undefined;
    try {
      const res = (error as { context?: Response }).context;
      if (res) {
        const payload = (await res.json()) as { error?: string; errors?: Record<string, string> };
        if (payload.error) message = payload.error;
        fieldErrors = payload.errors;
      }
    } catch {
      /* keep the generic message */
    }
    return { data: null, error: message, ...(fieldErrors ? { fieldErrors } : {}) };
  }
  return { data: data as T, error: null };
}
