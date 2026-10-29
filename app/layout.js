import { Manrope } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  title: "Observatório de Beija-Flores — Aratuba, Ceará",
  description:
    "Jardim de conservação dedicado aos beija-flores, às plantas nativas e à educação ambiental, em Aratuba, no Maciço de Baturité.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}