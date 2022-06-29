// Aquí van todos los selectores, asi evitamos saturar el código y repetir el nombre de las constantes

// Header
// const mainHeader = document.querySelector('#mainHeader')
const menu = document.querySelector('#mainHeader .menu')
const arrowBack = document.querySelector('#mainHeader .arrow-back')
const logo = document.querySelector('#mainHeader .logo')
const mainHeaderTitle = document.querySelector('#mainHeader .main-header__title')

// Detalles de una película
const movieDetails = document.querySelector('#movieDetails')
const movieDetailsContainerImage=document.querySelector('#movieDetails .movie-details__container-image')
const movieDetailsTitle = document.querySelector('#movieDetails .movie-details__title')
const movieDetailsScore = document.querySelector('#movieDetails .movie-details__score')
const movieDetailsAge = document.querySelector('#movieDetails .movie-details__age')
const movieDetailsDescription = document.querySelector('#movieDetails .movie-details__description')
const movieDetailsCategoryList = document.querySelector('#movieDetails .movie-details__category-list')

// Formulario de búsqueda
const searchForm = document.querySelector('#searchForm')
const searchFormInput = document.querySelector('#searchForm .search-form__input')
const buttonCancel = document.querySelector('#buttonCancel')
const buttonSearch = document.querySelector('#buttonSearch')

// Lista de películas en tendencia
const trending=document.querySelector('#trending');
const trendingListContainer=document.querySelector('#trending .movie-list__container');

// Lista de películas general
const movieList=document.querySelector('#movieList');
const movieListTitle=document.querySelector('#movieList .movie-list__title')
const movieListContainer=document.querySelector('#movieList .movie-list__container');

// Lista de categorías
const categoryList=document.querySelector('#categoryList');
const categoryListContainer=document.querySelector('#categoryList .category-list__container');