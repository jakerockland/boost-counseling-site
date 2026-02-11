import { useEffect } from "react";

const BASE_TITLE = "Boost Counseling Services";

export function useDocumentTitle(subtitle?: string) {
  useEffect(() => {
    document.title = subtitle ? `${subtitle} — ${BASE_TITLE}` : `${BASE_TITLE} — Substance Use & Trauma Therapy in Tucson, AZ`;
    return () => { document.title = BASE_TITLE; };
  }, [subtitle]);
}
