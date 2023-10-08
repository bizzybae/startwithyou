import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SWY - AI-Powered Mock Interviews",
  openGraph: {
    title: "SWY - AI-Powered Mock Interviews",
    description:
      "SWY is an AI-powered mock interview platform that helps you practice for your residency interview.",
    images: [
      {
        url: "https://demo.startwithyou.ventures/SWY.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SWY - AI-Powered Mock Interviews",
    description:
      "SWY is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://demo.startwithyou.ventures/opengraph-image"],
    creator: "@bizzybae",
  },
  metadataBase: new URL("https://demo.startwithyou.ventures"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
