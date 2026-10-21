import { Bokeh } from "./Bokeh";
import { Reveal } from "./motion";
import { CountdownTiles, MapEmbed } from "./sections";
import { SiteForm } from "./SiteForm";
import type { FieldDef, FormKey } from "@/lib/forms";

/** Shared layout for the Sunday Special and Back to School registration pages. */
export function EventRegistration({
  banner,
  endsAt,
  heading,
  srTitle,
  form,
  fields,
  mapSrc,
  mapTitle,
  successMessage,
  wideFields,
}: {
  banner: string;
  endsAt: Date;
  heading?: string;
  /** Visually hidden page title for pages whose original design has no visible heading. */
  srTitle?: string;
  form: FormKey;
  fields: FieldDef[];
  mapSrc: string;
  mapTitle: string;
  successMessage: string;
  wideFields?: string[];
}) {
  return (
    <>
      {srTitle ? <h1 className="sr-only">{srTitle}</h1> : null}
      <section className="bg-deep">
        <img src={banner} alt="" className="mx-auto max-h-[32rem] w-full object-cover" />
      </section>

      <section className="relative overflow-hidden bg-deep py-16 text-deep-foreground sm:py-24">
        <Bokeh />
        <div className="container-site relative">
          <Reveal className="mx-auto max-w-3xl">
            <CountdownTiles target={endsAt} />
          </Reveal>
          {heading ? (
            <Reveal className="mx-auto mt-14 max-w-3xl">
              <h1 className="text-3xl font-semibold sm:text-4xl">{heading}</h1>
            </Reveal>
          ) : null}
          <Reveal delay={0.1} className="mx-auto mt-8 max-w-3xl">
            <SiteForm
              form={form}
              fields={fields}
              submitLabel="Submit"
              tone="dark"
              twoColumns
              {...(wideFields ? { wideFields } : {})}
              successTitle="Thank you!"
              successMessage={successMessage}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="container-site">
          <MapEmbed src={mapSrc} title={mapTitle} />
        </div>
      </section>
    </>
  );
}
