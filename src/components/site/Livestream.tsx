import { useEffect, useRef, useState, type FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { BookOpen, HandHeart, Loader2, MessageCircle, Play, Radio } from "lucide-react";
import { STREAM } from "@/data/stream";
import { SITE } from "@/data/site";
import { SERVICES, nextService } from "@/lib/services";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";
import { Bokeh } from "./Bokeh";
import { CountdownTiles } from "./sections";
import { PillAnchor, PillButton, PillLink } from "./ui";

/** Player card: embeds the stream when STREAM.embedUrl is set, otherwise shows the offline state. */
export function LivestreamPlayer() {
  const [upcoming, setUpcoming] = useState<ReturnType<typeof nextService> | null>(null);
  useEffect(() => setUpcoming(nextService()), []);
  const live = Boolean(STREAM.embedUrl);

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="relative aspect-video min-h-64 w-full bg-deep">
        {live ? (
          <iframe
            className="size-full"
            src={STREAM.embedUrl}
            title="Live Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0">
            <img src="/images/2023__10__Audience.webp" alt="" className="size-full object-cover opacity-35" loading="lazy" />
            <div className="absolute inset-0 grid place-items-center p-6 text-center text-deep-foreground">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-deep-foreground/25 px-3 py-1 text-xs font-semibold uppercase">
                  <Radio className="size-3.5" aria-hidden="true" />
                  Offline
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">We are not currently live</h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-deep-foreground/75" suppressHydrationWarning>
                  {upcoming
                    ? `Our next broadcast: ${upcoming.slot.title}, ${upcoming.slot.schedule}.`
                    : SERVICES.map((s) => `${s.title}: ${s.schedule}`).join(" · ")}
                </p>
                <a
                  href={STREAM.livePlatformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground"
                >
                  <Play className="size-4" aria-hidden="true" />
                  Open the live page
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold" suppressHydrationWarning>{upcoming?.slot.title ?? SERVICES[0]!.title}</h3>
          <p className="text-sm text-muted-foreground" suppressHydrationWarning>{upcoming?.slot.schedule ?? SERVICES[0]!.schedule}</p>
        </div>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">{live ? "Live now" : SITE.name}</span>
      </div>
    </div>
  );
}

const BOOKS = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
  "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "Psalms", "Proverbs", "Ecclesiastes", "Isaiah",
  "Jeremiah", "Ezekiel", "Daniel", "Matthew", "Mark", "Luke", "John", "Acts", "Romans",
  "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians",
  "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Hebrews", "James",
  "1 Peter", "2 Peter", "1 John", "Revelation",
];

type Passage = { reference: string; verses: { verse: number; text: string }[] };

async function fetchPassage(book: string, chapter: string): Promise<Passage> {
  const res = await fetch(`https://bible-api.com/${encodeURIComponent(`${book} ${chapter}`)}?translation=kjv`);
  if (!res.ok) throw new Error("Passage not found");
  return (await res.json()) as Passage;
}

/** Scripture reader that sits beside the stream. Uses the free bible-api.com (KJV), no key needed. */
export function BiblePanel() {
  const [book, setBook] = useState("John");
  const [chapter, setChapter] = useState("15");
  const [verse, setVerse] = useState("5");
  const selectedRef = useRef<HTMLParagraphElement>(null);

  const { data, isFetching, isError } = useQuery({
    queryKey: ["passage", book, chapter],
    queryFn: () => fetchPassage(book, chapter),
    staleTime: 10 * 60 * 1000,
    retry: false,
  });

  useEffect(() => {
    selectedRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [data, verse]);

  const selectClass = "min-h-11 w-full rounded-full border border-border bg-card px-4 text-sm focus-visible:outline-2 focus-visible:outline-accent";

  return (
    <aside className="rounded-3xl border border-border bg-card p-6" aria-label="Bible reader">
      <h2 className="inline-flex items-center gap-2 font-display text-lg font-bold">
        <BookOpen className="size-5 text-primary" aria-hidden="true" />
        Follow the scripture
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          { id: "bible-book", label: "Book", value: book, set: setBook, options: BOOKS },
          { id: "bible-chapter", label: "Chapter", value: chapter, set: setChapter, options: Array.from({ length: 150 }, (_, i) => String(i + 1)) },
          { id: "bible-verse", label: "Verse", value: verse, set: setVerse, options: Array.from({ length: 176 }, (_, i) => String(i + 1)) },
        ].map((s) => (
          <div key={s.id}>
            <label className="text-xs font-semibold text-muted-foreground uppercase" htmlFor={s.id}>{s.label}</label>
            <select id={s.id} className={selectClass} value={s.value} onChange={(e) => s.set(e.target.value)}>
              {s.options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl bg-secondary p-5">
        <p className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase">
          {data?.reference ?? `${book} ${chapter}`}
          {isFetching ? <Loader2 className="size-3.5 animate-spin" aria-hidden="true" /> : null}
        </p>
        <div className="mt-2 max-h-[420px] space-y-2 overflow-y-auto pr-1" aria-live="polite">
          {isError ? (
            <p className="text-base">That chapter could not be found. Try another chapter.</p>
          ) : data ? (
            data.verses.map((v) => (
              <p
                key={v.verse}
                ref={String(v.verse) === verse ? selectedRef : undefined}
                className={String(v.verse) === verse ? "rounded-xl bg-primary/10 p-2 text-base leading-relaxed font-medium" : "p-2 text-base leading-relaxed text-muted-foreground"}
              >
                <span className="mr-1 align-super text-xs font-semibold">{v.verse}</span>
                {v.text.trim()}
              </p>
            ))
          ) : (
            <p className="text-base">Loading passage…</p>
          )}
        </div>
      </div>
    </aside>
  );
}

type Comment = { id: string; name: string; body: string; created_at: string };

function timeAgo(iso: string) {
  const s = Math.max(1, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} hr ago`;
  return `${Math.floor(s / 86400)} d ago`;
}

/** Live conversation: reads/writes the `livestream_comments` table in Supabase (see supabase/migrations). */
export function CommentFeed() {
  const { data, refetch } = useQuery({
    queryKey: ["live-comments"],
    enabled: isSupabaseConfigured,
    refetchInterval: 20_000,
    queryFn: async () => {
      const { data: rows, error } = await supabase!.from("livestream_comments").select("id,name,body,created_at").order("created_at", { ascending: false }).limit(30);
      if (error) throw error;
      return rows as Comment[];
    },
  });
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (String(new FormData(e.currentTarget).get("website") ?? "").trim()) return; // honeypot
    if (!name.trim() || !body.trim()) {
      setError("Please add your name and a message.");
      return;
    }
    setSending(true);
    setError(null);
    const { error: err } = await supabase!.from("livestream_comments").insert({ name: name.trim().slice(0, 60), body: body.trim().slice(0, 500) });
    setSending(false);
    if (err) {
      setError("Your comment could not be posted. Please try again.");
      return;
    }
    setBody("");
    void refetch();
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <h2 className="inline-flex items-center gap-2 font-display text-lg font-bold">
        <MessageCircle className="size-5 text-primary" aria-hidden="true" />
        Live conversation
      </h2>
      {isSupabaseConfigured ? (
        <>
          <form onSubmit={onSubmit} className="mt-5 grid gap-3" noValidate>
            <input aria-label="Your name" maxLength={60} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="min-h-11 rounded-full border border-border bg-secondary px-4 text-sm focus-visible:outline-2 focus-visible:outline-accent" />
            <textarea aria-label="Your message" maxLength={500} rows={3} placeholder="Message" value={body} onChange={(e) => setBody(e.target.value)} className="rounded-2xl border border-border bg-secondary px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-accent" />
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
            </div>
            <PillButton type="submit" disabled={sending} className="w-fit">{sending ? "Posting…" : "Post"}</PillButton>
            {error ? <p role="alert" className="text-xs text-destructive">{error}</p> : null}
          </form>
          <ul className="mt-6 max-h-80 space-y-4 overflow-y-auto">
            {(data ?? []).map((c) => (
              <li key={c.id} className="flex gap-3">
                <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold">
                  {c.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">
                    {c.name} <span className="ml-1 text-xs font-normal text-muted-foreground">{timeAgo(c.created_at)}</span>
                  </p>
                  <p className="mt-0.5 text-sm break-words text-muted-foreground">{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-5 rounded-2xl bg-secondary p-4 text-sm text-muted-foreground">
          The live conversation turns on once Supabase is connected (see SETUP-GUIDE.md).
        </p>
      )}
    </div>
  );
}

/** Compact donate card that keeps the church's existing Stripe donate link. */
export function DonateCard() {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-deep p-6 text-deep-foreground">
      <div>
        <HandHeart className="size-7 text-accent" aria-hidden="true" />
        <h2 className="mt-4 font-display text-2xl font-bold">Donate</h2>
      </div>
      <PillAnchor href={SITE.donateUrl} target="_blank" variant="accent" className="mt-8 w-fit">
        Donate Now
      </PillAnchor>
    </div>
  );
}

/** Dark countdown band to the next service. */
export function ServiceCountdown() {
  const [upcoming, setUpcoming] = useState<ReturnType<typeof nextService> | null>(null);
  useEffect(() => setUpcoming(nextService()), []);
  const target = upcoming?.target ?? new Date();
  return (
    <section className="relative overflow-hidden bg-deep py-16 text-deep-foreground sm:py-20">
      <Bokeh />
      <div className="container-site relative grid items-center gap-10 rounded-[2rem] bg-deep-foreground/5 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl" suppressHydrationWarning>{upcoming?.slot.title ?? SERVICES[0]!.title}</h2>
          <p className="mt-3 text-sm text-deep-foreground/75" suppressHydrationWarning>{upcoming?.slot.schedule ?? SERVICES[0]!.schedule}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PillLink to="/contact/" variant="accent">Contact Us</PillLink>
            <PillAnchor href={SITE.donateUrl} target="_blank" variant="light">Donate</PillAnchor>
          </div>
        </div>
        <CountdownTiles target={target} />
      </div>
    </section>
  );
}
