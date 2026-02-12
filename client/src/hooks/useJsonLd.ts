import { useEffect } from "react";

export function useJsonLd(data: Record<string, unknown>) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  // Serialize to compare by value rather than reference
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(data)]);
}
