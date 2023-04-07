class DataSource {
    static searchMovie (keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=f58fe53ddf02e276ef89053d48153a69&query=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
}

export default DataSource;