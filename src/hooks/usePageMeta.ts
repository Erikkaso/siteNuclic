import { useEffect } from "react";

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    metaDescription?.setAttribute("content", description);
  }, [description, title]);
}
