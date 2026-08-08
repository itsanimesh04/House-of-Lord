# 📘 How to Edit House of Lord Website Content via GitHub

This guide provides step-by-step instructions for updating website text, room prices, contact numbers, email addresses, and facilities directly from your web browser without touching code.

---

## 📍 Where is the content stored?
All website information is stored in **one simple configuration file**:
👉 `src/data/siteConfig.js`

---

## 🚀 Step-by-Step Instructions

### Step 1: Go to the GitHub Repository
1. Open your web browser and visit:  
   **[https://github.com/itsanimesh04/House-of-Lord](https://github.com/itsanimesh04/House-of-Lord)**
2. Log in to your GitHub account (if prompted).

---

### Step 2: Open the Content File
1. In the file list, click on the **`src`** folder.
2. Click on the **`data`** folder.
3. Click on the file named **`siteConfig.js`**.

*(Direct link: [src/data/siteConfig.js](https://github.com/itsanimesh04/House-of-Lord/blob/main/src/data/siteConfig.js))*

---

### Step 3: Enter Edit Mode
1. Click the **Pencil Icon (✏️)** in the top-right corner of the file viewer (labelled *"Edit this file"*).

---

### Step 4: Make Your Changes
Edit the text between the quotation marks `"..."`. Here are common examples:

#### 📞 1. Updating Phone Numbers & Email
Scroll to the top section under `siteMetadata`:
```js
contactPhone1: "+91 77880 00910",
contactPhone2: "+91 77880 00911",
email: "houseoflordhotel@gmail.com",
```
Simply change the text inside `"..."` to your new phone number or email address.

---

#### 🛏️ 2. Updating Room Prices & Descriptions
Scroll down to `export const rooms`:
```js
{
  image: "/images/room1.png",
  title: "Deluxe Room",
  price: "₹2,499",  // <-- Edit price here
  desc: "Elegant interiors with modern comforts and round-the-clock room service.",
  amenities: [
    "King Size Bed",
    "High Speed Wi-Fi",
    "Intercom",
    "Air Conditioning",
  ],
},
```
- To change the price from `₹2,499` to `₹2,799`, replace `"₹2,499"` with `"₹2,799"`.

---

#### ☕ 3. Updating Facilities / Amenities
Scroll to `export const facilities`:
```js
export const facilities = [
  { title: "Water Bottle" },
  { title: "Shower Gel" },
  { title: "Soap" },
  { title: "Electric Kettle" },
  ...
];
```
- Change any facility name inside the quotes `"..."`.

---

### Step 5: Save & Deploy Changes
1. After making your changes, click the green **`Commit changes...`** button in the top-right corner.
2. In the pop-up modal, click **`Commit changes`**.

🎉 **That's it!** Once you click *Commit changes*, Vercel/Netlify will automatically rebuild your site. Your changes will be live on [houseoflordhotel.com](http://houseoflordhotel.com/) within 1–2 minutes!

---

## ⚠️ Important Rules to Remember

1. **Always keep quotation marks (`"..."`)** around text.
   - ✅ Correct: `price: "₹2,999",`
   - ❌ Incorrect: `price: ₹2,999,`

2. **Always keep commas (`,`)** at the end of lines inside lists.
   - ✅ Correct: `contactPhone1: "+91 77880 00910",`

3. **Do not change object keys** (words before the colon like `title:`, `price:`, `desc:`). Only change the values inside `"..."` after the colon.
