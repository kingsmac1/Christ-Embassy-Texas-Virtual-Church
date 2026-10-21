# SETUP GUIDE (for complete beginners)

This guide connects the finished website to the three services it needs:

| Service | What it does for the site | Cost to start |
|---|---|---|
| **Supabase** | Runs three small programs ("Edge Functions") that send emails and start payments, and stores live-chat comments | Free plan |
| **Resend** | Sends the emails (form notifications, confirmations, order emails) | Free plan (3,000 emails/month) |
| **Stripe** | Takes card payments for the store (TEST mode first, no real money) | Free until you take payments |
| **Cloudflare Pages** | Hosts the website | Free plan |

Everything below is done by clicking in each website's dashboard. You only need a computer, a browser and the project folder. Where the site shows `<your-project-ref>` replace it with your own value (explained in Step 1).

> **Keep secrets secret.** Anything called a *secret key*, *API key* or *signing secret* must never be pasted in the website code, in an email, or in a chat. You will only ever paste them into the Supabase "Secrets" page and the Cloudflare/Stripe/Resend dashboards.

---

## Step 1: Create your Supabase project

1. Go to <https://supabase.com> and click **Start your project**. Sign in (GitHub or email).
2. Click **New project**. Pick an organisation, name it `christ-embassy-texas`, create a strong database password (save it in a password manager) and choose the region closest to Houston (for example *East US*). Click **Create new project** and wait 1–2 minutes.
3. Find your **Project URL** and **anon key**:
   - Left menu **Project Settings** (gear icon) → **API** (newer dashboards: **API Keys** or the **Connect** button at the top).
   - Copy **Project URL**, which looks like `https://abcdefghijkl.supabase.co`. The part before `.supabase.co` (`abcdefghijkl`) is your **project ref**.
   - Copy the **anon / public** key (a long text starting `eyJ…`). This one is safe to put on the website. Do **not** copy the `service_role` key anywhere.

## Step 2: Create the live-chat table (one click)

1. Supabase left menu → **SQL Editor** → **New query**.
2. Open the file `supabase/migrations/001_livestream_comments.sql` from the project folder in any text editor, copy everything, paste it into the editor and click **Run**. You should see *Success. No rows returned*.

## Step 3: Deploy the three Edge Functions from the dashboard

The project has three functions in `supabase/functions/`:

| Function name (type it EXACTLY) | What it does | Files to paste |
|---|---|---|
| `send-form-email` | Receives every form, validates it and sends two emails | `index.ts`, `forms.ts`, `shared/cors.ts`, `shared/resend.ts`, `shared/email-templates/layout.ts`, `shared/email-templates/form-church.ts`, `shared/email-templates/form-submitter.ts` |
| `create-checkout-session` | Looks up prices on the server and opens Stripe Checkout | `index.ts`, `catalog.ts`, `shared/cors.ts` (the other `shared` files are not needed by this one) |
| `stripe-webhook` | Receives Stripe's "payment done" message and sends the order emails | `index.ts`, `shared/resend.ts`, `shared/email-templates/layout.ts`, `shared/email-templates/order-church.ts`, `shared/email-templates/order-customer.ts` |

For **each** function:

