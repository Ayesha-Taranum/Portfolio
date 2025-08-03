import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm text-grey">
        <p>&copy; {currentYear} Ayesha Taranum. All rights reserved.</p>
         <p className="mt-1">Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
