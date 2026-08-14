export async function safeFetchJson<T = any>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  const text = await res.text();

  let data: any = {};
  if (text.trim()) {
    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error(
        `Invalid JSON response from ${url} (${res.status}): ${text.slice(0, 150)}`
      );
    }
  } else {
    if (!res.ok) {
      // Server returned a non-2xx status with an EMPTY body. This typically
      // means the request never reached an Express route at all — for example
      // when Vercel serves a static file and the HTTP method is not GET, Vercel
      // returns 405 Method Not Allowed with no body. Including the URL and
      // method here makes the root cause obvious in the browser console.
      const method = (options?.method || 'GET').toUpperCase();
      throw new Error(
        `Server returned status ${res.status} with empty response for ${method} ${url}. ` +
        `The API endpoint likely did not receive the request.`
      );
    }
  }

  if (!res.ok) {
    throw new Error(
      data.error || data.message || `Request to ${url} failed with status ${res.status}`
    );
  }

  return data as T;
}
