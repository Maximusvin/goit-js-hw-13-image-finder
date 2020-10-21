const apiKey = '4721358-13c427133c953f3e48d1d506d';  

export default {
    inputValueData: '',
    selectValueData: 'all',
    page: 1,
    fetchContent() {          
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.inputValueData}&image_type=${this.selectValueData}&page=${this.page}&per_page=12&key=${apiKey}`
        return fetch(url).then(res => res.json()).then(({hits}) => {
            this.page += 1;            
            return hits;
        });
    },

    resetPage(){
        this.page = 1;
    },

    get query(){
        return this.inputValueData;
    },

    set query(value){
        this.inputValueData = value;
    }
};