export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    
    fetchArticles() {
        console.log(this);
        const BASE_URL = "https://pixabay.com/api/"
        const KEY_API = "20083016-0123a23ef68f74321fe951c35"
        const url = `${BASE_URL}?key=${KEY_API}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=4`;

        fetch(url,)
            .then(r => r.json())
            // .then(console.log)
            .then(data => {
                  this.page += 1;
            });
    }



    get query() {
        return this.searchQuery;
}

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    
}