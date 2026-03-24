# Layout and UI Design Skills

- Use Tailwind CSS exclusively for styling. Do not create separate `.css` files unless strictly necessary for global variables.
- Maintain a responsive design from the start (mobile-first).
- For icons, use the `lucide-react` library, which is already installed.
- Maintain a consistent color palette using Tailwind’s semantic classes (e.g., text-blue-600, bg-gray-50).
- All visual components must render quickly via Vite; ensure you do not include heavy dependencies that affect the bundle size.