export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.api = '20083016-0123a23ef68f74321fe951c35';
    }

    
    fetchArticles() {
        console.log('ДО', this);

        const BASE_URL = "https://pixabay.com/api/"
        const url = `${BASE_URL}?key=${this.api}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=8`;

        return fetch(url)
            .then(r => r.json())
            .then(data => {
                console.log(data);
                this.incrementPage();
                return data.hits;
                // console.log('ПОСЛЕ', this);
            });
    }



    incrementPage() {
        this.page += 1;
    }


    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
}

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    
}