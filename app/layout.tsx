import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"], // You can specify different weights
  subsets: ["latin"],
  variable: "--font-roboto", // This allows using it in CSS
});

export const metadata: Metadata = {
  title: "Signature Scan Approval | Scan Signature",
  description:
    "Scan Signature allows you to Clear all unauthorized Signatures and Search Malicious Contracts for transactions, addresses, tokens, prices and other activities taking place on Revoke Smart Chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://beaconscan.com/favicon.ico"
          sizes="any"
        />

        <title>Signature Scan Approval | Scan Signature</title>
        <meta name="title" content="Signature Scan Approval | Scan Signature" />
        <meta
          name="description"
          content="Scan Signature allows you to Clear all unauthorized Signatures and Search Malicious Contracts for transactions, addresses, tokens, prices and other activities taking place on Revoke Smart Chain"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://scansignature.com/tokenapprovalchecker"
        />
        <meta
          property="og:title"
          content="Signature Scan Approval | Scan Signature"
        />
        <meta
          property="og:description"
          content="Scan Signature allows you to Clear all unauthorized Signatures and Search Malicious Contracts for transactions, addresses, tokens, prices and other activities taking place on Revoke Smart Chain"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/meraeugene/revoke-scan/refs/heads/main/public/thumbnail2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://scansignature.com/tokenapprovalchecker"
        />
        <meta property="twitter:title" content="Token Approvals | RevokeScan" />
        <meta
          property="twitter:description"
          content="Scan Signature allows you to Clear all unauthorized Signatures and Search Malicious Contracts for transactions, addresses, tokens, prices and other activities taking place on Revoke Smart Chain"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/meraeugene/revoke-scan/refs/heads/main/public/thumbnail2.png"
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
