// Detailed content shown in the project modal.
// Only the 5 main MERN-stack projects have a full write-up;
// projects without an entry here simply won't open a modal on click.

const projectDetails = {
  Manmode: {
    about:
      "ManMode is a full-stack men's fashion e-commerce platform built from the ground up to handle everything a real online clothing store needs, from product discovery to checkout, payments, returns, and back-office management. It's a server-rendered application using Node.js, Express.js, and EJS on top of a MongoDB database modeled across 12+ collections covering products, orders, coupons, offers, wallet transactions, and reviews.",
    features: [
      {
        heading: "Customer Experience",
        text:
          "Google OAuth and OTP-based email authentication with password recovery, product browsing with category and brand filters, sorting by name and price, image zoom on product pages, and similar-product recommendations. A full dashboard for profile, multiple saved addresses, wishlist, cart, order history, returns, cancellations, and reviews. Checkout supports Razorpay payments with a retry flow, plus a built-in wallet and coupon/offer redemption.",
      },
      {
        heading: "Admin Dashboard",
        text:
          "Full CRUD for products, categories, brands, coupons, and offers; user management (block, unblock, delete); banner management for the homepage; order/return approval workflows; sales analytics by day, week, month, or custom range; Excel/PDF report export; and automatic PDF invoice generation.",
      },
    ],
    stack: [
      ["Frontend", "EJS templating with Tailwind CSS, built through PostCSS and Autoprefixer"],
      ["Backend", "Node.js, Express.js, session-based architecture with route-level middleware"],
      ["Database", "MongoDB with Mongoose for schema modeling and validation"],
      ["Authentication", "Passport.js (Google OAuth 2.0), bcrypt, OTP via Nodemailer"],
      ["Payments", "Razorpay — order creation, payment capture, retry handling"],
      ["File Handling", "Multer for uploads, Cloudinary for image storage and delivery"],
      ["Reporting", "ExcelJS for spreadsheets, PDFKit for reports and invoices"],
    ],
  },

  Musiffy: {
    about:
      "Musiffy is a full-stack, Spotify-inspired music streaming platform built to explore real-time interaction patterns alongside a polished media-consumption experience. Beyond streaming, the app layers in live social features: users can see who else is online, what they're currently listening to, and chat with each other in real time, all powered by Socket.IO.",
    features: [
      {
        heading: "User Experience",
        text:
          "Streaming with album browsing, a personal wishlist, and a real-time presence system showing other users' online status and listening activity. Direct messaging with chat history persisted and delivered instantly through Socket.IO. A mobile-first UI built with Tailwind CSS and Shadcn/UI, including resizable panel layouts and skeleton loading states.",
      },
      {
        heading: "Admin Panel",
        text:
          "A dedicated panel for uploading and managing songs and albums, viewing all registered users, blocking or unblocking accounts, and reviewing platform-wide analytics — total songs, albums, users, and unique artists. Admin access is gated through Clerk authentication with environment-configured authorization.",
      },
    ],
    stack: [
      ["Frontend", "React, TypeScript, Vite, Zustand, Shadcn/UI (Radix + Tailwind)"],
      ["Backend", "Node.js, Express.js — models, controllers, routes, middleware"],
      ["Database", "MongoDB with Mongoose"],
      ["Real-time", "Socket.IO for presence tracking, activity broadcasting, and live chat"],
      ["Authentication", "Clerk, with custom middleware for route protection"],
      ["Media", "Cloudinary, with seed scripts and node-cron for scheduled cleanup"],
    ],
  },

  "K-mart": {
    about:
      "K Mart is a full-stack grocery e-commerce application built around the everyday Kerala grocery-shopping experience, with a focus on fast, low-friction checkout and a properly built-out admin side rather than just a storefront. Authentication was a major focus: email/password with JWT access and refresh token rotation, Google OAuth, and OTP-verified signup and password reset.",
    features: [
      {
        heading: "Customer Experience",
        text:
          "Product browsing and cart management, a Stripe-powered checkout flow, and an order confirmation experience with animated feedback — Framer Motion transitions, confetti, and count-up stats — to make checkout feel satisfying rather than just functional. Real-time-feeling notifications with read/unread tracking.",
      },
      {
        heading: "Admin Dashboard",
        text:
          "Management for products, categories, and coupons, with Cloudinary-backed image uploads and sales analytics, including daily sales trends visualized with Recharts. A dedicated admin notification feed alongside coupon-specific analytics for real visibility into store performance.",
      },
    ],
    stack: [
      ["Frontend", "React, Vite, Tailwind CSS, Zustand, Framer Motion, Recharts"],
      ["Backend", "Node.js, Express.js — models, controllers, routes, middleware"],
      ["Database", "MongoDB with Mongoose, Redis (Upstash/ioredis) for OTP and caching"],
      ["Authentication", "JWT (access/refresh rotation), Google OAuth, OTP via Nodemailer, bcryptjs"],
      ["Payments", "Stripe"],
      ["Media", "Cloudinary for product image storage and delivery"],
    ],
  },

  BlogSpace: {
    about:
      "BlogSpace is a full-stack content publishing platform built to give authors a clean space to write and share posts, and readers a simple way to discover content by category or author. The writing experience is built around React Quill, a rich text editor, so authors aren't limited to plain text when composing posts.",
    features: [
      {
        heading: "Core Features",
        text:
          "Authors can create, edit, and delete their own posts, each organized under a category, with dedicated pages for browsing by category and by author. Profile editing and avatar uploads are handled through Express File Upload with UUID-based filenames to avoid naming collisions. JWT-based Bearer-token authentication, and feedback delivered through toast notifications instead of silent failures.",
      },
    ],
    stack: [
      ["Frontend", "React, React Router, React Quill, React Toastify, Axios"],
      ["Backend", "Node.js, Express.js, with centralized error-handling middleware"],
      ["Database", "MongoDB with Mongoose"],
      ["Authentication", "JWT with Bearer-token authorization, bcryptjs"],
      ["File Handling", "Express File Upload for avatars, UUID for unique filenames"],
    ],
  },

  Chate: {
    about:
      "Chate is a full-stack real-time messaging platform built around fast one-to-one conversations, live presence, and a genuinely personalizable interface rather than a one-size-fits-all chat UI. Socket.IO powers real-time messaging and online/offline presence without needing to refresh or poll.",
    features: [
      {
        heading: "Core Features",
        text:
          "One-to-one messaging with image sharing, and online/offline status updating live as people connect and disconnect. Authentication supports email/password and Google OAuth, with OTP verification via Nodemailer covering signup, login, and password reset. Profile pictures are uploaded and served through Cloudinary.",
      },
      {
        heading: "Personalization",
        text:
          "A dedicated settings page lets users switch between DaisyUI themes and customize the font family and font size used throughout the app, with preferences persisted in local storage so they carry over between sessions.",
      },
    ],
    stack: [
      ["Frontend", "React, Vite, Tailwind CSS, DaisyUI, Zustand, Socket.IO client"],
      ["Backend", "Node.js, Express.js, Socket.IO server"],
      ["Database", "MongoDB with Mongoose"],
      ["Authentication", "JWT, Google OAuth, OTP via Nodemailer, bcryptjs"],
      ["Media", "Cloudinary for profile picture storage"],
    ],
  },
};

export default projectDetails;
