import cardImgTMPL from '../templates/cardImg.hbs';
import apiService from './service';
import loadMoreBtn from './load-more-btn';
import createModal from './modal';

const imgCardRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('#search-form');
const headerFormRef = document.querySelector('.search-form__header');
const loadMoreBtnRef = document.querySelector('[data-action="load-more"]');


searchFormRef.addEventListener('submit', hendlerInput);
loadMoreBtnRef.addEventListener('click', getFetchData);
imgCardRef.addEventListener('click', handleOpenModal);


function hendlerInput(e){    
        e.preventDefault();                
        apiService.resetPage();
        apiService.query = e.currentTarget.query.value.trim();  
        apiService.selectValueData = e.currentTarget.select.value;
        clearInput();  
        apiService.inputValueData ? getFetchData() : error404();
}

function getFetchData(){ 
    loadMoreBtn.disable();
    apiService.fetchContent().then(img => {
        renderingImgCard(img); 
    })
    .catch(error404)    
}

function renderingImgCard(hits){ 
    if(hits.length !== 0) {
        imgCardRef.insertAdjacentHTML('beforeend', cardImgTMPL(hits));
        loadMoreBtn.show();                
        loadMoreBtn.enable();

        if(hits.length < 12) {
            headerFormRef.innerHTML = 'There are no more images in this category. Choose another search term';
            loadMoreBtn.hide(); 
        }

        if(apiService.page > 2) {
            window.scrollTo({
                top: document.documentElement.offsetHeight - 100,
            });
        }                 
    } else{               
        error404()
    }
}

function error404(){ 
    clearInput();     
    loadMoreBtn.hide();  
    headerFormRef.innerHTML = 'Specify the request more correctly';
    headerFormRef.classList.add('red');
}

function clearInput() {  
    searchFormRef.query.value = '';   
    headerFormRef.innerHTML = ''; 
    imgCardRef.innerHTML = '';     
}

function handleOpenModal(event) {
    if (event.target.nodeName !== 'IMG') {
      return;
    }    
    const largeImageURL = event.target.dataset.source;  
    createModal(largeImageURL);
  }