import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/fast-track-logo.png.asset.json";
import bannerAsset from "@/assets/coming-soon-banner.png.asset.json";

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
    >
      {/* Logo */}
      <div className="animate-rise relative z-10 mb-8 px-6">
        <img
          src={logoAsset.url}
          alt="Fast Track Shipping"
          className="h-14 w-auto rounded-md shadow-lg sm:h-16"
        />
      </div>

      {/* Coming soon banner */}
      <h1 className="sr-only">Fast Track Shipping — الموقع تحت الإنشاء، قريباً</h1>
      <img
        src={bannerAsset.url}
        alt="Under construction — Coming soon — Stay tuned!"
        className="animate-rise animation-delay-120 relative z-10 w-full max-w-2xl px-6"
      />

      {/* Arabic message */}
      <p className="animate-fade animation-delay-360 mt-6 max-w-md px-6 text-center text-sm font-semibold leading-relaxed text-maintenance-ink-soft sm:text-base">
        الموقع قيد الصيانة والتطوير حالياً. يتوجب الانتظار قليلاً — نعود إليكم
        قريباً بتجربة شحن أسرع وأسهل.
      </p>

      {/* Footer contact */}
      <div className="animate-fade animation-delay-680 relative z-10 mt-8 pb-10 text-center">
        <p className="text-xs text-maintenance-ink-faint">لأي استفسار راسلنا على</p>
        <p className="mt-1.5 font-mono text-sm text-maintenance-ink-soft" dir="ltr">
          info@fasttrackshipping.com
        </p>
      </div>
    </main>
  );
}
