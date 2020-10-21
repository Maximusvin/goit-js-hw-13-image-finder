import cardImgTMPL from '../templates/cardImg.hbs';
const imgCardRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('#search-form');
import api from './apiService';


searchFormRef.addEventListener('submit', getInputValue)

function getInputValue(e){    
        e.preventDefault();  
        const inputValue = e.currentTarget.query.value;  
        getFetchData(inputValue)        
}


function getFetchData(value){
    api.fetchContent(value).then(data => {       
        imgCardRef.innerHTML = cardImgTMPL(data.hits);
    })
}


