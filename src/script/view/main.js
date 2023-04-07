import '../compenent/movie-list.js';
import '../compenent/search-bar.js';
import DataSource from "../data/data-source";
const baseURL = 'https://api.themoviedb.org/3/movie/popular?api_key=f58fe53ddf02e276ef89053d48153a69&language=en-US&page=1';
const API_KEY = 'f58fe53ddf02e276ef89053d48153a69';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const movieListElement = document.querySelector('movie-list');

    const onButtonSearchClicked = async () => {
        try {
            const results = await DataSource.searchMovie(searchElement.value);
            renderResult(results);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
       movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;