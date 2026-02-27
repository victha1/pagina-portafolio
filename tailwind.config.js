module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  safelist: [
    "bg-background",
    "text-foreground",
    "text-primary",
    "text-secondary",
    "border-border",
    "outline-ring",
    "container"
  ],
  theme: {
    extend: {}
  }
};