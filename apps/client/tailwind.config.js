/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",

  theme: {
    fontFamily: {
      helvetica: ["DM Sans", "sans-serif"],
      "dm-sans": "DM Sans",
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        900: "900px",
        81.8: "81.8vh",
        400: "400px",
      },
      backgroundImage: {
        "login-bg":
          "url(https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-9.jpg)",
        newsletter:
          "url(https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-5.jpg)",
      },
      colors: {
        "bg-cart": "#68C17C",
        "product-bg": "#F8F3F1",
        "custom-gray": "#777777",
        "wishlist-header": "#F7F6FB",
        "cart-icon": "#FE487C",
        "color-primary": "#3577f0",
        "light-primary": " #8c71db",
        "color-secondary": " #ff497c",
        "color-tertiary": "#FAB8C4",
        "color-white": " #ffffff",
        "color-dark": " #27272E",
        "color-black": " #000000",
        "color-light": "#CBD3D9",
        "color-lighter": " #F6F7FB",
        "color-lightest": "#C4C4C4",
        "color-chart01": " #896BA7",
        "color-chart02": " #BADEFF",
        "color-chart03": " #E76458",
        "color-heading": "#292930",
        "color-body": "#777777",
        "color-border-light": " #E3E6E9",
        "color-border-dark": " #42424A",
        "color-gray": " #999FAE",
        "color-midgray": "#878787",
        "color-extra01": "#999FAE",
        "color-success": " #3EB75E",
        "color-danger": " #FF0003",
        "color-warning": " #FF8F3C",
        "color-info": " #1BA2DB",
        "color-facebook": " #3B5997",
        "color-twitter": " #1BA1F2",
        "color-youtube": " #ED4141",
        "color-linkedin": "#0077B5",
        "color-pinterest": "#E60022",
        "color-instagram": " #C231A1",
        "color-vimeo": "#00ADEF",
        "color-twitch": " #6441A3",
        "color-discord": " #7289da",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        spacing: {
          "cart-500": "500px",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
