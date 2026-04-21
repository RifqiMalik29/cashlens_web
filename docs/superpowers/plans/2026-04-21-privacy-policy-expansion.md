# Privacy Policy Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the bilingual (EN/ID) privacy policy in `components/PrivacyContent.tsx` to explicitly cover camera access, notification access, financial data collection, and how all data is used.

**Architecture:** Single file edit — `components/PrivacyContent.tsx`. Add three new subsections (2.3, 2.4, 2.5) to the existing "Information We Collect" section, insert a new "How We Use Your Data" section as section 3, and renumber existing sections 3→4, 4→5, 5→6. Both EN and ID language variants updated.

**Tech Stack:** Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion (already in use)

---

### Task 1: Add sections 2.3, 2.4, 2.5 to EN variant

**Files:**
- Modify: `components/PrivacyContent.tsx`

- [ ] **Step 1: Open file and locate EN section 2 close tag**

Find the closing `</div>` of the `<div className="space-y-4">` block inside EN section 2 (around line 86). It currently contains subsections 2.1 and 2.2.

- [ ] **Step 2: Insert subsections 2.3, 2.4, 2.5 after 2.2 block**

In `components/PrivacyContent.tsx`, after the closing `</div>` of the 2.2 block (the one that ends with the Crash Reports list item), add:

```tsx
                  <div>
                    <h3 className="text-lg font-semibold text-dark">2.3 Camera Access</h3>
                    <p className="mt-2 text-gray-600">
                      The app requests camera permission to scan receipts. Photos are processed on-device — only the extracted text and data are sent to Google Cloud (Gemini AI) for parsing. No photos are stored or uploaded.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">2.4 Notification Access</h3>
                    <p className="mt-2 text-gray-600">
                      The app reads incoming notifications (e.g. bank transaction alerts) to automatically log transactions. Notification content is sent to our backend for processing. This data is used solely to create transaction records and is not retained beyond processing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">2.5 Financial Data</h3>
                    <p className="mt-2 text-gray-600">
                      The app collects transaction amounts, merchant names, dates, and categories — entered manually, scanned from receipts, or parsed from bank notifications.
                    </p>
                  </div>
```

- [ ] **Step 3: Verify EN section 2 renders correctly in browser**

Run: `npm run dev`  
Navigate to `http://localhost:3000/privacy`  
Expected: Section 2 shows 2.1, 2.2, 2.3, 2.4, 2.5 with correct styling.

- [ ] **Step 4: Commit**

```bash
git add components/PrivacyContent.tsx
git commit -m "feat(privacy): add camera, notification, financial data subsections (EN)"
```

---

### Task 2: Insert new Section 3 "How We Use Your Data" in EN variant and renumber

**Files:**
- Modify: `components/PrivacyContent.tsx`

- [ ] **Step 1: Insert new Section 3 after Section 2 closing tag in EN**

In `components/PrivacyContent.tsx`, after the closing `</section>` tag of EN Section 2, add:

```tsx
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">3. How We Use Your Data</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Transaction tracking:</strong> Store and display your income and expense records.</li>
                  <li><strong>Receipt parsing:</strong> Send extracted receipt text to Google Cloud (Gemini AI) to identify amounts, merchants, and dates.</li>
                  <li><strong>Notification parsing:</strong> Send bank notification content to our backend to automatically log transactions.</li>
                  <li><strong>Budget alerts:</strong> Analyze your spending against set limits to trigger in-app notifications.</li>
                  <li><strong>App improvement:</strong> Use anonymized crash reports and usage patterns to fix bugs and improve features.</li>
                  <li><strong>Authentication:</strong> Verify your identity via email through Supabase.</li>
                </ul>
              </section>
```

- [ ] **Step 2: Renumber remaining EN sections**

In `components/PrivacyContent.tsx`, update heading text for existing EN sections:
- `3. Third-Party Services` → `4. Third-Party Services`
- `4. Your Rights` → `5. Your Rights`
- `5. Contact Us` → `6. Contact Us`

- [ ] **Step 3: Verify EN full page renders correctly**

Run: `npm run dev` (if not already running)  
Navigate to `http://localhost:3000/privacy`  
Expected: Sections 1 through 6 appear in order with correct content. No layout breakage.

- [ ] **Step 4: Commit**

```bash
git add components/PrivacyContent.tsx
git commit -m "feat(privacy): add How We Use Your Data section, renumber EN sections"
```

---

### Task 3: Add sections 2.3, 2.4, 2.5 to ID variant

