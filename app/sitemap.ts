import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://demo.startwithyou.ventures",
      lastModified: new Date(),
    },
    {
      url: "https://demo.startwithyou.ventures/demo",
      lastModified: new Date(),
    },
  ];
}
