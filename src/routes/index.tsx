import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الموقع قيد الصيانة — نعود خلال لحظات" },
      {
        name: "description",
        content:
          "نحن نُجري بعض التحديثات لنقدّم لك تجربة أفضل. شكراً لصبرك، نعود خلال لحظات.",
      },
      { property: "og:title", content: "الموقع قيد الصيانة" },
      {
        property: "og:description",
        content:
          "نحن نُجري بعض التحديثات لنقدّم لك تجربة أفضل. شكراً لصبرك، نعود خلال لحظات.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MaintenancePage,
});

function MaintenancePage() {
  return (
    <main
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-maintenance-bg font-body text-maintenance-ink"
      dir="rtl"
      lang="ar"
      style={{
        backgroundImage:
          "radial-gradient(130% 100% at 50% -10%, var(--maintenance-bg-light) 0%, var(--maintenance-bg-mid) 46%, var(--maintenance-bg) 100%)",
      }}
    >
      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 animate-breathe rounded-full bg-maintenance-glow opacity-30 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-maintenance-glow-blue opacity-15 blur-[130px]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center px-6 text-center">
        {/* Brand mark */}
        <div className="animate-rise mb-9 flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-maintenance-accent" />
          <span className="text-sm font-semibold tracking-wide text-maintenance-ink-soft">
            نور
          </span>
          <span className="font-mono text-xs text-maintenance-ink-faint">
            / NOOR
          </span>
        </div>

        {/* Status indicator */}
        <div className="animate-rise animation-delay-120 relative mb-10 grid place-items-center">
          <span
            className="animate-ping-soft absolute h-20 w-20 rounded-full bg-maintenance-accent-2/20"
            aria-hidden="true"
          />
          <span className="relative grid h-20 w-20 place-items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="h-4 w-4 rounded-full bg-maintenance-accent animate-pulse-soft" />
          </span>
        </div>

        {/* Main message */}
        <h1
          className="animate-rise animation-delay-240 font-display text-4xl leading-tight font-extrabold text-balance sm:text-5xl"
          style={{
            textShadow: "0 0 40px color-mix(in oklab, var(--maintenance-accent) 35%, transparent)",
          }}
        >
          نحن في صيانة الموقع الآن
        </h1>

        <p className="animate-rise animation-delay-360 mt-5 max-w-md text-base leading-relaxed text-maintenance-ink-soft text-pretty sm:text-lg">
          نُجري بعض التحديثات لنقدّم لك تجربة أفضل. شكراً لصبرك، نعود خلال
          لحظات.
        </p>

        {/* Progress bar */}
        <div className="animate-fade animation-delay-520 mt-11 w-full max-w-xs">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-xs text-maintenance-ink-faint">
              جارٍ التحديث
            </span>
            <span
              className="font-mono text-xs text-maintenance-accent-2"
              dir="ltr"
            >
              ETA ~15 min
            </span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="animate-sweep h-full w-1/3 rounded-full bg-gradient-to-l from-maintenance-accent-2 to-maintenance-accent"
              style={{
                backgroundImage:
                  "linear-gradient(to left, var(--maintenance-accent-2), var(--maintenance-accent))",
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer contact */}
      <div className="animate-fade animation-delay-680 relative z-10 mt-12 pb-10 text-center">
        <p className="text-xs text-maintenance-ink-faint">
          لأي استفسار راسلنا على
        </p>
        <p
          className="mt-1.5 font-mono text-sm text-maintenance-ink-soft"
          dir="ltr"
        >
          help@noor.app
        </p>
      </div>
    </main>
  );
}
