# CMIT Internship — Assignment 3: Route Handlers + Forms

A Next.js (App Router) project demonstrating API Route Handlers configured via environment variables and robust form handling using Server Actions and Zod schema validation.

---

## 🚀 Features

1. **API Route Handler (`/api/config`)**
   - Implements a `GET` endpoint at [`app/api/config/route.ts`](./app/api/config/route.ts).
   - Reads environment configuration dynamically via `process.env.APP_NAME`.
   - Returns a structured JSON response without hard-coded configuration.

2. **Server Actions with Zod Validation (Warm-Up P1 Schema)**
   - Single source of truth schema defined in [`practice_questions/p1/p1.ts`](./practice_questions/p1/p1.ts):
     - `name`: Non-empty string (`z.string().min(1)`)
     - `email`: Valid email format (`z.string().email()`)
     - `age`: Integer 18 or above (`z.number().int().min(18)`)
   - Implements server-side form submission in [`app/actions.ts`](./app/actions.ts).
   - Returns flattened field errors (`error.flatten().fieldErrors`) for granular per-field UI feedback.

3. **Interactive Client Form Component**
   - Clean, accessible form component at [`components/form/Form.tsx`](./components/form/Form.tsx).
   - Displays real-time per-field error messages in red under invalid inputs.
   - Displays a success confirmation banner upon valid submission.

4. **Secure Environment Management**
   - Variables documented in [`.env.example`](./.env.example).
   - Secrets and local `.env` files are kept out of version control via [`.gitignore`](./.gitignore).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Validation**: [Zod](https://zod.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

## 📁 Project Structure

```text
assignment3/
├── app/
│   ├── api/
│   │   └── config/
│   │       └── route.ts       # Route handler reading environment variable
│   ├── actions.ts             # Server action with Zod validation
│   ├── globals.css            # Global styling
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Home page rendering the form
├── components/
│   └── form/
│       └── Form.tsx           # Client form with per-field error & success handling
├── practice_questions/
│   └── p1/
│       └── p1.ts              # Zod validation schema & test cases (Warm-up P1)
├── .env.example               # Example environment variable template
├── .gitignore                 # Git ignore configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

---

## 🏁 Getting Started

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18.18+ or v20+ recommended).

### 2. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 3. Environment Variables

Create your local `.env` file from the provided example:

```bash
# Windows (cmd/PowerShell)
copy .env.example .env

# Mac / Linux
cp .env.example .env
```

Open `.env` and set your desired application name:

```env
APP_NAME=CMIT Assignment 3
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🧪 Testing the Endpoints & Features

### 1. Test the API Route Handler

Visit [http://localhost:3000/api/config](http://localhost:3000/api/config) or run:

```bash
curl http://localhost:3000/api/config
```

**Expected JSON Response:**
```json
{
  "appName": "CMIT Assignment 3",
  "message": "Environment variable loaded successfully"
}
```

### 2. Test the Form Validation

1. Navigate to [http://localhost:3000](http://localhost:3000).
2. **Invalid Test**:
   - Leave `Name` empty, enter `x` for `Email`, and `10` for `Age`.
   - Click **Submit**.
   - Output: Each field displays its specific validation error in red.
3. **Valid Test**:
   - Enter `Abu` for `Name`, `abu@gmail.com` for `Email`, and `21` for `Age`.
   - Click **Submit**.
   - Output: Success confirmation banner with greeting message.

---

## 📜 Build and Verification

To verify production readiness and TypeScript compliance:

```bash
npm run build
```
