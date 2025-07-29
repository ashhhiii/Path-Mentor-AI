

## Overview

Path-mentorAI  is a full-stack web application that helps users advance their careers with AI-powered tools. Users can generate resumes, cover letters, and prepare for interviews using interactive quizzes and analytics. The app is built with Next.js, NeonDB, Tailwind CSS, Prisma, Inngest, and Shadcn UI.

## Features

- **AI Resume Builder:** Create and manage professional resumes.
- **AI Cover Letter Generator:** Generate tailored cover letters for job applications.
- **Interview Preparation:** Take mock interviews and quizzes, view performance analytics.
- **User Dashboard:** Track your progress and manage your documents.
- **Onboarding:** Guided onboarding for new users.
- **Authentication:** Secure sign-in/sign-up with Clerk.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Shadcn UI
- **Backend:** Next.js API routes, Prisma ORM, NeonDB (Postgres)
- **Authentication:** Clerk
- **AI Integration:** Gemini API
- **Background Jobs:** Inngest

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ashhhiii/Path-Mentor-AI/
cd path-mentorAI
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_URL=your_neon_db_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
GEMINI_API_KEY=your_gemini_api_key
```

### 4. Set Up the Database

Run Prisma migrations to set up your database schema:

```bash
npx prisma migrate dev --name init
```

### 5. Start the Development Server

```bash
npm run dev
# or
pnpm dev
```

## Project Structure

- `app/` - Next.js app directory (routes, layouts, pages)
- `actions/` - Server actions for business logic
- `components/` - Reusable UI components
- `data/` - Static data (FAQs, features, etc.)
- `hooks/` - Custom React hooks
- `lib/` - Utilities, Prisma client, helpers
- `prisma/` - Prisma schema and migrations
- `public/` - Static assets

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npx prisma studio` - Open Prisma Studio

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request


- [Issue Tracker](https://github.com/yourusername/pathmentor/issues)
- [Community Forum](https://community.pathmentor.com)



*Empowering your career journey, one step at a time.*
