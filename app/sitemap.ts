import type { MetadataRoute } from "next";
import { visibleProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    ...visibleProjects
      .filter((p) => p.caseStudy)
      .map((p) => ({ url: `${site.url}/work/${p.slug}`, priority: 0.8 })),
  ];
}
