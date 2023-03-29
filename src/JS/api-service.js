export default class NewsApiService {
    constructor() {
        this.query = '';
        this.page = 1;
        this.api = '20083016-0123a23ef68f74321fe951c35';
    }

    
    fetchArticles() {
        console.log('ДО', this);

        const BASE_URL = "https://pixabay.com/api/"
        // const KEY_API = "20083016-0123a23ef68f74321fe951c35"
        const url = `${BASE_URL}?key=${this.api}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=8`;

        fetch(url)
            .then(r => r.json())
            .then(data => {
                this.page += 1;
                console.log('ПОСЛЕ', this);
            });
    }



    get searchQuery() {
        return this.query;
}

    set searchQuery(newQuery) {
        this.query = newQuery;
    }
    
}