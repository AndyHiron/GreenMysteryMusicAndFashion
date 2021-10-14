import ApiHelper from './api';
import { errorMessages, getErrorMessage } from './errorMessages';
import * as middlewares from './middleware';

const apiHelper = new ApiHelper();
apiHelper.applyMiddleware(middlewares);

const api = apiHelper.api;

export { api, errorMessages, getErrorMessage };
