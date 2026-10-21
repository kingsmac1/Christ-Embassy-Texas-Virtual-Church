import { useState, type FormEvent } from "react";
import { CONTENT, type Block } from "@/data/content";
import { Reveal } from "./motion";
import { PageHero, RichText, WpSidebar } from "./sections";
import { PillButton, Section } from "./ui";

const fieldClass = "mt-2 w-full rounded-2xl border border-border bg-secondary px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-accent";

function NoticeForm({ children, notice, submitLabel }: { children: React.ReactNode; notice: string; submitLabel: string }) {
  const [shown, setShown] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShown(true);
  };
  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-5 rounded-[1.75rem] border border-border bg-card p-6 sm:p-8">
      {children}
      <div>
        <PillButton type="submit">{submitLabel}</PillButton>
        {shown ? <p role="status" className="mt-3 text-sm text-muted-foreground">{notice}</p> : null}
      </div>
    </form>
  );
}

/**
 * Original WordPress utility pages (Sample Page, My account, Prayer, Hello world!): a title, the page text
 * and the sidebar widgets, restyled. Content comes from the exported page content.
 */
export function UtilityPage({ slug }: { slug: "sample-page" | "my-account" | "prayer" | "hello-world" }) {
  const blocks = (CONTENT[slug]![0] ?? []) as Block[];
  const title = blocks.find((b): b is Extract<Block, { type: "heading" }> => b.type === "heading" && b.level === 1)!;
  const widgetStart = blocks.findIndex((b) => b.type === "heading" && b.html === "Recent Posts");
  const main = blocks.slice(blocks.indexOf(title) + 1, widgetStart === -1 ? undefined : widgetStart);

  return (
    <>
      <PageHero title={title.html} image={null} />
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <Reveal>
            <div className="space-y-4 text-base leading-relaxed">
              {main.map((b, i) => {
                if (b.type === "p") return <RichText key={i} html={b.html} className="text-muted-foreground" />;
                if (b.type === "li") return <RichText key={i} html={b.html} className="rounded-2xl bg-card p-5 text-sm text-muted-foreground" />;
                if (b.type === "heading") {
                  return b.level === 3 ? (
                    <h3 key={i} className="pt-6 font-display text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: b.html }} />
                  ) : (
                    <h2 key={i} className="pt-4 font-display text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: b.html }} />
                  );
                }
                return null;
              })}

              {slug === "my-account" ? (
                <NoticeForm submitLabel="Log in" notice="Customer accounts are not available on this site.">
                  <label className="block text-sm font-semibold">
                    Username or email address <span aria-hidden="true">*</span>
                    <input required name="username" autoComplete="username" className={fieldClass} />
                  </label>
                  <label className="block text-sm font-semibold">
                    Password <span aria-hidden="true">*</span>
                    <input required type="password" name="password" autoComplete="current-password" className={fieldClass} />
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm font-semibold">
                    <input type="checkbox" name="rememberme" /> Remember me
                  </label>
                </NoticeForm>
              ) : null}

              {slug === "hello-world" ? (
                <NoticeForm submitLabel="Submit Comment" notice="Comments are closed on this site.">
                  <p className="text-sm text-muted-foreground">Your email address will not be published. Required fields are marked *</p>
                  <label className="block text-sm font-semibold">
                    Comment <span aria-hidden="true">*</span>
                    <textarea required name="comment" rows={5} className={fieldClass} />
                  </label>
                  <label className="block text-sm font-semibold">
                    Name <span aria-hidden="true">*</span>
                    <input required name="author" className={fieldClass} />
                  </label>
                  <label className="block text-sm font-semibold">
                    Email <span aria-hidden="true">*</span>
                    <input required type="email" name="email" className={fieldClass} />
                  </label>
                  <label className="block text-sm font-semibold">
                    Website
                    <input name="url" className={fieldClass} />
                  </label>
                  <label className="inline-flex items-start gap-2 text-sm">
                    <input type="checkbox" name="cookies" className="mt-1" /> Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </NoticeForm>
              ) : null}
            </div>
          </Reveal>
          <WpSidebar />
        </div>
      </Section>
    </>
  );
}
