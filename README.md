# BigSpuntino Restaurant Website - Project Initialization and Setup

#### [Live Link](https://bigspontino-sami.vercel.app/)

### Description

**BigSpuntino** is a modern, multilingual restaurant website showcasing authentic Italian cuisine and dining experience. Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, this website captures the essence of Italian hospitality through elegant design and seamless user experience. The website features responsive design, smooth animations with **Framer Motion**, and comprehensive multilingual support for both German and English languages.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)
- [Git](https://git-scm.com/) for version control

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sabbirsami/bigspontino
   ```

2. **Change into the project directory:**

   ```bash
   cd bigspontino
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env.local` file in the project root (if needed for future integrations):
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   # Add other environment variables as needed
   ```

### Scripts

- `npm run dev`: Start the development server with Turbopack for faster builds
- `npm run build`: Build the application for production
- `npm start`: Start the production server
- `npm run lint`: Run ESLint to check code quality and style
- `npm run lint:fix`: Run ESLint and automatically fix fixable issues

### Usage

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Access the website at** `http://localhost:3000`

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

### Development

For development with hot reloading and Turbopack optimization:

```bash
npm run dev
```

The application will automatically reload when you make changes to the code.

### Features

- **Modern Italian Restaurant Design:** Elegant and visually appealing design inspired by authentic Italian dining culture
- **Multilingual Support:** Complete German and English language support with seamless switching using **i18next**
- **Responsive Design:** Mobile-first approach ensuring perfect display on all device sizes
- **Interactive Menu Sections:** Dynamic menu presentation with categories (Brunch, Lunch, Dinner, Bar)
- **Smooth Animations:** Enhanced user experience with **Framer Motion** animations
- **Event Management:** Dedicated section for restaurant events and celebrations
- **Gallery Section:** Beautiful image gallery showcasing restaurant ambiance and dishes
- **Contact Integration:** Direct email integration and comprehensive contact information
- **Job Applications:** Dedicated careers section for potential team members
- **Modern Tech Stack:** Built with Next.js 15, TypeScript, and Tailwind CSS for optimal performance
- **SEO Optimized:** Built-in Next.js SEO optimization features
- **Form Validation:** Robust form handling with **React Hook Form** and **Zod** validation

### Project Structure

```
bigspontino/
├── app/                    # Next.js app directory
├── components/            # Reusable React components
├── public/               # Static assets (images, icons, etc.)
├── styles/               # Global styles and Tailwind configuration
├── lib/                  # Utility functions and configurations
├── locales/             # Translation files (German/English)
└── types/               # TypeScript type definitions
```

### Technologies Used

- **Frontend Framework:** Next.js 15 with App Router
- **Language:** TypeScript for type safety
- **Styling:** Tailwind CSS 4 with custom animations
- **Animations:** Framer Motion for smooth transitions
- **Internationalization:** i18next and react-i18next for multilingual support
- **Forms:** React Hook Form with Zod validation
- **UI Components:** Radix UI primitives for accessibility
- **Icons:** Lucide React for consistent iconography
- **Development:** ESLint for code quality, Turbopack for fast builds

### Multilingual Support

The website supports two languages:

- **German (DE):** Primary language for local Hamburg audience
- **English (EN):** International accessibility

Language detection is automatic based on browser settings, with manual switching available.

### Performance Features

- **Server-Side Rendering (SSR):** Fast initial page loads
- **Static Site Generation (SSG):** Optimized performance for static content
- **Image Optimization:** Next.js automatic image optimization
- **Code Splitting:** Automatic bundle optimization
- **Turbopack:** Enhanced development experience with faster builds

### Future Enhancements

- Online reservation system integration
- PDF menu download functionality
- Customer review system
- Social media integration
- Newsletter subscription
- Online ordering system
- Payment gateway integration

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