1. Supabase left menu → **Edge Functions** → **Deploy a new function** → **Via Editor**.
2. Type the function name from the table (lower case, with dashes).
3. The editor shows a file called `index.ts` with sample code. Delete the sample code and paste the contents of that function's `index.ts` from the project folder.
4. Add the other files: click the **+** (add file) next to the file list, type the file path exactly as in the table (for example `shared/cors.ts`; type the folder part too), then paste that file's contents. Repeat for every file in the table. The files are all inside the matching folder, e.g. `supabase/functions/send-form-email/shared/cors.ts`.
5. Click **Deploy function**. Wait for the green "deployed" message.
6. **Only for `stripe-webhook`:** open the function → **Details**/**Settings** and switch **Verify JWT** to **OFF**, then save. (Stripe does not send a Supabase login token; the function checks Stripe's own signature instead.) Leave Verify JWT **ON** for the other two.

> Prefer a terminal? After installing the Supabase CLI: `supabase login`, `supabase link --project-ref <your-project-ref>`, then `supabase functions deploy send-form-email`, `supabase functions deploy create-checkout-session`, `supabase functions deploy stripe-webhook`. The file `supabase/config.toml` already sets Verify JWT correctly.

If you ever change `supabase/functions/_shared` or the products, run `node scripts/sync-function-shared.mjs` / `node scripts/build-data.mjs` and redeploy the affected functions.

## Step 4: Resend (email) and verifying the church's domain

1. Go to <https://resend.com>, sign up, then **API Keys** → **Create API Key** (name `website`, permission *Sending access*). Copy the key (starts `re_`). It is shown once. You will paste it in Step 6.
2. **Verify the domain** (needed to send from an @christembassytexasvirtualchurch.com address and to email other people):
   1. Resend → **Domains** → **Add Domain** → type `christembassytexasvirtualchurch.com` → choose the *US East* region → **Add**.
   2. Resend shows a table of DNS records (usually an **MX** and a **TXT** for SPF, and a **TXT** for DKIM, optionally DMARC).
   3. Log in to wherever the domain's DNS is managed (the registrar, or Cloudflare if the domain uses Cloudflare nameservers). Open **DNS** and add each record exactly as Resend shows: *Type*, *Name/Host*, *Value*, and priority for MX. If your DNS is in Cloudflare, set each record to **DNS only** (grey cloud).
   4. Back in Resend click **Verify DNS Records**. It can take a few minutes up to a few hours. When the domain shows **Verified** you are done.
3. Decide the sender address, for example `Christ Embassy Texas Virtual Church <no-reply@christembassytexasvirtualchurch.com>`. This becomes `FROM_EMAIL`.
   *Until the domain is verified* you can only test by sending to your own Resend account email, using `onboarding@resend.dev` as `FROM_EMAIL`.

## Step 5: Stripe TEST keys and the webhook

1. Go to <https://stripe.com>, create an account. In the dashboard make sure the **Test mode** switch (top right) is **ON** (orange "Test mode" banner). You do not need to activate or give bank details for test mode.
2. **API keys:** **Developers** → **API keys**.
   - **Publishable key** (`pk_test_…`) → goes in `.env` and Cloudflare as `VITE_STRIPE_PUBLISHABLE_KEY`.
   - **Secret key** → click **Reveal test key** (`sk_test_…`) → goes into the Supabase secret `STRIPE_SECRET_KEY` (Step 6). The site refuses anything that does not start with `sk_test_`.
3. **Webhook** (so you get order emails):
   1. **Developers** → **Webhooks** → **Add endpoint**.
   2. **Endpoint URL:** `https://<your-project-ref>.supabase.co/functions/v1/stripe-webhook`
   3. **Select events** → tick **checkout.session.completed** → **Add endpoint**.
   4. Open the new endpoint → **Signing secret** → **Reveal** (starts `whsec_`). This is `STRIPE_WEBHOOK_SECRET` for Step 6.
4. **Test a payment later** with the fake card `4242 4242 4242 4242`, any future expiry date, any 3-digit CVC, any ZIP.
5. The church's existing **Donate** button keeps using the old Stripe payment link; it is not touched by any of this.

## Step 6: Add the secrets in Supabase

Supabase left menu → **Edge Functions** → **Secrets** (also reachable via *Project Settings → Edge Functions*). Add each one with **Add new secret** (name exactly as written, then the value) and **Save**:

| Secret name | Value | Where it comes from |
|---|---|---|
| `RESEND_API_KEY` | `re_…` | Step 4.1 |
| `FROM_EMAIL` | `Christ Embassy Texas Virtual Church <no-reply@christembassytexasvirtualchurch.com>` | Step 4.3 |
| `OWNER_EMAIL` | the church inbox that should receive form messages and order alerts | the church decides |
| `SITE_URL` | `https://christembassytexasvirtualchurch.com` (your final website address, no slash at the end) | used for the logo in emails |
| `STRIPE_SECRET_KEY` | `sk_test_…` | Step 5.2 |
| `STRIPE_WEBHOOK_SECRET` | `whsec_…` | Step 5.3 |

No email address is written in the code; they all come from these secrets.
After adding or changing secrets you do not need to redeploy.

## Step 7: What goes in `.env` and in Cloudflare Pages

**Local file `.env`** (in the project folder, never share it, it is already in `.gitignore`; `.env.example` shows the shape):

```
VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<the anon key from Step 1>
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```
Optional: `VITE_LIVESTREAM_EMBED_URL=https://www.youtube.com/embed/VIDEO_ID` once you have a stream embed link.

**Cloudflare Pages:**
1. <https://dash.cloudflare.com> → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** (upload the project folder to a GitHub repository first; `node_modules`, `dist` and `.env` must NOT be uploaded, the `.gitignore` already excludes them).
2. **Framework preset:** None. **Build command:** `npm run build`. **Build output directory:** `dist`.
3. Open **Settings** → **Environment variables** → add for **Production** (and Preview): `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_STRIPE_PUBLISHABLE_KEY` (and `VITE_LIVESTREAM_EMBED_URL` if used), plus `NODE_VERSION` = `22`. These must be set **before** the build runs; if you add them later click **Retry deployment**.
4. **Custom domains** → add `christembassytexasvirtualchurch.com` (and `www`) and follow the DNS instructions.

## Step 8: Check that everything works (test mode)

1. Open the live site → **Contact** → send a message. You should receive an email at `OWNER_EMAIL` and the sender gets a confirmation. (Supabase → Edge Functions → `send-form-email` → **Logs** shows errors if not.)
2. **Store** → open a book → **Add to cart** → **Cart** → **Proceed to checkout** → pay with `4242 4242 4242 4242`. You land on `/checkout/success/`, the cart empties, and the church and the buyer get order emails. (In Stripe → Developers → Webhooks you can see each delivery.)
3. **Live Stream** page: the comment box works once Step 2 is done.

## Step 9: Switching Stripe from TEST to LIVE (only when ready)

Do this only after the church is happy with the test purchases.

1. In Stripe finish **Activate your account** (business details and the bank account for payouts).
2. Switch the **Test mode** toggle OFF (you are now in live mode) and copy the **live** keys from **Developers → API keys**: `pk_live_…` and `sk_live_…`.
3. Create a **new webhook endpoint in live mode** (same URL and event as Step 5.3). It has its own new `whsec_…`.
4. In Supabase → **Secrets** replace `STRIPE_SECRET_KEY` with the `sk_live_…` and `STRIPE_WEBHOOK_SECRET` with the new live `whsec_…`.
5. The code deliberately refuses live keys so nobody switches by accident. Open `supabase/functions/create-checkout-session/index.ts`, delete the block that starts with `if (!secret.startsWith("sk_test_")) {` (3 lines), and redeploy that function (Step 3).
6. In Cloudflare Pages replace `VITE_STRIPE_PUBLISHABLE_KEY` with `pk_live_…` and **Retry deployment**.
7. Make one real small purchase yourself, check the emails, then refund it in Stripe (**Payments** → the payment → **Refund**).
8. Optional: create the products in Stripe (**Product catalog**) and paste each `price_…` id into `stripePriceId` in `src/data/products.ts`, then run `node scripts/build-data.mjs` and redeploy the function.

To go back to test mode just reverse steps 2–6 with the test keys.

## If something does not work

| Symptom | Fix |
|---|---|
| Form says "This feature is not connected yet" | `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY` missing or still the placeholders (Step 7); rebuild |
| Form says "could not send your message" | Check the function **Logs**: usually `RESEND_API_KEY`/`FROM_EMAIL`/`OWNER_EMAIL` missing, or the Resend domain is not verified yet |
| Checkout says "Checkout is not configured yet" | `STRIPE_SECRET_KEY` secret missing |
| Paid but no order emails | Webhook URL typo, wrong `STRIPE_WEBHOOK_SECRET`, or **Verify JWT** not turned OFF on `stripe-webhook` |
| Emails land in spam | Finish all Resend DNS records (SPF + DKIM) and add a DMARC record |
