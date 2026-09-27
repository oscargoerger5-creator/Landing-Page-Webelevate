import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { contentPath, getContent, getContentEntry } from "@/lib/content";

// Pages générées depuis content/blog/*.md (voir CONTENT.md).
export const dynamicParams = false;

export function generateStaticParams() {
  return getContent("blog").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("blog", slug);
  if (!entry) return {};
  return {
    title: entry.metaTitle,
    description: entry.description,
    alternates: { canonical: contentPath(entry) },
    openGraph: {
      title: entry.metaTitle,
      description: entry.description,
      type: "article",
    },
  };
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const entry = getContentEntry("blog", slug);
  if (!entry) notFound();
  return <ContentPage entry={entry} parent={{ name: "Tous les articles", path: "/blog" }} />;
}
