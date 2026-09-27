import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
