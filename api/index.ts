/**
 * Vercel Serverless Function — Catch-All API Entry (TypeScript source)
 *
 * Vercel's @vercel/node runtime auto-detects .ts files in /api/ and compiles
 * them. A .cjs bundle was previously committed, but Vercel's scanner does NOT
 * auto-detect .cjs files (verified: api/test.ts was detected and returned
 * JSON, while api/index.cjs was invisible and caused /api/* to fall through
 * to the SPA static fallback, returning 405 on POST).
 *
 * This file is the canonical Vercel serverless entry. Vercel auto-routes
 * every /api/* request to it (combined with vercel.json's rewrite
 * /api/:path* -> /api?__p=:path*), and the imported Express app dispatches
 * the request by the ORIGINAL URL (reconstructed from __p by the URL
 * restoration middleware in server.ts).
 */
import app from '../server';

export default app;
