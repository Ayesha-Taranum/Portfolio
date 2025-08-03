import type { Metadata } from 'next';
// Removed specific Geist font imports as they might not be needed and simplify the example
import './globals.css';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster

export const metadata: Metadata = {
  title: "Ayesha's Ascent - Portfolio", // Updated Title
  description: "Ayesha Taranum's Personal Portfolio Website", // Updated Description
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
        className={`antialiased`} // Removed font variables for simplicity, assuming base styles handle fonts
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
