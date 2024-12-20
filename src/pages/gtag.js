/* eslint-disable no-undef */
export const GA_MEASUREMENT_ID = "G-2111N1C2DB";

export default function pageview() {
  if (typeof window !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_location: url,
    });
  }
}

export function event({ action, category, label, value }) {
  if (typeof window !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}
