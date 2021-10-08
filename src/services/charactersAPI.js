import axios from 'axios';

const DEFAULT_TIMEOUT = 30000;
class CharactersService {
  constructor({ url, timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
    this.url = url;
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get(this.url, { params });
  }
}

export default CharactersService;
