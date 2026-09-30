# SoftNova Technologies — Website

React + Vite + Tailwind CSS website for **SoftNova Technologies** ("Your Digital Growth Partner").
Services: Website Development, App Development, Resume Building.

## Features
- Pages: Home, About Us, Services, Gallery (portfolio), Contact Us, Admin
- Responsive on all devices; hamburger menu on mobile/tablet
- Admin panel (`/admin`) — Firebase Authentication (login, forgot password, change password)
- Admin can upload / delete Gallery photos and replace all Home / About / Services / Contact photos
- All photos are stored in Firebase Firestore (same on every device); no random/stock images
- Loading spinner while photos load, "No Preview" placeholder for slots with no upload
- Gallery: uniform cards, hover zoom + overlay with title/description, click to open full image, carousel on top
- Contact form sends an email via EmailJS; floating WhatsApp button; click-to-call phone; address opens Google Maps

## Setup
1. `npm install`
2. Copy `.env.example` to `.env` and fill in Firebase + EmailJS values
3. `npm run dev`

## Firestore rules
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /galleryImages/{imageId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
    match /siteImages/{imageKey} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
  }
}
```

## Deploy (Vercel)
Add every variable from `.env` in Vercel > Settings > Environment Variables, redeploy, and add the
deployed domain to Firebase > Authentication > Settings > Authorized domains.
`vercel.json` already handles direct URLs such as `/admin`.
