// Centralized API client for the frontend
// Uses Vite env variable VITE_API_BASE. Fallback to window origin for same-origin deploys.

const BASE_URL = import.meta.env.VITE_API_BASE?.replace(/\/$/, '') || window.location.origin;

async function apiFetch(path, { method = 'GET', headers = {}, body } = {}) {
  const url = `${BASE_URL}${path.startsWith('/') ? path : '/' + path}`;
  const finalHeaders = { 'Accept': 'application/json', ...headers };
  if (body && !(body instanceof FormData)) {
    finalHeaders['Content-Type'] = 'application/json';
    body = JSON.stringify(body);
  }
  const res = await fetch(url, { method, headers: finalHeaders, body });
  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!res.ok) {
    const message = (data && data.message) || `Request failed: ${res.status}`;
    const error = new Error(message);
    error.status = res.status;
    error.data = data;
    throw error;
  }
  return data;
}

// Specific endpoints
export const BlogAPI = {
  list: () => apiFetch('/api/blogs/allblogs'),
  get: (id) => apiFetch(`/api/blogs/blogdetails/${id}`)
};

export const AppointmentAPI = {
  create: (payload) => apiFetch('/api/appointments/createAppointment', { method: 'POST', body: payload })
};

export const ContactAPI = {
  create: (payload) => apiFetch('/api/contactus/createContact', { method: 'POST', body: payload })
};

export const ProductAPI = {
  list: () => apiFetch('/api/products/allproducts'),
  get: (id) => apiFetch(`/api/products/productdetails/${id}`)
};

export const CommentAPI = {
  listForBlog: (blogId) => apiFetch(`/api/comments/${blogId}`),
  create: (payload) => apiFetch('/api/comments', { method: 'POST', body: payload })
};

export { apiFetch, BASE_URL };
