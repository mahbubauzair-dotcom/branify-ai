/**
 * Vercel Serverless Function — Catch-All API Entry
 *
 * Vercel's @vercel/node auto-detects .ts files in /api/ (verified: api/test.ts
 * returned JSON on production). This file is the canonical serverless entry.
 *
 * It dynamically imports the Express app from ../server. If the import fails
 * (e.g., due to a module resolution issue or a runtime error in server.ts),
 * it returns a diagnostic JSON response instead of crashing with
 * FUNCTION_INVOCATION_FAILED — so the root cause is visible in the browser
 * instead of being hidden behind a generic 500.
 *
 * Combined with vercel.json's rewrite /api/:path* -> /api?__p=:path*,
 * and server.ts's URL-restoration middleware, this handles every /api/* request.
 */
import express from 'express';

// Cache the loaded server app and any load error (cold-start optimization).
let serverApp: any = null;
let loadError: any = null;
let loadPromise: Promise<void> | null = null;

function loadServer(): Promise<void> {
  if (loadPromise) return loadPromise;
  loadPromise = import('../server')
    .then((mod) => {
      serverApp = mod.default || mod;
    })
    .catch((err) => {
      loadError = err;
      console.error('[api/index.ts] Failed to load ../server module:', err);
    });
  return loadPromise;
}

const app = express();
app.use(express.json());

// Restore the original URL from Vercel's rewrite (__p query param) BEFORE
// delegating to the server app, so Express route matching works.
app.use((req: any, _res: any, next: any) => {
  const qIndex = req.url.indexOf('?');
  if (qIndex !== -1) {
    const queryString = req.url.slice(qIndex + 1);
    const params = new URLSearchParams(queryString);
    const originalPath = params.get('__p');
    if (originalPath) {
      params.delete('__p');
      const remainingQuery = params.toString();
      const decodedPath = decodeURIComponent(originalPath);
      req.url = `/api/${decodedPath}${remainingQuery ? '?' + remainingQuery : ''}`;
    }
  }
  next();
});

// Delegate every request to the server app once it's loaded.
app.use(async (req: any, res: any, next: any) => {
  await loadServer();

  if (loadError) {
    return res.status(500).json({
      success: false,
      error: 'Server module failed to load',
      details: loadError?.message || String(loadError),
      stack: loadError?.stack ? String(loadError.stack).split('\n').slice(0, 10) : undefined
    });
  }

  if (serverApp) {
    return serverApp(req, res, next);
  }

  return res.status(500).json({
    success: false,
    error: 'Server module not loaded (unknown reason)'
  });
});

export default app;
