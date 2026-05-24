import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://cifrasde.com";
const SITE_TITLE = "Cifras de España — Red de datos públicos accesibles";
const SITE_DESC =
  "Cifras de España es una red de siete webs independientes que toma datos de fuentes públicas oficiales y los presenta de forma accesible y comparable.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Cifras de España",
  },
  description: SITE_DESC,
  applicationName: "Cifras de España",
  keywords: [
    "cifras de España",
    "datos públicos",
    "estadísticas España",
    "INE",
    "Banco de España",
    "transparencia",
    "datos abiertos",
  ],
  authors: [{ name: "Cifras de España" }],
  creator: "Cifras de España",
  publisher: "Cifras de España",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Cifras de España",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Cifras de España — red de datos públicos accesibles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    site: "@cifrasdees",
    creator: "@cifrasdees",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "data",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FBF8F1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cifras de España",
    alternateName: "CifrasDe",
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    description: SITE_DESC,
    sameAs: [
      "https://x.com/cifrasdees",
      "https://www.tiktok.com/@cifrasdees",
      "https://www.youtube.com/@CifrasdeEspaña",
      "https://www.instagram.com/cifrasde_es",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "editorial",
        email: "hola@cifrasde.com",
        availableLanguage: ["Spanish"],
      },
    ],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cifras de España",
    url: SITE_URL,
    inLanguage: "es-ES",
    publisher: {
      "@type": "Organization",
      name: "Cifras de España",
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-[100dvh] antialiased grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {children}
      </body>
    </html>
  );
}
