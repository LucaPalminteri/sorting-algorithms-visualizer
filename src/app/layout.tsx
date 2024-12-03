import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sorting Algorithms Visualizer",
  description:
    "Interactive visualization of various sorting algorithms including Bubble Sort, Selection Sort, Insertion Sort, and more.",
  keywords: [
    "Sorting Algorithms",
    "Algorithm Visualization",
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
    "Educational Tool",
    "Computer Science",
    "Programming",
  ],
  authors: [
    {
      name: "Sorting Visualizer",
      url: "https://github.com/sorting-visualizer",
    },
  ],
  // TODO: change for Viewport Next object
  // https://nextjs.org/docs/app/api-reference/functions/generate-viewport
  //themeColor: "#3b82f6",
  openGraph: {
    title: "Sorting Algorithms Visualizer",
    description:
      "Interactive visualization of various sorting algorithms including Bubble Sort, Selection Sort, Insertion Sort, and more.",
    type: "website",
    siteName: "Sorting Algorithms Visualizer",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorting Algorithms Visualizer",
    description:
      "Interactive visualization of various sorting algorithms including Bubble Sort, Selection Sort, Insertion Sort, and more.",
  },
  // TODO: change for Viewport Next object
  // https://nextjs.org/docs/app/api-reference/functions/generate-viewport
  //viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
