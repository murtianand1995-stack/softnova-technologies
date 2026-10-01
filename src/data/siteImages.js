// ---------------------------------------------------------------------------
// Site images — admin-controlled photos used on Home, About, Services and
// Contact (NOT the growable Gallery, which has its own store).
// ---------------------------------------------------------------------------
// Each "slot" below is a fixed spot on the site (e.g. the Home page hero
// photo). Until an admin uploads a replacement, the slot's `fallback` image
// is shown. Once uploaded, the photo is stored in Firestore (collection
// "siteImages", one document per slot key) so every visitor on every device
// sees the same image — same pattern as the Gallery.
// ---------------------------------------------------------------------------

import { useEffect, useState } from 'react'
import { app } from '../firebase'
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  Timestamp,
} from 'firebase/firestore'

const db = getFirestore(app)
const COLLECTION_NAME = 'siteImages'

// A plain "No Preview" placeholder, built as an inline SVG data URI — it
// renders instantly (no network request), unlike an external stock-photo
// URL, so there's no flash of an unrelated random image before the admin's
// real photo (or this placeholder) appears.
const NO_PREVIEW_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="npBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A6EE8"/>
      <stop offset="1" stop-color="#12203A"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#npBg)"/>
  <rect x="96" y="100" width="608" height="320" rx="16" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.28)"/>
  <circle cx="146" cy="160" r="9" fill="#4DA3FF"/>
  <rect x="176" y="151" width="280" height="18" rx="9" fill="rgba(255,255,255,0.5)"/>
  <rect x="146" y="200" width="400" height="14" rx="7" fill="rgba(255,255,255,0.32)"/>
  <rect x="146" y="228" width="300" height="14" rx="7" fill="rgba(255,255,255,0.22)"/>
  <text x="400" y="470" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="rgba(255,255,255,0.85)" text-anchor="middle">No Preview</text>
</svg>
`.trim()

const NO_PREVIEW_PLACEHOLDER = `data:image/svg+xml,${encodeURIComponent(NO_PREVIEW_SVG)}`

// Shown briefly while the very first Firestore response hasn't arrived yet
// (e.g. on a slow connection) — an animated spinner, so it reads as "still
// loading" rather than "nothing here". Uses a native SVG animation, which
// keeps animating even used as a plain <img src="...">.
const LOADING_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="ldBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A6EE8"/>
      <stop offset="1" stop-color="#12203A"/>
    </linearGradient>
    <linearGradient id="shimmer" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#ffffff" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="cardClip">
      <rect x="96" y="100" width="608" height="320" rx="16"/>
    </clipPath>
  </defs>
  <rect width="800" height="600" fill="url(#ldBg)"/>
  <rect x="96" y="100" width="608" height="320" rx="16" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.28)"/>
  <circle cx="146" cy="160" r="9" fill="#4DA3FF"/>
  <rect x="176" y="151" width="280" height="18" rx="9" fill="rgba(255,255,255,0.5)"/>
  <rect x="146" y="200" width="400" height="14" rx="7" fill="rgba(255,255,255,0.32)"/>
  <rect x="146" y="228" width="300" height="14" rx="7" fill="rgba(255,255,255,0.22)"/>
  <g clip-path="url(#cardClip)">
    <rect x="-420" y="100" width="420" height="320" fill="url(#shimmer)">
      <animateTransform attributeName="transform" type="translate" from="0 0" to="1450 0" dur="1.6s" repeatCount="indefinite"/>
    </rect>
  </g>
  <text x="372" y="470" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="rgba(255,255,255,0.85)" text-anchor="end">Loading</text>
  <circle cx="390" cy="464" r="5" fill="#ffffff">
    <animate attributeName="opacity" values="0.25;1;0.25" dur="1.2s" begin="0s" repeatCount="indefinite"/>
  </circle>
  <circle cx="408" cy="464" r="5" fill="#ffffff">
    <animate attributeName="opacity" values="0.25;1;0.25" dur="1.2s" begin="0.2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="426" cy="464" r="5" fill="#ffffff">
    <animate attributeName="opacity" values="0.25;1;0.25" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
  </circle>
</svg>
`.trim()

