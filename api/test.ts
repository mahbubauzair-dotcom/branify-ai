// Minimal diagnostic function — tests whether Vercel detects any function
// in the api/ directory at all. If this returns JSON at /api/test, detection
// works and the issue is specific to api/index.cjs. If this returns the SPA
// index.html, Vercel is not scanning the api/ directory at all.
export default function handler(req: any, res: any) {
  res.status(200).json({
    message: 'hello from api/test.ts',
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  });
}
