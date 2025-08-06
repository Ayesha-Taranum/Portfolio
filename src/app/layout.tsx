import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster'; 

export const metadata: Metadata = {
  title: "Ayesha Taranum", 
  description: "Ayesha Taranum's Personal Portfolio Website", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Ensure no leading/trailing space or comments directly inside the html tag before body
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="antialiased"
        suppressHydrationWarning // Add suppressHydrationWarning to body to handle browser extension class additions
      >
        {/* Main application content */}
        {children}

        {/* Toaster for notifications */}
        <Toaster />
        {/* No floating "Issue Button" should be rendered anywhere in this layout. */}
      </body>
    </html>
  );
}
