import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jystem | Del Negocio a la Empresa",
  description:
    "Jystem transforma negocios mediante sistemas, tecnología y estructura empresarial para operar de manera más profesional, eficiente y escalable.",
  keywords: [
    "transformación empresarial",
    "sistemas empresariales",
    "automatización",
    "software personalizado",
    "Jystem Studio",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Jystem | Del Negocio a la Empresa",
    description:
      "Sistemas personalizados para que tu negocio pueda operar mejor.",
    type: "website",
    locale: "es_AR",
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
