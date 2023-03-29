// import Notiflix from 'notiflix';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// import axios from 'axios';

import NewsApiService from "./js/api-service";
import hitsTpl from "./templates/hits.hbs";
// import NewApiService from "./js/load-more";

// btnLoadMore.setAttribute("hidden", true)

const refs = {
searchForm: document.querySelector(".search-form"),
gallery: document.querySelector(".gallery"),
loadBtn: document.querySelector(".load-more"),
};

// let search = '';

const newsApiService = new NewsApiService();
// console.log(newsApiService);

refs.searchForm.addEventListener('submit', onSearch);
refs.loadBtn.addEventListener('click', creatImageCards);

// async function pixabayAPI(search, page) {
//     const response = await axios.get(`${BASE_URL}?key=${KEY_API}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
//     return response.data;
    
// }

function onSearch(e) {
  e.preventDefault();

   newsApiService.searchQuery = e.currentTarget.elements.searchQuery.value;
   newsApiService.resetPage();
   // newsApiService.fetchArticles().then(creatImageCards);
newsApiService.fetchArticles().then(creatImageCards);





 }

function onLoadMore() {
   // newsApiService.fetchArticles().then(hits => console.log(hits));
   newsApiService.fetchArticles().then(creatImageCards);
}





function creatImageCards(hits) {
   refs.gallery.insertAdjacentHTML('beforeend', hitsTpl(hits))
}

// function creatImageCards(data) {
//     const markup = data
//         .map(
//             ({
//                 webformatURL,
//                 largeImageURL,
//                 tags,
//                 likes,
//                 views,
//                 comments,
//                 downloads,
//             }) => {
//                 return `<div class="card">
//                 <a href="${largeImageURL}"> <img src="${webformatURL}" alt="${tags}" loading="lazy" title=""/></a>
//                 <div class="info">
//                 <p class="item-info">
//                 <b>Likes</b>${likes}</p>
//                 <p class="item-info">
//                 <b>Views</b>${views}</p>
//                 <p class="item-info">
//                 <b>Comments</b>${comments}</p>
//                 <p class="item-info">
//                 <b>Downloads</b>${downloads}</p>
//                 </div>
//                 </div>`
//             })
//         .join('');
    
//     gallery.insertAdjacentHTML('beforeend', markup);
// };
 