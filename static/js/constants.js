const protocol = 'http:/';
const domain = 'cv-api';
const apiPath = 'wp-json/cv';
const apiVersion = 'v1';

const apiBaseUrl = [protocol, domain, apiPath, apiVersion].join('/');
export default apiBaseUrl;
