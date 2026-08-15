# CMIT Internship — Assignment 3: Route Handlers + Forms

A Next.js (App Router) project demonstrating how to build API Route Handlers configured via environment variables and robust form handling using Server Actions and Zod schema validation.

---

##  Features

1. **API Route Handler (`/api/config`)**
   - Implements a `GET` endpoint at [`app/api/config/route.ts`](./app/api/config/route.ts).
   - Reads environment configuration dynamically via `process.env.APP_NAME`.
   - Returns a structured JSON response without hard-coded configuration.

2. **Server Actions with Zod Validation**
   - Implements server-side form submission in [`app/actions.ts`](./app/actions.ts).
   - Validates form inputs against a **Zod** schema (minimum 3 characters).
   - Returns explicit `{ success: boolean, error?: string, message?: string }` responses.

3. **Interactive Client Form**
   - Responsive form component located at [`components/form/Form.tsx`](./components/form/Form.tsx).
   - Provides clear visual feedback on submission:
     -  **Validation Error**: Displays error message in red text on invalid input.
     -  **Success Confirmation**: Displays greeting message in green text on valid input.

4. **Secure Environment Management**
   - Variables documented in [`.env.example`](./.env.example).
   - Secrets and local `.env` files are kept out of version control via [`.gitignore`](./.gitignore).

---

##  Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Validation**: [Zod](https://zod.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

## Project Structure

```text
assignment3/
├── app/
│   ├── api/
│   │   └── config/
│   │       └── route.ts       # Route handler reading environment variable
│   ├── actions.ts             # Server action with Zod validation
│   ├── globals.css            # Global CSS & Tailwind styling
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Home page rendering the form
├── components/
│   └── form/
│       └── Form.tsx           # Client form with success/error handling
├── .env.example               # Example environment variable template
├── .gitignore                 # Git ignore configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

---

##  Getting Started

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

##  Testing the Endpoints & Features

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
2. **Invalid Test**: Enter a name shorter than 3 characters (e.g., `Jo`) and click **Submit**.
   - Output: `Name must be at least 3 characters` displayed in red text.
3. **Valid Test**: Enter a valid name (e.g., `Alice`) and click **Submit**.
   - Output: `Hello Alice!` displayed in green text.

---

##  Build and Verification

To verify production readiness and TypeScript compliance:

```bash
npm run build
```
