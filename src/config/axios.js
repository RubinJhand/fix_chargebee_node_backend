import axios from 'axios';

import { API_URL } from '../constants';

export const DEFAULT_API = axios.create({
	baseURL: API_URL,
});
