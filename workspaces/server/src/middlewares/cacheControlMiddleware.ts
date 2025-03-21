import { createMiddleware } from 'hono/factory';

export const cacheControlMiddleware = createMiddleware(async (c, next) => {
  await next();

  const path = c.req.path;

  // Enable caching for JavaScript chunks
  const cacheExts = ['.js', '.css', '.woff', '.webp', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico'];
  if (cacheExts.some(ext => path.endsWith(ext))) {
    c.res.headers.append('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (path.includes('/api/')) {
    c.res.headers.append('Cache-Control', 'private, no-store');
  } else {
    c.res.headers.append('Cache-Control', 'public, max-age=31536000, immutable');
  }
});
