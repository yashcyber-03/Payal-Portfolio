# Content Creator Portfolio (React + Vite + Tailwind + Framer Motion)

Editorial portfolio template. All text, images and links are placeholders until you replace them.

## Run
```bash
npm install
npm run dev
npm run build
```

## Edit your content (no component changes needed)
- `src/data/creator.js`: name, title, city, email, headline, about text, skills
- `src/data/projects.js`: featured work and filter categories (set each `link`)
- `src/data/social.js`: platform URLs and audience numbers (leave blank rather than guess)
- `src/data/offers.js`: collaborations, services, project types
- `public/images/`: replace the placeholder images (keep names, or change paths in the data files)

Links with an empty URL show as "link not set" instead of pointing nowhere.

## Contact form
Validated in the browser, but messages are only delivered if you connect something:
1. **Form service:** create an endpoint (e.g. Formspree), set `VITE_FORM_ENDPOINT` in `.env` (and in Vercel). The form POSTs JSON and only shows "sent" on a successful response.
2. **Email only:** set `VITE_CONTACT_EMAIL`. The form then offers an "Open in email app" button.
With neither, the form says the enquiry is ready but not sent.

## Deploy
1. `git init && git add . && git commit -m "Initial commit"`, then push to a new GitHub repo.
2. In Vercel: Add New, Project, import the repo (Vite preset, build `npm run build`, output `dist`). Add the env vars above. `vercel.json` handles routing.
