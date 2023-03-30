export { images };

import axios from 'axios'; 

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '20083016-0123a23ef68f74321fe951c35';

async function images(query, page, perPage) {
    const response = await axios.get(`?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safeSearch=true&page=${page}&per_page=${perPage}`);
    return response
};