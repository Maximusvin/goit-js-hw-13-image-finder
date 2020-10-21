import cardImgTMPL from '../templates/cardImg.hbs';
const imgCardRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('#search-form');
const headerFormRef = document.querySelector('.search-form__header')
import api from './apiService';


searchFormRef.addEventListener('submit', hendlerInput)

let message = null;

function hendlerInput(e){    
        e.preventDefault();  
        const inputValue = e.currentTarget.query.value.trim();  
        message = inputValue;

        if(!inputValue){
            error404();
            return;
        }

        getFetchData(inputValue);
}

function verification(data) {    
    if(data.hits[0]){
        renderingImgCard(data);
        headerFormRef.innerHTML = `You are viewing images in the category: <span>${message}</span>`;
        return
    }  
    clearInput();    
    headerFormRef.innerHTML = 'specify the request more correctly';
    headerFormRef.classList.add('red');
    imgCardRef.innerHTML = '';
}

function renderingImgCard(data){    
    clearInput();    
    imgCardRef.innerHTML = cardImgTMPL(data.hits);
}

function clearInput() {
    searchFormRef.query.value = '';
    searchFormRef.query.blur();
    headerFormRef.classList.remove('red');
}

function getFetchData(value){
    api.fetchContent(value).then(verification)
    .catch(error404)
}

function error404(err){
    clearInput();
    imgCardRef.innerHTML = '';  
    headerFormRef.innerHTML = 'specify the request more correctly';
    headerFormRef.classList.add('red');  
  }

