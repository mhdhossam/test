import axios from "axios";

const API_BASE_URL = "https://daleel-back.zeeploy.xyz/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // To include cookies with requests
});

// Automatically attach `Authorization` header with the access token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token refresh automatically
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        // Attempt to refresh the token
        const refreshResponse = await axios.post(`${API_BASE_URL}/auth/token/refresh/`, {
          refresh: localStorage.getItem("refreshToken"),
        });

        const { access } = refreshResponse.data;

        // Update the access token
        localStorage.setItem("accessToken", access);
        error.config.headers.Authorization = `Bearer ${access}`;

        // Retry the original request
        return api.request(error.config);
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login"; // Redirect to login
      }
    }
    return Promise.reject(error);
  }
);

// **API Functions**
// Login API call
export const login = async (username: string, password: string) => {
  const response = await api.post(`/auth/login/`, { username, password });
  return response.data;
};

// Logout API call
export const logout = async () => {
  const response = await api.post(`/auth/logout/`);
  return response.data;
};

// Token refresh API call
export const refreshToken = async () => {
  const response = await api.post(`/auth/token/refresh/`, {
    refresh: localStorage.getItem("refreshToken"),
  });
  return response.data;
};

// Register Vendor
export const registerVendor = async (data: Record<string, any>) => {
  const response = await api.post(`/auth/register/vendor/`, data);
  return response.data;
};

// Register Customer
export const registerCustomer = async (data: Record<string, any>) => {
  const response = await api.post(`/auth/register/customer/`, data);
  return response.data;
};

export default api;
