export default {
  TOKEN_STORAGE_KEY: 'auth_refresh_token',
  REFRESH_TOKEN_INTERVAL: 300, /* 5 minutes = 300 seconds */
  AUTH_URLS: {
    production: 'https://api.next.nl/auth',
    acceptation: 'https://api-acc.next.dev/auth',
    test: 'https://next-dashboard-test.label-a.nl/auth',
    development: 'https://next-dashboard-test.label-a.nl/auth',
  },
};
