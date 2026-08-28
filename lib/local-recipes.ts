export function readLocalList<T>(key: string): T[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T[]) : [];
  } catch {
    return [];
  }
}

export function writeLocalList<T>(key: string, value: T[]) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
