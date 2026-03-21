"use client"; 

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.crmTracker) {
      // Construct the full URL (including query parameters like ?utm_source=google)
      const currentUrl = window.location.origin + pathname + 
        (searchParams.toString() ? `?${searchParams.toString()}` : "");

      console.log("[CRM Tracker] Tracking page_view:", currentUrl);
      window.crmTracker.track("page_view", { url: currentUrl });
    } else {
      console.log("[CRM Tracker] Script not loaded yet or unavailable.");
    }
  }, [pathname, searchParams]);

  return null; 
}

export default function RouteTracker() {
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  );
}
