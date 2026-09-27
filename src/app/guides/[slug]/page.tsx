import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { contentPath, getContent, getContentEntry } from "@/lib/content";

// Pages générées depuis content/guides/*.md (voir CONTENT.md).
export const dynamicParams = false;

export function generateStaticParams() {
  return getContent("guides").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("guides", slug);
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

export default async function Page({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const entry = getContentEntry("guides", slug);
  if (!entry) notFound();
  return <ContentPage entry={entry} parent={{ name: "Tous les guides", path: "/guides" }} />;
}
