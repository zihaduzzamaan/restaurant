# Restaurant Design Context & Specifications (Gustoso)

This document outlines the visual structure, layout logic, color palettes, and typography based strictly on the Classic Italian Bistro theme (`italian-restaurant-02`) for the **Gustoso** website.

---

## 🎨 Color Palettes (Classic Italian Bistro)

To achieve a highly professional and cozy bistro aesthetic, we implement the following core color variables:
*   `--primary-accent`: `#ff770f` (Vibrant Italian Orange - stimulates appetite and warmth)
*   `--accent-hover`: `#eb6700` (Warm Dark Orange for button hover states)
*   `--bg-dark`: `#00123a` (Deep Midnight Blue - used for headers, dark banners, and footers)
*   `--bg-light`: `#ffffff` (Pure White - clean contrast for body panels)
*   `--bg-cream`: `#f7f9fc` (Very Light Cool Grey-Blue for section backgrounds)
*   `--text-main`: `#313338` (Soft Charcoal for body text readability)
*   `--text-dark`: `#0c0c0c` (Deep Rich Black for clear, professional headings)
*   `--border-color`: `#e2e8f0` (Subtle boundary borders)

---

## 🔤 Typography & Font Design System

To ensure a highly consistent and professional reading experience across all pages, we implement a strict typographic scale. We deliberately **minimize uppercase transforms** (avoiding loud `text-transform: uppercase` declarations) to maintain a refined, elegant, and modern aesthetic.

### 1. Selected Google Fonts & Integrations
We use three selected Google Fonts to balance luxury, tradition, and readability:
*   **Signature Display Heading**: `'Berkshire Swash', cursive`
    *   *Usage*: Main Brand name (Logo), Hero brand accents, and top-tier section highlights.
    *   *Feel*: Warm, classic Italian craftsmanship.
*   **Primary Section Heading**: `'Playfair Display', serif` (Weights: `400`, `600`, `700`)
    *   *Usage*: Page titles, secondary headings, menu items, and card titles.
    *   *Feel*: Luxurious, editorial, and highly professional.
*   **Subheadings & Accent Labels**: `'Yesteryear', cursive`
    *   *Usage*: Elegant decorative subtitles, section pre-headers (e.g., *"Since 1978"* or *"Our Story"*).
    *   *Feel*: Welcoming, handwritten touch.
*   **Body Copy & Controls**: `'Raleway', sans-serif` (Weights: `300`, `400`, `500`, `600`)
    *   *Usage*: Paragraph text, forms, menu descriptions, tables, and buttons.
    *   *Feel*: Clean, modern geometric layout. High legibility.

### 2. Typographic Scale & Hierarchy Rules
All typographic elements must conform to the following CSS tokens. Line heights are set generously to prevent text crowding:

| Element | Font Family | Size | Weight | Line Height | Letter Spacing | Case Convention |
|---|---|---|---|---|---|---|
| **H1 (Hero Main)** | `'Playfair Display'` | `4.2rem` (64px) | `700` | `1.2` | `-0.02em` | Title Case (No forced uppercase) |
| **H2 (Section Header)** | `'Playfair Display'` | `2.8rem` (45px) | `700` | `1.3` | `normal` | Title Case (No forced uppercase) |
| **H3 (Sub-sections)** | `'Playfair Display'` | `1.8rem` (28px) | `600` | `1.35` | `normal` | Title Case |
| **H4 (Item Titles)** | `'Raleway'` | `1.3rem` (20px) | `600` | `1.4` | `0.02em` | Title Case |
| **H5 (Small Labels)** | `'Raleway'` | `1.05rem` (16px) | `500` | `1.4` | `0.05em` | Sentence Case |
| **Subtitle Accent** | `'Yesteryear'` | `2.2rem` (35px) | `400` | `1.1` | `normal` | Sentence Case / Fluid Script |
| **Lead Paragraph** | `'Raleway'` | `1.2rem` (19px) | `300` | `1.8` | `normal` | Sentence Case |
| **Body Copy** | `'Raleway'` | `1.0rem` (16px) | `400` | `1.7` | `0.01em` | Sentence Case |
| **Buttons & Controls** | `'Raleway'` | `0.95rem` (15px) | `600` | `1.0` | `0.06em` | Title Case (No global uppercase) |
| **Captions/Meta** | `'Raleway'` | `0.85rem` (13px) | `400` | `1.5` | `0.08em` | Sentence Case |

