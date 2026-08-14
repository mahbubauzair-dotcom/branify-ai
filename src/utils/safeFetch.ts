export async function safeFetchJson<T = any>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  const text = await res.text();

  let data: any = {};
  if (text.trim()) {
    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error(`Invalid JSON response from server (${res.status}): ${text.slice(0, 150)}`);
    }
  } else {
    if (!res.ok) {
      throw new Error(`Server returned status ${res.status} with empty response.`);
    }
  }

  if (!res.ok) {
    throw new Error(data.error || data.message || `Request failed with status ${res.status}`);
  }

  return data as T;
}
