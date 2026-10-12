export const formatDate = value => value ? new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value)) : 'Not available';
export const getQueryParam = name => new URLSearchParams(location.search).get(name);
export const validEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validPassword = password => typeof password === 'string' && password.length >= 8 && /\d/.test(password);
export function saveState(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
export function loadState(key) { try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; } }
export function showToast(message, type = 'error') {
  const node = document.createElement('div');
  node.className = `toast rounded-xl px-4 py-3 text-sm font-medium shadow-lg ${type === 'error' ? 'bg-rose-600 text-white' : 'bg-teal-700 text-white'}`;
  node.textContent = message;
  document.body.append(node);
  setTimeout(() => node.remove(), 4500);
}
export function formatFileSize(bytes) {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  let index = 0;
  let value = bytes;
  while (value >= 1024 && index < units.length - 1) { value /= 1024; index += 1; }
  return `${value.toFixed(1)} ${units[index]}`;
}
export function getUser() {
  try { return JSON.parse(localStorage.getItem('medfusion_user') || '{}'); } catch { return {}; }
}
export function getUserFromToken() {
  const token = localStorage.getItem('medfusion_token');
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  } catch { return null; }
}
