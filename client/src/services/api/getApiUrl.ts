export const getApiUrl = () => {
  switch (process.env.APP_ENV) {
    case 'production':
      return 'https://timeseriesapi.azurewebsites.net/api';
    case 'acceptation':
      return 'https://timeseriesapi.azurewebsites.net/api';
    case 'test':
      return 'https://timeseriesapi.azurewebsites.net/api';
    default:
      return 'https://timeseriesapi.azurewebsites.net/api';
  }
};