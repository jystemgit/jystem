import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jystem.com.ar"),
  title: {
    default: "Jystem | Del Negocio a la Empresa",
    template: "%s | Jystem",
  },
  description:
    "Jystem diseña e implementa sistemas empresariales para transformar negocios en empresas con más estructura, control y capacidad de crecimiento.",
  keywords: [
    "transformación empresarial",
    "sistemas empresariales",
    "automatización",
    "software personalizado",
    "Jystem Studio",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jystem | Del Negocio a la Empresa",
    description:
      "Transformamos problemas operativos en sistemas claros para que tu negocio pueda crecer como empresa.",
    type: "website",
    locale: "es_AR",
    siteName: "Jystem",
    images: [
      {
        url: "/logo-jystem.jpg",
        width: 1200,
        height: 630,
        alt: "Jystem, del negocio a la empresa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jystem | Del Negocio a la Empresa",
    description:
      "Sistemas empresariales para operar con más estructura, control y capacidad de crecimiento.",
    images: ["/logo-jystem.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
