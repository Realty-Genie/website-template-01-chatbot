"use client"; 

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.crmTracker) {
      // Construct the full URL (including query parameters like ?utm_source=google)
      const currentUrl = window.location.origin + pathname + 
        (searchParams.toString() ? `?${searchParams.toString()}` : "");

      window.crmTracker.track("page_view", { url: currentUrl });
    }
  }, [pathname, searchParams]);

  return null; 
}
