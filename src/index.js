// import Notiflix from 'notiflix';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// import axios from 'axios';

import NewsApiService from "./js/api-service";
// import NewApiService from "./js/load-more";

// const inputEl = document.querySelector("input");
// let page = 1

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
refs.loadBtn.addEventListener('click', onLoadMore);

// async function pixabayAPI(search, page) {
//     const response = await axios.get(`${BASE_URL}?key=${KEY_API}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
//     return response.data;
    
// }

function onSearch(e) {
  e.preventDefault();

  newsApiService.searchQuery = e.currentTarget.elements.searchQuery.value;
  newsApiService.fetchArticles();

 }

function onLoadMore() {
   newsApiService.fetchArticles();
}







// function createMarkup(arr) {
//     return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
//        `<div class="photo-card">
//         <div class="wrap">
        
//        <a class="link" href="${largeImageURL}">
//   <img class="img-item" src="${webformatURL}" alt="${tags}" loading="lazy" />
//   </a>
//   </div>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>${likes}  
//     </p>
//     <p class="info-item">
//       <b>Views</b>${views}
    
//     </p>
//     <p class="info-item">
//       <b>Comments</b>${comments}
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>${downloads}  
//     </p>
//   </div>
// </div>`).join("")
        
// }

 