

loadMoreBtnRef.addEventListener('click', ()=> {   
    getLoadMore(inputValueData);
})

function getLoadMore(data) {
    api.fetchContent(data).then(img => {
        console.log(img);
        page += 1;
    })
}