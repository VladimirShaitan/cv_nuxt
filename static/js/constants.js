// const protocol = 'http:/';
// const domain = 'cv-api';
const d = 'http://localhost:8888/cv-api';
const apiPath = 'wp-json/cv';
const apiVersion = 'v1';

const apiBaseUrl = [d, apiPath, apiVersion].join('/');
export default apiBaseUrl;
