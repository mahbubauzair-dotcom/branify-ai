/**
 * Vercel Serverless Function — Catch-All API Entry
 *
 * Vercel only auto-detects files in the `/api/` directory as serverless
 * functions. The previous `vercel.json` rewrite pointed `/api/*` at
 * `/dist/server.cjs`, which lives in the static output directory and is
 * therefore served as a STATIC FILE by Vercel's CDN.
 *
 * Static-file serving on Vercel returns:
 *   - GET  → the raw file bytes (causing JSON parse errors on the client)
 *   - POST / PUT / DELETE → HTTP 405 Method Not Allowed with an EMPTY body
 *
 * That empty 405 body is exactly what `src/utils/safeFetch.ts` converts into
 * "Server returned status 405 with empty response."
 *
 * This file is the canonical Vercel serverless entry: Vercel auto-routes every
 * `/api/*` request to it (because of the `[[...slug]]` catch-all name), and
 * the imported Express app then dispatches the request by its ORIGINAL URL
 * (e.g. `/api/auth/owner-login`, `/api/vectorengine/chat`).
 *
 * No rewrites are needed for `/api/*` once this file exists.
 */
import app from '../server';

export default app;
