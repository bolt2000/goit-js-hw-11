
import axios from 'axios';


export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.perPage = 40;
        this.api = '20083016-0123a23ef68f74321fe951c35';

    }

    
    async fetchArticles() {
        // console.log('ДО', this);
        const BASE_URL = "https://pixabay.com/api/"
        // const url = `${BASE_URL}?key=${this.api}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`;

        try {
    
            const response = await axios(`${BASE_URL}?key=${this.api}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`)

            const data = response.data;
        
this.incrementPage();
console.log(response.data);

            return data;
                // .then(response => response.json())
                // .then(({ hits }) => {
                //     (console.log);
                //     console.log(hits);
                //     this.incrementPage();
                //     return hits;
                // });
  } catch (error) {
      console.error(error);
    }
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

    catch (error) {
            console.error(error);
        }
    
    }
