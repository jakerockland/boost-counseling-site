import { useEffect } from "react";

const BASE_TITLE = "Boost Counseling Services";
const SITE_URL = "https://boosttalkaz.com";
const DEFAULT_DESCRIPTION =
  "Compassionate, nonjudgmental counseling services in Tucson, AZ. Individual, group, and intensive outpatient programs for substance use disorders, trauma, eating disorders, and more.";

interface SEOOptions {
  subtitle?: string;
  description?: string;
  path?: string;
}

function setMetaTag(property: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

export function useDocumentTitle(subtitleOrOptions?: string | SEOOptions) {
  const options: SEOOptions =
    typeof subtitleOrOptions === "string"
      ? { subtitle: subtitleOrOptions }
      : subtitleOrOptions ?? {};

  const { subtitle, description, path } = options;

  useEffect(() => {
    const title = subtitle
      ? `${subtitle} — ${BASE_TITLE}`
      : `${BASE_TITLE} — Substance Use & Trauma Therapy in Tucson, AZ`;
    const desc = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = `${SITE_URL}${path || "/"}`;

    document.title = title;

    setMetaTag("description", desc);
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", desc, true);
    setMetaTag("og:url", canonicalUrl, true);
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", desc);
    setCanonical(canonicalUrl);

    return () => {
      document.title = BASE_TITLE;
    };
  }, [subtitle, description, path]);
}
