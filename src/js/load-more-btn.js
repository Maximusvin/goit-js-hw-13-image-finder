const loadMoreBtnRef = document.querySelector('[data-action="load-more"]');
const loadMoreBtnLabelRef = document.querySelector('[data-action="load-more"] > .label');
const spinerRef = document.querySelector('.spiner');

const loadMoreBtn = {
    enable(){
        loadMoreBtnRef.disabled = false;
        loadMoreBtnLabelRef.textContent = 'Load More';
        spinerRef.classList.add('is-hidden');
    },

    disable(){
        loadMoreBtnRef.disabled = true;
        loadMoreBtnLabelRef.textContent = 'Load...';
        spinerRef.classList.remove('is-hidden');
    },

    show() {
        loadMoreBtnRef.classList.remove('is-hidden');
    },

    hide(){
        loadMoreBtnRef.classList.add('is-hidden');
    }
};

export default loadMoreBtn;