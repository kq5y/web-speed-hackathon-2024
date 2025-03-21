import { createMiddleware } from 'hono/factory';

export const cacheControlMiddleware = createMiddleware(async (c, next) => {
  await next();

  const path = c.req.path;

  // Enable caching for JavaScript chunks
  if (path.endsWith('.js')) {
    c.res.headers.append('Cache-Control', 'public, max-age=31536000, immutable');
  } else {
    c.res.headers.append('Cache-Control', 'private, no-store');
  }
});
