import { apiRequest } from './api.js';
import { showToast, validEmail, getUserFromToken } from './utils.js';
function saveSession(data) {
  const token = data.access_token || data.token || data.jwt;
  if (!token) throw new Error('The server did not return an access token.');
  localStorage.setItem('medfusion_token', token);
  localStorage.setItem('medfusion_user', JSON.stringify(data.user || { email: data.email }));
}
export function redirectIfAuthenticated() {
  if (localStorage.getItem('medfusion_token')) window.location.replace('dashboard.html');
}
export async function loginUser(email, password) {
  if (!validEmail(email)) throw new Error('Please enter a valid email address.');
  const data = await apiRequest('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
  saveSession(data);
  return data;
}
export async function registerUser(name, email, password) {
  if (!validEmail(email)) throw new Error('Please enter a valid email address.');
  const data = await apiRequest('/auth/register', { method: 'POST', body: JSON.stringify({ name, email, password }) });
  saveSession(data);
  return data;
}
export function requireAuth() {
  if (!localStorage.getItem('medfusion_token')) window.location.replace('login.html');
}
export function logout() {
  localStorage.removeItem('medfusion_token');
  localStorage.removeItem('medfusion_user');
  window.location.replace('login.html');
}
