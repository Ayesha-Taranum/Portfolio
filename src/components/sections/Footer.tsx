'use client';

import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025); // Default fallback year

  useEffect(() => {
    // Set the actual year only on the client side to avoid hydration mismatch
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm text-grey">
        <p>&copy; {currentYear} Ayesha Taranum. All rights reserved.</p>
      </div>
    </footer>
  );
}
