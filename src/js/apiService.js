const fetchContent = function(query, type = 'all', page = 1) {
    const apiKey = '4721358-13c427133c953f3e48d1d506d';    
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&image_type=${type}&page=${page}&per_page=12&key=${apiKey}`
    
    return fetch(url).then(res => res.json());
}

export default {fetchContent};






