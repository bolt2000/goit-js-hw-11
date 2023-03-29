export default class NewsApiService {
    constructor() {}

    
    fetchArticles(search) {
    
    const BASE_URL = "https://pixabay.com/api/"
    const KEY_API = "20083016-0123a23ef68f74321fe951c35"

fetch(`${BASE_URL}?key=${KEY_API}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=4`)
  .then(r => r.json())
  .then(console.log);
}
}