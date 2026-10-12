import { applyTranslations, getCurrentLang, setLanguage } from './i18n.js';

export const API_BASE_URL = window.MEDFUSION_API_URL || '/api';

export function getToken() { return localStorage.getItem('medfusion_token'); }
export function requireAuth() { if (!getToken()) window.location.replace('login.html'); }
export function logout() {
  localStorage.removeItem('medfusion_token');
  localStorage.removeItem('medfusion_user');
  window.location.replace('login.html');
}

export async function apiRequest(endpoint, options = {}) {
  const token = getToken();
  const headers = new Headers(options.headers || {});
  if (token) headers.set('Authorization', `Bearer ${token}`);
  if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  let response;
  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers });
  } catch {
    throw new Error('Unable to reach the MedFusion API. Please try again.');
  }
  const type = response.headers.get('content-type') || '';
  const data = type.includes('application/json') ? await response.json().catch(() => ({})) : await response.text();
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('medfusion_token');
      if (!location.pathname.endsWith('login.html') && !location.pathname.endsWith('index.html')) {
        location.replace('login.html');
      }
    }
    throw new Error(data?.detail || data?.message || `Request failed (${response.status})`);
  }
  return data;
}

export async function loadNavigation() {
  const host = document.querySelector('[data-navbar]');
  if (!host) return;
  try {
    const res = await fetch('navbar.html');
    if (!res.ok) throw new Error();
    host.innerHTML = await res.text();
  } catch {
    return;
  }

  const current = location.pathname.split('/').pop() || 'dashboard.html';
  const activeLink = host.querySelector(`[data-nav="${current}"]`);
  if (activeLink) {
    activeLink.classList.remove('text-slate-400');
    activeLink.classList.add('bg-teal-500/10', 'text-teal-400', 'font-semibold', 'border', 'border-teal-500/20');
  }

  // Populate user meta in sidebar
  try {
    const userStr = localStorage.getItem('medfusion_user');
    if (userStr) {
      const user = JSON.parse(userStr);
      const nameEl = host.querySelector('#nav-user-name');
      const emailEl = host.querySelector('#nav-user-email');
      const avatarEl = host.querySelector('#nav-avatar');
      const displayName = user.name || (user.email ? user.email.split('@')[0] : 'Patient');
      if (nameEl) nameEl.textContent = displayName;
      if (emailEl) emailEl.textContent = user.email || 'patient@example.com';
      if (avatarEl) avatarEl.textContent = displayName.charAt(0).toUpperCase();
    }
  } catch (e) {}

  // Wire language switcher in sidebar
  const langSel = host.querySelector('[data-lang-selector]');
  if (langSel) {
    langSel.value = getCurrentLang();
    langSel.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }

  // Apply translations to the loaded navbar
  applyTranslations(host);

  // Wire signout button
  const signout = host.querySelector('[data-logout]');
  signout?.addEventListener('click', logout);

  // Wire mobile menu toggle if present
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const sidebar = host.querySelector('#sidebar');
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }

  // Listen for language changes to keep navbar localized
  window.addEventListener('medfusion_lang_changed', () => {
    if (host) applyTranslations(host);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
  loadNavigation();
}

