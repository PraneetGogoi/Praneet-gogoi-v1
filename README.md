# 💥 Praneet Gogoi — AI/ML Engineer & Manga Portfolio

Welcome to the source code of my interactive, manga-themed personal portfolio. This project blends my passion for cutting-edge Artificial Intelligence with a high-impact, comic-book aesthetic to create an unforgettable web experience.

**[🌐 View Live Portfolio](https://praneet-gogoi-v1.vercel.app/)**

---

## ⚡ Features

*   **Manga Panel Architecture:** Unique comic-book styling featuring halftone overlays, dynamic action panels, and stylized typography.
*   **Live Data Integrations:** 
    *   Dynamic GitHub repository statistics fetched in real-time.
    *   Live model inference counters for my flagship AI projects (like IndicSignAI).
*   **Interactive Terminal:** A simulated developer console displaying AI/ML training logs, deployment statuses, and CRT screen effects.
*   **Command Palette (`⌘K`):** A sleek search overlay for rapid navigation across the portfolio.
*   **Serverless Contact Form:** Built-in email dispatching powered by Resend API and Vercel Serverless Functions.
*   **Fully Responsive:** Fluid scaling and touch optimizations ensuring flawless performance on mobile devices.

---

## 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3 (Vanilla, Custom Variables), JavaScript (ES6+)
*   **Backend / API:** Node.js, Vercel Serverless Functions (`/api/*`)
*   **Services:** Resend API (Email Delivery), GitHub REST API

---

## 🚀 Local Development

To run this project locally, you will need the [Vercel CLI](https://vercel.com/docs/cli) installed to simulate the serverless backend.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PraneetGogoi/Praneet-gogoi-v1.git
   cd Praneet-gogoi-v1
   ```

2. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your Resend API key for the contact form to work:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

3. **Start the local development server:**
   ```bash
   npx vercel dev
   ```
   *(Or alternatively, if you don't need the backend features, you can boot the frontend using the included `server.mjs`: `node server.mjs`)*

4. **View in browser:**
   Open `http://localhost:3000` to interact with the portfolio.

---

## 📂 Project Structure

*   `index.html` - The main entry point featuring the flagship Manga layout.
*   `api/` - Contains the Vercel Serverless Functions.
    *   `send_message.js` - Handles contact form submissions via Resend.
    *   `github_stats.js` - Fetches live repository stars and deployment status.
    *   `indicsign_stats.js` - Simulates/fetches inference counts for IndicSignAI.
*   `projects/` - Contains deep-dive case study pages.
    *   `indicsignai.html` - Dedicated breakdown of the IndicSignAI architecture.
*   `assets/` - Images, CV PDFs, and structural styling assets.

---

## 💡 About Me

I am a recent B.Tech CSE grad from Guwahati, India, specializing in Computer Vision, NLP, and productionizing AI models. I build things that ship to the real world—from transforming healthcare data pipelines to deploying real-time translation models.

*Let's build something extraordinary.*
