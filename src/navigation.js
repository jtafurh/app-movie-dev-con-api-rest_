// addEventListener: registra un evento especifico a un objeto, le indica al objeto que este atento al evento, cuando el evento se manifieste se debe llamar a una función.

// DOMContentLoaded: es un evento que se activa cuando el HTML inicial esta cargado y analizado por completo, al cargar la pagina inicial.

// hash: fragmento identificador de la url que inicia con el símbolo #
// hashchange: evento que se ejecuta cuando el hash cambia

window.addEventListener('DOMContentLoaded',navigator,false)
window.addEventListener('hashchange',navigator,false)

menu.addEventListener('click',()=>{
  location.hash='#categories'
})
arrowBack.addEventListener('click',()=>{
  window.scrollTo(0,0);
  window.history.back()
})
// evitar que el button type submit actúe como un botón de envío de formulario
searchForm.addEventListener('submit', (event)=> {
  event.preventDefault();
});
buttonSearch.addEventListener('click', ()=>{
  location.hash=`#search=${searchFormInput.value}`
})
buttonCancel.addEventListener('click',()=>{
  searchFormInput.value=''
})

function navigator() {
  if (location.hash.startsWith('#home')) {
    homePage()
  } else if(location.hash.startsWith('#categories')){
    categoriesPage()
  } else if(location.hash.startsWith('#search=')){
    searchPage()
  } else if(location.hash.startsWith('#category=')){
    categoryPage()
  } else if(location.hash.startsWith('#movie=')){
    moviePage()
  } else { 
    homePage()
    // Aquí va el error 404
  }
  // Para que pagina siempre aparezca en la parte superior al cargar
  window.scroll(0,0); // For Safari
//document.documentElement.scrollTo = 0; // For Chrome, Firefox, IE and Opera

}

function homePage() {
  menu.classList.remove('inactive')
  arrowBack.classList.add('inactive')
  logo.classList.remove('inactive')
  mainHeaderTitle.classList.remove('inactive')
  mainHeaderTitle.innerText='MovieDev'
  movieDetails.classList.add('inactive')
  searchForm.classList.remove('inactive')
  trending.classList.remove('inactive')
  trendingListContainer.classList.remove('movie-list__container--vertical')
  trendingListContainer.classList.add('movie-list__container--horizontal')
  movieList.classList.remove('inactive')
  movieListContainer.classList.remove('movie-list__container--vertical')
  movieListContainer.classList.add('movie-list__container--horizontal')
  movieListTitle.classList.remove('inactive')
  categoryList.classList.add('inactive')
  getTrendingMovies()
  getCategoryAleatory()
}
function categoriesPage() {
  menu.classList.add('inactive')
  arrowBack.classList.remove('inactive')
  logo.classList.add('inactive')
  mainHeaderTitle.classList.remove('inactive')
  mainHeaderTitle.innerText='Categorías'
  movieDetails.classList.add('inactive')
  searchForm.classList.add('inactive')
  trending.classList.add('inactive')
  movieList.classList.add('inactive')
  movieListTitle.classList.add('inactive')
  categoryList.classList.remove('inactive')
  getCategoryList()
}
function searchPage() {
  menu.classList.add('inactive')
  arrowBack.classList.remove('inactive')
  logo.classList.remove('inactive')
  mainHeaderTitle.classList.remove('inactive')
  mainHeaderTitle.innerText='MovieDev'
  movieDetails.classList.add('inactive')
  searchForm.classList.remove('inactive')
  trending.classList.add('inactive')
  movieList.classList.remove('inactive')
  movieListTitle.classList.add('inactive')
  movieListContainer.classList.add('movie-list__container--vertical')
  movieListContainer.classList.remove('movie-list__container--horizontal')
  categoryList.classList.add('inactive')
  const[_,query]=location.hash.split('=')
  getMovieSearch(query)
}
function categoryPage() {
  menu.classList.add('inactive')
  arrowBack.classList.remove('inactive')
  logo.classList.add('inactive')
  mainHeaderTitle.classList.remove('inactive')
  movieDetails.classList.add('inactive')
  searchForm.classList.add('inactive')
  trending.classList.add('inactive')
  movieList.classList.remove('inactive')
  movieListTitle.classList.add('inactive')
  movieListContainer.classList.add('movie-list__container--vertical')
  movieListContainer.classList.remove('movie-list__container--horizontal')
  categoryList.classList.add('inactive')
  // [a,b] donde a = [0] es el elemento [0] del array y b=[1] es el elemento [1] del array
  // split devuelve un array con los elementos divididos por el string indicado
  const[_,categoryData]=location.hash.split('=')
  const[categoryId,categoryName]=categoryData.split('-')
  mainHeaderTitle.innerText=categoryName
  getMoviesByCategory(categoryId,'vertical')
}
function moviePage() {
  menu.classList.add('inactive')
  arrowBack.classList.remove('inactive')
  logo.classList.remove('inactive')
  mainHeaderTitle.classList.remove('inactive')
  mainHeaderTitle.innerText='MovieDev'
  movieDetails.classList.remove('inactive')
  searchForm.classList.add('inactive')
  trending.classList.add('inactive')
  movieList.classList.remove('inactive')
  movieListTitle.classList.add('inactive')
  movieListContainer.classList.add('movie-list__container--vertical')
  movieListContainer.classList.remove('movie-list__container--horizontal')
  categoryList.classList.add('inactive')
  const[_,categoryData]=location.hash.split('=')
  const[categoryId,categoryTitle]=categoryData.split('-')
  getMovieDetails(categoryId,categoryTitle)
}