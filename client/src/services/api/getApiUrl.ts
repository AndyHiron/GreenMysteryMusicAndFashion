export const getApiUrl = () => {
  switch (process.env.APP_ENV) {
    case 'production':
      return 'https://example.net/api';
    case 'acceptation':
      return 'https://example.net/api';
    case 'test':
      return 'https://example.net/api';
    default:
      return 'https://example.net/api';
  }
};