import cardImgTMPL from '../templates/cardImg.hbs';

const imgCardRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('#search-form');
const headerFormRef = document.querySelector('.search-form__header')
const loadMoreBtnRef = document.querySelector('[data-action="load-more"]')


searchFormRef.addEventListener('submit', hendlerInput);
loadMoreBtnRef.addEventListener('click', getFetchData)

function hendlerInput(e){    
        e.preventDefault();                
        apiService.resetPage();
        apiService.query = e.currentTarget.query.value.trim();  
        apiService.selectValueData = e.currentTarget.select.value;
        clearInput();  
        apiService.inputValueData ? getFetchData() : error404();
}

function renderingImgCard(hits){      
    hits[0] ? imgCardRef.insertAdjacentHTML('beforeend', cardImgTMPL(hits)) : error404();
}

function clearInput() {  
    searchFormRef.query.value = '';   
    headerFormRef.innerHTML = ''; 
    imgCardRef.innerHTML = ''; 
}

function getFetchData(){
    apiService.fetchContent().then(renderingImgCard)
    .catch(error404)
}

function error404(){ 
    clearInput();
    headerFormRef.innerHTML = 'specify the request more correctly';
    headerFormRef.classList.add('red');      
}