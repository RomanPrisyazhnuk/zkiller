import apiFactory from './';
import config from './urls/url-config.json';

const env = 'production';

export default apiFactory({
  apiPrefix: config[env].apiPrefix,
});
