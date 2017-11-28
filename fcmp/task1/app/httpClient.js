import { newsPagination, appendNews } from '../index';

export default class HttpClient {
  constructor(apiUrl, apiKey) {
    this.apiUrl = apiUrl;
    this.apiKey = `apiKey=${apiKey}`;
  }

  get(params) {
    return fetch(`${this.apiUrl}${this.apiKey}${params}`);
  }
}
