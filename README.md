# Onset Initiative Website

This is the website for **The Onset Initiative**, a youth-led public health education project helping students understand early cancer trends, warning signs, family history, prevention, and the unresolved science behind young-onset colorectal and breast cancers.

The site is built with Next.js, React, TypeScript, and Tailwind CSS. Most content is data-driven so seminars, resources, forms, and archive links can be updated without redesigning the site.

## Run locally

Install dependencies:

```bash
npm install
```

Start the local site:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```txt
http://localhost:3000
```

## Where to edit content

Most updates happen in:

```txt
src/data/siteConfig.ts
src/data/seminars.ts
src/data/resources.ts
src/data/programs.ts
src/data/partners.ts
src/data/teamRoles.ts
src/data/impactStats.ts
```

## How to add a seminar

1. Upload the flyer to `public/flyers`.
2. Upload slides to `public/slides`.
3. Add a recording link from YouTube, or upload a file to `public/recordings`.
4. Edit `src/data/seminars.ts`.
5. Add a new seminar object or update an existing one.
6. Set the status:

```txt
planning
registration_open
registration_closed
live
completed
```

7. Add links when available:

```txt
registrationUrl
zoomUrl
flyerUrl
recordingUrl
slidesUrl
summaryUrl
preSurveyUrl
postSurveyUrl
```

Example flyer link:

```ts
flyerUrl: "/flyers/seminar-1-flyer.pdf"
```

The homepage automatically uses the first seminar with `registration_open`. If no seminar is open for registration, the site shows a coming-soon state.

## How to add a resource

1. Upload the file to the correct folder:

```txt
public/resources
public/flyers
public/slides
public/reports
public/worksheets
public/recordings
```

2. Edit `src/data/resources.ts`.
3. Add a resource entry with a category and type.
4. Set `featured: true` if it should appear on the homepage.

Example:

```ts
{
  id: "family-history-worksheet",
  title: "Family Cancer History Worksheet",
  category: "Family History",
  type: "Worksheet",
  description: "A printable guide to help students and families discuss cancer history.",
  url: "/worksheets/family-history-worksheet.pdf",
  dateAdded: "2026-07-01",
  reviewedBy: "Pending medical review",
  featured: true
}
```

## How to update forms and links

Edit `src/data/siteConfig.ts`.

Useful fields:

```txt
mailingListUrl
joinFormUrl
partnerFormUrl
instagramUrl
youtubeUrl
donationUrl
```

If a form URL is blank, the website shows a coming-soon button or uses email as a fallback.

## How to update impact numbers

Edit `src/data/impactStats.ts`.

If all numbers are zero, the homepage says:

```txt
Impact tracking will begin with our first seminar cycle.
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Create a new project on Vercel.
3. Connect the GitHub repository.
4. Use the default Next.js settings.
5. Add a custom domain later if needed.

## Deploy to Netlify

1. Push the project to GitHub.
2. Create a new site on Netlify.
3. Connect the GitHub repository.
4. Build command:

```txt
npm run build
```

5. Publish directory:

```txt
.next
```

For a static export workflow later, update the Next.js configuration first.

## Medical disclaimer

The Onset Initiative does not provide medical advice, diagnosis, or treatment. Materials are for educational purposes only and should not replace guidance from a licensed healthcare professional.
