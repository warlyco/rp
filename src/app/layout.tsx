import type { Metadata } from "next";
import { Gotu } from 'next/font/google'
import "./globals.css";
import { ClusterProvider } from "@/hooks/cluster";
import { ContextProvider } from "@/providers/context-provider";
import { Toaster } from "react-hot-toast";
import classNames from "classnames";

const gotu = Gotu({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: "RP",
  description: "RP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(gotu.className, "bg-gray-500 w-full mx-auto")}
      >
        <ClusterProvider>
          <ContextProvider>
            {children}
            <Toaster />
          </ContextProvider>
        </ClusterProvider>
      </body>
    </html>
  );
}
