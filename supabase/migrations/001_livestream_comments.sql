-- Live conversation under the livestream player.
-- Run this once in Supabase: Dashboard -> SQL Editor -> New query -> paste -> Run.
create table if not exists public.livestream_comments (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 60),
  body text not null check (char_length(body) between 1 and 500),
  created_at timestamptz not null default now()
);

alter table public.livestream_comments enable row level security;

-- Anyone can read the latest comments and add one (length limits enforced above).
drop policy if exists "read comments" on public.livestream_comments;
create policy "read comments" on public.livestream_comments for select using (true);

drop policy if exists "add comments" on public.livestream_comments;
create policy "add comments" on public.livestream_comments for insert with check (
  char_length(name) between 1 and 60 and char_length(body) between 1 and 500
);

create index if not exists livestream_comments_created_idx on public.livestream_comments (created_at desc);
