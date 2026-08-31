import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/fast-track-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fast Track Shipping — الموقع قيد الإنشاء" },
      {
        name: "description",
        content:
          "موقع Fast Track Shipping قيد الإنشاء حالياً. نعمل على إطلاق تجربة شحن أسرع وأسهل — ترقّبوا الإطلاق قريباً.",
      },
      { property: "og:title", content: "Fast Track Shipping — قريباً" },
      {
        property: "og:description",
        content:
          "موقع Fast Track Shipping قيد الإنشاء حالياً. ترقّبوا الإطلاق قريباً.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComingSoonPage,
});

function ComingSoonPage() {
  return (
    <main
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-maintenance-bg font-body text-maintenance-ink"
      dir="rtl"
      lang="ar"
      style={{
        backgroundImage:
          "radial-gradient(120% 90% at 50% 0%, var(--maintenance-bg-light) 0%, var(--maintenance-bg-mid) 40%, var(--maintenance-bg) 100%)",
      }}
    >
      {/* Logo */}
      <div className="animate-rise relative z-10 mb-10 px-6">
        <img
          src={logoAsset.url}
          alt="Fast Track Shipping"
          className="h-16 w-auto rounded-md shadow-lg sm:h-20"
        />
      </div>

      {/* Banner */}
      <div className="relative z-10 w-full max-w-3xl px-4">
        <div className="relative">
          {/* Navy angled shape behind */}
          <div
            className="animate-fade absolute inset-x-4 -top-6 bottom-[-1.5rem] bg-maintenance-glow-blue"
            style={{
              clipPath:
                "polygon(6% 0%, 100% 4%, 92% 100%, 0% 92%)",
            }}
            aria-hidden="true"
          />

          {/* Yellow main band */}
          <div
            className="animate-rise animation-delay-120 relative bg-maintenance-accent px-6 py-10 text-center sm:px-12 sm:py-14"
            style={{
              clipPath: "polygon(3% 0%, 100% 6%, 97% 100%, 0% 94%)",
            }}
          >
            {/* Red tag */}
            <span
              className="animate-rise animation-delay-240 mb-4 inline-block bg-maintenance-accent-2 px-5 py-1.5 font-display text-xs font-extrabold tracking-[0.18em] text-maintenance-bg sm:text-sm"
              style={{ clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)" }}
            >
              الموقع تحت الإنشاء
            </span>

            <h1 className="animate-rise animation-delay-360 font-display text-4xl font-extrabold leading-tight tracking-tight text-maintenance-glow-blue sm:text-6xl">
              قريباً جداً
            </h1>

            <p className="animate-fade animation-delay-520 mx-auto mt-4 max-w-md text-sm font-semibold leading-relaxed text-maintenance-glow-blue/80 sm:text-base">
              نعمل حالياً على إطلاق موقع Fast Track Shipping بتجربة شحن أسرع
              وأسهل. يتوجب الانتظار قليلاً — ترقّبوا الإطلاق!
            </p>
          </div>

          {/* Stay tuned strip */}
          <div className="animate-fade animation-delay-680 relative mx-8 -mt-1 bg-maintenance-glow-blue px-6 py-3 text-center">
            <span className="font-display text-sm font-extrabold tracking-[0.2em] text-maintenance-accent sm:text-base">
              STAY TUNED!
            </span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="animate-fade animation-delay-680 relative z-10 mt-14 w-full max-w-xs px-6">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-xs font-semibold text-maintenance-ink-soft">
            جارٍ العمل على الموقع
          </span>
          <span className="font-mono text-xs text-maintenance-accent-2" dir="ltr">
            SOON
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-maintenance-ink/10">
          <div
            className="animate-sweep h-full w-1/3 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(to left, var(--maintenance-accent-2), var(--maintenance-accent))",
            }}
          />
        </div>
      </div>

      {/* Footer contact */}
      <div className="animate-fade animation-delay-680 relative z-10 mt-10 pb-10 text-center">
        <p className="text-xs text-maintenance-ink-faint">لأي استفسار راسلنا على</p>
        <p className="mt-1.5 font-mono text-sm text-maintenance-ink-soft" dir="ltr">
          info@fasttrackshipping.com
        </p>
      </div>
    </main>
  );
}
