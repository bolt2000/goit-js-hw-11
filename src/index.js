import Notiflix from 'notiflix';

// import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"
import "simplelightbox/dist/simple-lightbox.min.css";



// import axios from 'axios';

import NewsApiService from "./js/api-service";
import hitsTpl from "./templates/hits.hbs";
// import NewApiService from "./js/load-more";

const refs = {
searchForm: document.querySelector(".search-form"),
gallery: document.querySelector(".gallery"),
loadBtn: document.querySelector(".load-more"),
};

const newsApiService = new NewsApiService();


refs.searchForm.addEventListener('submit', onSearch);
refs.loadBtn.addEventListener('click', onLoadMore);


function onSearch(e) {
  e.preventDefault();

   newsApiService.query = e.currentTarget.elements.searchQuery.value;
   newsApiService.resetPage();
   newsApiService.fetchArticles().then(creatImageCards);
 }

function onLoadMore() {
   // newsApiService.fetchArticles().then(hits => console.log(hits));
   newsApiService.fetchArticles().then(creatImageCards);
}


function creatImageCards(hits) {
    refs.gallery.insertAdjacentHTML('beforeend', hitsTpl(hits));
    gallerySlider();
}


function gallerySlider() {
  var lightbox = new SimpleLightbox('.photo-card a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}