const LOADING_PLACEHOLDER = `data:image/svg+xml,${encodeURIComponent(LOADING_SVG)}`

// Firestore caps a single document around 1 MB; base64 text runs ~33% bigger
// than the original binary, so keep uploads comfortably under that.
const MAX_DATA_URL_BYTES = 900 * 1024

/**
 * Every editable image slot on the site. `label` is what the admin sees,
 * `fallback` is shown until that slot has an admin-uploaded photo.
 */
export const SITE_IMAGE_SLOTS = [
  {
    key: 'home-hero',
    label: 'Home — Hero Photo',
    fallback: NO_PREVIEW_PLACEHOLDER,
  },
  {
    key: 'home-intro-1',
    label: 'Home — Intro Photo 1',
    fallback: NO_PREVIEW_PLACEHOLDER,
  },
  {
    key: 'home-intro-2',
    label: 'Home — Intro Photo 2',
    fallback: NO_PREVIEW_PLACEHOLDER,
  },
  {
    key: 'about-1',
    label: 'About Us — Photo 1',
    fallback: NO_PREVIEW_PLACEHOLDER,
  },
  {
    key: 'about-2',
    label: 'About Us — Photo 2',
    fallback: NO_PREVIEW_PLACEHOLDER,
  },
  {
    key: 'product-webdev',
    label: 'Service Photo — Website Development (Home + Services)',
    fallback: NO_PREVIEW_PLACEHOLDER,
  },
  {
    key: 'product-appdev',
    label: 'Service Photo — App Development (Home + Services)',
    fallback: NO_PREVIEW_PLACEHOLDER,
  },
  {
    key: 'product-resume',
    label: 'Service Photo — Resume Building (Home + Services)',
    fallback: NO_PREVIEW_PLACEHOLDER,
  },
  {
    key: 'contact-facility',
    label: 'Contact Page — Facility Photo',
    fallback: NO_PREVIEW_PLACEHOLDER,
  },
]

const FALLBACK_MAP = Object.fromEntries(SITE_IMAGE_SLOTS.map((s) => [s.key, s.fallback]))
const LOADING_MAP = Object.fromEntries(SITE_IMAGE_SLOTS.map((s) => [s.key, LOADING_PLACEHOLDER]))

/**
 * React hook: returns a live map of { [slotKey]: src }. Shows a loading
 * spinner for every slot until the first Firestore response arrives, then
 * switches to the admin's uploaded photo, or the "No Preview" placeholder
 * for any slot that's genuinely never been set. Updates in real time on
 * every device when the admin changes a photo.
 */
export function useSiteImages() {
  const [images, setImages] = useState(LOADING_MAP)

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, COLLECTION_NAME),
      (snap) => {
        const overrides = {}
        snap.forEach((d) => { overrides[d.id] = d.data().src })
        setImages({ ...FALLBACK_MAP, ...overrides })
      },
      (err) => {
        console.error('Site images sync error:', err)
        setImages(FALLBACK_MAP) // stop spinning and show placeholders if sync fails
      }
    )
    return unsubscribe
  }, [])

  return images
}

/** Admin only (enforced by Firestore rules): upload/replace a slot's photo. */
export async function setSiteImage(key, src) {
  if (src.length > MAX_DATA_URL_BYTES) {
    throw new Error(
      'This image is still too large after compression. Please choose a smaller photo.'
    )
  }
  await setDoc(doc(db, COLLECTION_NAME, key), { src, updatedAt: Timestamp.now() })
}

/** Admin only (enforced by Firestore rules): remove a slot's photo, reverting to the fallback. */
export async function resetSiteImage(key) {
  await deleteDoc(doc(db, COLLECTION_NAME, key))
}
