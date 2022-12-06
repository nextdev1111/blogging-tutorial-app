import { GetServerSideProps } from "next";
import React from "react";
import services from "services";

type Props = {};

export default function SiteMap({}: Props) {
  return null;
}

const createSitemap = (
  slugs: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${slugs
        .map((slug) => {
          return `
              <url>
                  <loc>${`https://blogging-tutorial-app.vercel.app/${slug}`}</loc>
              </url>
          `;
        })
        .join("")}
  </urlset>
  `;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const blogs = await services.queryBlogs();

  const allPages = [
    ...blogs.map((blog) => `blog/${blog.slug}`),
    ...["", "blogs"],
  ];

  context.res.setHeader("Content-Type", "text-xml");
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  context.res.write(createSitemap(allPages));
  context.res.end();

  return {
    props: {},
  };
};
