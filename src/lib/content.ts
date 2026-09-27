// Contenus SEO (pages services, pages locales/métier, articles du blog) écrits en
// Markdown dans /content. Ajouter un contenu = ajouter UN fichier .md :
// les pages, le sitemap et /llms.txt se mettent à jour tout seuls.
// Format détaillé dans CONTENT.md à la racine du repo.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type ContentCollection = "services" | "pages" | "blog";

export type ContentKind = "service" | "ville" | "metier" | "guide";

export type ContentFaq = { q: string; a: string };
export type ContentPrice = { label: string; from: string; note?: string };

export type ContentEntry = {
  collection: ContentCollection;
  slug: string;
  kind: ContentKind;
  title: string; // H1
  metaTitle: string; // <title> (le suffixe « · webelevate » est ajouté)
  description: string; // meta description
  answer: string; // paragraphe-réponse sous le H1 (extrait par Google / IA)
  datePublished: string; // AAAA-MM-JJ
  dateModified: string; // AAAA-MM-JJ
  service?: string; // slug de la page service liée (collection services)
  realisations: string[]; // slugs de lib/realisations.ts
  related: string[]; // chemins internes, ex. "/agence-web-strasbourg"
  faq: ContentFaq[];
  prices: ContentPrice[];
  city?: string;
  draft: boolean;
  html: string; // corps de la page rendu en HTML
};

const CONTENT_DIR = path.join(process.cwd(), "content");

// Chemin public d'un contenu selon sa collection.
export function contentPath(e: Pick<ContentEntry, "collection" | "slug">) {
  if (e.collection === "services") return `/services/${e.slug}`;
  if (e.collection === "blog") return `/blog/${e.slug}`;
  return `/${e.slug}`;
}

function toDateString(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

function readEntry(collection: ContentCollection, file: string): ContentEntry {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, collection, file), "utf8");
  const { data, content } = matter(raw);
  const slug = file.replace(/\.md$/, "");
  return {
    collection,
    slug,
    kind: data.kind,
    title: data.title,
    metaTitle: data.metaTitle ?? data.title,
    description: data.description,
    answer: data.answer,
    datePublished: toDateString(data.datePublished),
    dateModified: toDateString(data.dateModified ?? data.datePublished),
    service: data.service,
    realisations: data.realisations ?? [],
    related: data.related ?? [],
    faq: data.faq ?? [],
    prices: data.prices ?? [],
    city: data.city,
    draft: data.draft === true,
    html: marked.parse(content, { async: false }),
  };
}

// Contenus publiés d'une collection (les brouillons `draft: true` sont exclus).
export function getContent(collection: ContentCollection): ContentEntry[] {
  const dir = path.join(CONTENT_DIR, collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readEntry(collection, f))
    .filter((e) => !e.draft)
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}

export function getContentEntry(
  collection: ContentCollection,
  slug: string,
): ContentEntry | undefined {
  return getContent(collection).find((e) => e.slug === slug);
}

export function getAllContent(): ContentEntry[] {
  return (["services", "pages", "blog"] as const).flatMap(getContent);
}
