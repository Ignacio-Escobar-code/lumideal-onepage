import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lumideal",
  description: "Disfrutá de la energía solar",
  keywords: [
    "energía solar",
    "instalaciones solares",
    "paneles solares",
    "bombas de calor",
    "termotanques",
    "autoconsumo solar",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