**Files:**
- Modify: `components/PrivacyContent.tsx`

- [ ] **Step 1: Locate ID section 2 in the file**

Find the ID variant's section 2 block (`<h2>` with text `2. Informasi yang Kami Kumpulkan`). Currently it has a single `<ul>` with all items. The ID variant uses a flat list unlike EN's subsection structure — keep that flat list for 2.1/2.2 items and add subsections below it.

- [ ] **Step 2: Insert 2.3, 2.4, 2.5 after the existing ID section 2 ul**

After the closing `</ul>` in ID section 2, add:

```tsx
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-dark">2.3 Akses Kamera</h3>
                    <p className="mt-2 text-gray-600">
                      Aplikasi meminta izin kamera untuk memindai struk belanja. Foto diproses di perangkat — hanya teks dan data yang diekstrak yang dikirim ke Google Cloud (Gemini AI) untuk diproses. Tidak ada foto yang disimpan atau diunggah.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-dark">2.4 Akses Notifikasi</h3>
                    <p className="mt-2 text-gray-600">
                      Aplikasi membaca notifikasi masuk (misalnya notifikasi transaksi bank) untuk mencatat transaksi secara otomatis. Konten notifikasi dikirim ke server kami untuk diproses. Data ini hanya digunakan untuk membuat catatan transaksi dan tidak disimpan setelah diproses.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-dark">2.5 Data Keuangan</h3>
                    <p className="mt-2 text-gray-600">
                      Aplikasi mengumpulkan jumlah transaksi, nama pedagang, tanggal, dan kategori — baik yang dimasukkan secara manual, dipindai dari struk, maupun diurai dari notifikasi bank.
                    </p>
                  </div>
```

- [ ] **Step 3: Verify ID section renders correctly**

Navigate to `http://localhost:3000/privacy` and toggle to Bahasa Indonesia.  
Expected: Section 2 shows original list items plus 2.3, 2.4, 2.5 blocks with correct styling.

- [ ] **Step 4: Commit**

```bash
git add components/PrivacyContent.tsx
git commit -m "feat(privacy): add camera, notification, financial data subsections (ID)"
```

---

### Task 4: Insert new Section 3 "Bagaimana Kami Menggunakan Data Anda" in ID variant and renumber

**Files:**
- Modify: `components/PrivacyContent.tsx`

- [ ] **Step 1: Insert new Section 3 after ID Section 2 closing tag**

In `components/PrivacyContent.tsx`, after the closing `</section>` of ID section 2, add:

```tsx
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">3. Bagaimana Kami Menggunakan Data Anda</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Pencatatan transaksi:</strong> Menyimpan dan menampilkan catatan pemasukan dan pengeluaran Anda.</li>
                  <li><strong>Pemindaian struk:</strong> Mengirim teks struk yang diekstrak ke Google Cloud (Gemini AI) untuk mengidentifikasi jumlah, pedagang, dan tanggal.</li>
                  <li><strong>Pemrosesan notifikasi:</strong> Mengirim konten notifikasi bank ke server kami untuk mencatat transaksi secara otomatis.</li>
                  <li><strong>Peringatan anggaran:</strong> Menganalisis pengeluaran Anda terhadap batas yang ditetapkan untuk memicu notifikasi dalam aplikasi.</li>
                  <li><strong>Peningkatan aplikasi:</strong> Menggunakan laporan crash dan pola penggunaan yang dianonimkan untuk memperbaiki bug dan meningkatkan fitur.</li>
                  <li><strong>Autentikasi:</strong> Memverifikasi identitas Anda melalui email menggunakan Supabase.</li>
                </ul>
              </section>
```

- [ ] **Step 2: Renumber remaining ID sections**

In `components/PrivacyContent.tsx`, update heading text for existing ID sections:
- `3. Layanan Pihak Ketiga` → `4. Layanan Pihak Ketiga`
- `4. Hak Anda` → `5. Hak Anda`
- `5. Hubungi Kami` → `6. Hubungi Kami`

- [ ] **Step 3: Final verification — both languages, all sections**

Navigate to `http://localhost:3000/privacy`  
Check EN: sections 1–6 present, all content correct.  
Toggle to ID: sections 1–6 present, all content correct.  
No layout or styling regressions.

- [ ] **Step 4: Final commit**

```bash
git add components/PrivacyContent.tsx
git commit -m "feat(privacy): add How We Use Your Data section, renumber ID sections"
```