### 3. Casing & Styling Principles
*   **Strict Limit on Uppercase (`text-transform: uppercase`)**: Force-transforming text to uppercase is limited *only* to small decorative meta labels (e.g. `10-15px` category tags or menu tags like `"NEW"` or `"VEGAN"`). All buttons, page headers, navigation links, and section titles must use natural Title Case or Sentence Case. This makes the UI feel softer, more premium, and less aggressive.
*   **Heading Colors**: Headings (`h1`, `h2`, `h3`, `h4`) default to our deep contrast color (`#000000` or `#2b2d31`) on light backgrounds, and white (`#ffffff`) on dark sections.
*   **Body Copy Readability**: Set to `#6e737c` (muted slate) on light backgrounds for a softer contrast that reduces eye strain, and `#e8e4dc` on dark panels.
*   **Spacing Balance**: Ensure every text block has proportional margins. Headings must have a clean `margin-bottom: 0.5em` and paragraphs must have a clean `margin-bottom: 1.25em`.

---


## 🧱 Key Structural & Layout Components

### 1. Transparent Floating Header
*   **Desktop Layout**: Logo on left, inline menu centered (Home, About Us, Menu, Banquet Facility, Gallery, Catering, Contact Us), call-to-action button (Book a Table) on the right.
*   **Transitions**: Transitions from transparent to solid midnight black (`--bg-dark`) with subtle shadow on scroll.
*   **Mobile View**: Hamburger icon on right, opening an ultra-smooth fullscreen overlay menu with responsive animations.

### 2. Immersive Hero Section
*   **Aesthetic**: Full-bleed background image with dark overlay, centered or left-aligned typography.
*   **Content**: Subtitle in `'Yesteryear'` cursive font, main statement in large, bold serif, Call-To-Action buttons (View Menu, Book Table).
*   **Micro-animations**: Parallax background scroll effect, smooth title fade-ins.

### 3. About Us Story & Signature Dish Grid
*   **Layout**: Side-by-side flexbox/grid layout. High-quality image with geometric gold/orange borders on one side, storytelling copy on the other.
*   **Grid**: Highlight of 3 core values (Fresh Ingredients, Passionate Chefs, Elegant Atmosphere) using custom icons.

### 4. Interactive Restaurant Menu
*   **Layout**: Category filter tabs (All, Starters, Main Course, Banquet/Platter, Desserts, Drinks).
*   **Design**: Grid layout containing cards with item names, prices in accent color, brief description, and badges (e.g. *Chef Recommend*, *Vegan*, *Spicy*).
*   **No Cart**: Clicking items will open a detailed description popup with an option to add to custom "Menu Kit" planner.

### 5. Banquet Facility Showcase
*   **Content**: Elegant details about hosting private parties, weddings, corporate events. Includes capacity (e.g., up to 150 guests), audio-visual equipment details, and layout diagrams.
*   **CTA**: Dedicated inquiry button linking directly to the booking/contact system.

### 6. Event Catering & "Menu Kit" Planner
*   **Functionality**: Interactive "Menu Kit" planner allowing customers to build a custom catering package.
*   **Action**: Select items from the menu to add to their custom "Catering Kit", showing an estimated price per head and a "Share Kit with Catering Team" button (opens Contact Form pre-filled with selected menu items).

### 7. Online Table Reservation Form
*   **Fields**: Name, Phone, Email, Date, Time, Number of Guests, Seating preference (Indoor, Patio, Window, Banquet Hall).
*   **Interactive Logic**: Real-time validation, automatic date limiters (cannot book past dates), successful submission modal with confirmation ID.

### 8. Interactive Gallery
*   **Layout**: Categorized grid filter (Atmosphere, Dishes, Banquet Hall). Uses a lightbox modal for full-screen viewing.

### 9. Visiting Hours & Footer
*   **Visiting Hours Layout**: Elegant grid item or side section showing Mon-Fri (11:00 AM - 10:00 PM) and Sat-Sun (10:00 AM - 11:00 PM).
*   **Hosting Price Section**: Discretely placed, professional note on web hosting packages if they deploy it (e.g. in the footer/FAQ: *"Hosting & Maintenance packages from $15/month"*).
