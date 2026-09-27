import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Anciennes URL de l'ex-site WordPress encore connues de Google : redirigées
  // (301) vers leur équivalent actuel pour conserver leur référencement.
  async redirects() {
    return [
      { source: "/site-internet", destination: "/services/creation-site-internet", permanent: true },
      { source: "/creation-de-contenu", destination: "/services/production-video", permanent: true },
      { source: "/reseaux-sociaux", destination: "/services/production-video", permanent: true },
      { source: "/tbuilder-layout/:path*", destination: "/studio", permanent: true },
    ];
  },
  async headers() {
    return [
      // Les URLs *.vercel.app servent le même site que webelevate.fr : on les
      // exclut de l'index Google pour éviter le contenu dupliqué.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<sub>.*)\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
