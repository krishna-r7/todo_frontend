const { VITE_APP_ENVIRONMENT, VITE_API_URL } = import.meta.env

// Constant Values

const Config = {
  API_URL: VITE_API_URL,
  // STORAGE_URL: REACT_APP_STORAGE_URL,
  UNAUTHORIZED_EXCEPTION: false,
  ENVIRONMENT: VITE_APP_ENVIRONMENT
};

export default Config;
