import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
import { ThemeProvider } from "@/providers/theme-provider"
import { Toaster } from "sonner";
export const metadata: Metadata = {
  title: "KIMOTIFY",
  description: "Automate DMs and Comments on Social media platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body 
      suppressHydrationWarning
      className={jakarta.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >{children}
          <Toaster/>
          </ThemeProvider>
          </body>
      
    </html>
    </ClerkProvider>
  );
}
