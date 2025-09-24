# PetScore Web Application

This project is a Next.js application built to serve as the main website for PetScore.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (using App Router)
*   **UI Components**: [ShadCN](https://ui.shadcn.com/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Language**: TypeScript
*   **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## Project Structure

The project follows the standard Next.js App Router structure.

*   `src/app/`: Contains all the routes and pages of the application.
    *   `(auth)/`: Route group for authentication pages like login and sign-up.
    *   `about/`: The "About Us" page.
    *   `contact/`: The contact page.
    *   `dashboard/`: Placeholder for the user dashboard.
    *   `how-it-works/`: Explains the PetScore system.
    *   `privacy/`: The privacy policy.
    *   `layout.tsx`: The main root layout for the entire application.
    *   `page.tsx`: The home page.
    *   `globals.css`: Global styles and Tailwind CSS configuration.
*   `src/components/`: Contains reusable React components.
    *   `Header.tsx`: The main navigation header.
    *   `Footer.tsx`: The main site footer.
    *   `Logo.tsx`: The PetScore logo component.
*   `public/`: Static assets are not used in this project; images are loaded from a CDN.
*   `next.config.js`: Configuration file for Next.js. It includes authorization for image hostnames.
*   `tailwind.config.ts`: Configuration for Tailwind CSS.
*   `package.json`: Lists project dependencies and scripts.

## How It Works

1.  **Routing**: The application uses the Next.js App Router. Pages are created by adding `page.tsx` files within folders in the `src/app` directory.
2.  **Styling**: Styling is handled by Tailwind CSS. Global styles and CSS variables for the theme are defined in `src/app/globals.css`. Components are styled directly using Tailwind utility classes.
3.  **Components**: Reusable UI elements are built as React components in `src/components`. This promotes consistency and maintainability.
4.  **Deployment**: The project is intended for deployment on Firebase App Hosting, which automatically builds and deploys the application when changes are pushed to the main GitHub branch.

## Getting Started

To run this project locally, you would typically follow these steps:

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Run the development server: `npm run dev`
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.
