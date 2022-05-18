import * as chargebee from 'chargebee';

import { API_KEY, SITE } from '../constants';

chargebee.configure({ site: `${SITE}`, api_key: `${API_KEY}` });

export default chargebee;
