# Privacy Policy Expansion — Design Spec

**Date:** 2026-04-21  
**Status:** Approved

## Goal

Expand existing bilingual (EN/ID) privacy policy at `/app/privacy/page.tsx` → `PrivacyContent.tsx` to explicitly cover:
1. Camera access and receipt scanning
2. Notification access and bank alert parsing
3. Financial data collection
4. How all collected data is used (new dedicated section)

## Scope

File: `components/PrivacyContent.tsx`  
Both EN and ID language variants updated.

---

## Changes

### Section 2 — Information We Collect (expand)

Keep existing 2.1 (Information You Provide) and 2.2 (Information Collected Automatically) unchanged.

Add:

**2.3 Camera Access**  
App requests camera permission to scan receipts. Photos are processed on-device — only extracted text/data is sent to Google Cloud (Gemini AI) for parsing. No photos are stored or uploaded.

**2.4 Notification Access**  
App reads incoming notifications (e.g. bank transaction alerts) to automatically log transactions. Notification content is sent to our backend for processing. This data is used solely to create transaction records and is not retained beyond processing.

**2.5 Financial Data**  
App collects transaction amounts, merchant names, dates, and categories — either entered manually, scanned from receipts, or parsed from bank notifications.

---

### Section 3 — How We Use Your Data (new)

Insert after Section 2. Existing sections shift: Third-Party Services → 4, Your Rights → 5, Contact → 6.

- **Transaction tracking:** Store and display income/expense records.
- **Receipt parsing:** Send extracted receipt text to Google Cloud (Gemini AI) to identify amounts, merchants, and dates.
- **Notification parsing:** Send bank notification content to backend to auto-log transactions.
- **Budget alerts:** Analyze spending against set limits to trigger in-app notifications.
- **App improvement:** Use anonymized crash reports and usage patterns to fix bugs and improve features.
- **Authentication:** Verify identity via email through Supabase.

---

### Section renumbering

| Old | New | Title |
|-----|-----|-------|
| 3 | 4 | Third-Party Services |
| 4 | 5 | Your Rights |
| 5 | 6 | Contact Us |

---

## ID Translation

Same structural changes mirrored in Indonesian variant:
- 2.3 Akses Kamera
- 2.4 Akses Notifikasi  
- 2.5 Data Keuangan
- New Section 3: Bagaimana Kami Menggunakan Data Anda
- Renumber sections 3→4, 4→5, 5→6

---

## Out of Scope

- No changes to page route, metadata, layout, or navigation
- No changes to existing sections 2.1, 2.2, Third-Party Services, Your Rights, Contact
- No marketing notification language (app has none)
- No data retention policy (not requested)
