import "../styles/global.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto"
});

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ronald Tomaz",
  description:
    "Conheça minhas outras redes e bora se conectar e bater um papo?js"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
