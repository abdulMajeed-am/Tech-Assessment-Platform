Overview
This project is a responsive User Dashboard for a Tech Assessment Platform, designed as part of the recruitment process for the Frontend Developer Intern position at Coders Boutique. The dashboard allows users to manage their assessments and view their progress while adhering to modern UI/UX principles.

Features
Dashboard Features
Header Section

Logo placeholder and navigation links: Dashboard, Assessments, Profile.
User avatar with a dropdown menu for Settings and Logout.
Assessments Overview Section

Table displaying:
Assessment Title
Status (Not Started, In Progress, Completed)
Score (if completed)
Date Assigned
Sorting functionality by Date Assigned and Status.
Assessment Summary Cards

Total Assessments: Displays the total number of assessments assigned.
Completed Assessments: Shows the count of completed assessments.
Start New Assessment

A button opens a modal or new page with a dummy message to simulate starting a new assessment.
Backend Features
Database

A Supabase table named assessments with columns:
id, title, status, score, and date_assigned.
API Endpoints

GET: Fetch assessments data from the database.
PUT: Update assessment status and score.
Bonus Features Implemented (Optional)
A search bar to filter assessments by title.
Progress bar visualizing the completion rate of assessments.
Animated transitions for table sorting and modal openings.
Technology Stack
Frontend: Next.js, Typescipt, Javascript
Backend: supabase, Next.js API routes
Deployment: Vercel (live demo provided below)



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
