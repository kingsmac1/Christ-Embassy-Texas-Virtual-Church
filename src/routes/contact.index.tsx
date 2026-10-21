import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Bokeh } from "@/components/site/Bokeh";
import { Reveal } from "@/components/site/motion";
import { ClosingBand, PageHero } from "@/components/site/sections";
import { SiteForm } from "@/components/site/SiteForm";
import { Section } from "@/components/site/ui";
import { CONTACT_FIELDS } from "@/data/forms";
import { CONTENT, type Block } from "@/data/content";
import { seoHead } from "@/data/seo";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/contact/")({
  head: () => seoHead("/contact/"),
  component: ContactPage,
});

const [heroSec, infoSec, formSec, closingSec] = CONTENT["contact"]!;
const of = <T extends Block["type"]>(blocks: Block[], type: T) => blocks.filter((b): b is Extract<Block, { type: T }> => b.type === type);

function ContactPage() {
  const title = of(heroSec!, "heading")[0]!;
  const [call, address, email] = of(infoSec!, "heading");
  const formHeading = of(formSec!, "heading")[0]!;
  const closingHeading = of(closingSec!, "heading")[0]!;
  const closingButton = of(closingSec!, "button")[0]!;

  const cards = [
    { icon: Phone, heading: call!.html, body: <a href={SITE.phoneHref} className="font-semibold hover:text-accent">{SITE.phone}</a> },
    { icon: MapPin, heading: address!.html, body: <span>{SITE.address}</span> },
    { icon: Mail, heading: email!.html, body: <a href={`mailto:${SITE.email}`} className="break-all hover:text-accent">{SITE.email}</a> },
  ];

  return (
    <>
      <PageHero title={title.html} />

      <Section tone="cream">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.heading} delay={i * 0.08}>
              <div className="h-full rounded-[1.75rem] border border-border bg-card p-7 text-center shadow-[0_1px_2px_rgba(20,20,30,0.04),0_12px_32px_-16px_rgba(20,20,30,0.16)]">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-secondary text-accent">
                  <c.icon className="size-6" aria-hidden="true" />
                </span>
                <h4 className="mt-5 font-display text-xl font-semibold">{c.heading}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-deep py-20 text-deep-foreground sm:py-28">
        <Bokeh />
        <div className="container-site relative grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="text-4xl font-semibold sm:text-5xl">{formHeading.html}</h2>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] bg-card p-7 text-foreground sm:p-9">
            <SiteForm form="contact" fields={CONTACT_FIELDS} submitLabel="Submit" successTitle="Message sent!" successMessage="Thank you for contacting us. Your message has been received." />
          </Reveal>
        </div>
      </section>

      <ClosingBand heading={closingHeading.html} buttonLabel={closingButton.text} to={closingButton.href} />
    </>
  );
}
