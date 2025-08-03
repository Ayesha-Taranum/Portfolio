
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: { // Teal
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: { // Soft Lavender
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: { // Indigo/Deep Blue
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
             // Added sidebar specific colors for the VS Code style section
             // You might want to adjust these HSL values to better match a VS Code theme
  			sidebar: {
  				DEFAULT: 'hsl(240 10% 10%)', // Darker background for sidebar
  				foreground: 'hsl(210 40% 96.1%)', // Lighter text for sidebar
                border: 'hsl(240 3.7% 15.9%)', // Border color for sidebar elements
                accent: 'hsl(210 40% 96.1% / 0.1)', // Accent for hover/selection
                'accent-foreground': 'hsl(210 40% 98%)', // Text color on accent
  				ring: 'hsl(var(--ring))' // Reuse main ring color
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
            'blob': { // Added blob animation
                 '0%': { transform: 'translate(0px, 0px) scale(1)' },
                 '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                 '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                 '100%': { transform: 'translate(0px, 0px) scale(1)' },
            },
            'fade-in-down': { // Added fade-in-down animation
                '0%': { opacity: '0', transform: 'translateY(-20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            'fade-in-up': { // Added fade-in-up animation
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            'fade-in-left': { // Added fade-in-left animation
                '0%': { opacity: '0', transform: 'translateX(-30px)' },
                '100%': { opacity: '1', transform: 'translateX(0)' },
            },
            'fade-in-right': { // Added fade-in-right animation
                '0%': { opacity: '0', transform: 'translateX(30px)' },
                '100%': { opacity: '1', transform: 'translateX(0)' },
            },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
            'blob': 'blob 7s infinite ease-in-out', // Added blob animation utility
            'fade-in-down': 'fade-in-down 0.8s ease-out forwards', // Added fade-in-down utility
            'fade-in-up': 'fade-in-up 0.8s ease-out forwards', // Added fade-in-up utility
            'fade-in-left': 'fade-in-left 1s ease-out forwards', // Added fade-in-left utility
            'fade-in-right': 'fade-in-right 1s ease-out forwards', // Added fade-in-right utility
  		},
        transitionDelay: { // Added transition delay utilities
             '0': '0ms',
             '100': '100ms',
             '200': '200ms',
             '300': '300ms',
             '400': '400ms',
             '500': '500ms',
        },
        animationDelay: { // Added animation delay utilities (useful if needed directly in class names)
             '2000': '2s',
             '4000': '4s',
        },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
