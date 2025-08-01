import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planto",
  description:
    "A plant care application. Track your plants, get reminders, and learn how to care for them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
