// async function trending() {
//   const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key="+ API_KEY);
//   const data = await res.json();

//   const movies = data.results;
//   console.log(movies);
// }

const api=axios.create({
  baseURL:'https://api.themoviedb.org/3',
  headers:{
    'Content-Type':'application/json;charset=utf-8'
  },
  params:{
    'api_key':API_KEY,
  },
});

// Utils
function generatorListMovie(movies,container) {
  container.innerText=''
  movies.forEach(movie => {
    const movieContainer=document.createElement('figure')
    movieContainer.classList.add('movie__container')
    if(movie.poster_path){
      const movieImage=document.createElement('img')
      movieImage.classList.add('movie__image')
      movieImage.setAttribute('alt',movie.title)
      movieImage.setAttribute('src', 'https://image.tmdb.org/t/p/w300/'+movie.poster_path)
      movieImage.addEventListener('click',()=>{
        location.hash=`movie=${movie.id}-${movie.title}`
      })
      movieContainer.appendChild(movieImage)
      container.appendChild(movieContainer)
    }
  });
}
function generatorCategoryList(categories,container){
  container.innerHTML=''
  categories.forEach(genres => {
    const categoryListItem=document.createElement('li')
    categoryListItem.classList.add('category-list__item')
    categoryListItem.setAttribute('alt',genres.name)
    categoryListItem.setAttribute('id',genres.id)
    categoryListItem.innerText=genres.name
    categoryListItem.addEventListener('click',()=>{
      location.hash=`category=${genres.id}-${genres.name}`
    })
    container.appendChild(categoryListItem)
  });
}
// Llamados a la API
async function getTrendingMovies() {
  const{data}=await api('/trending/movie/day');
  const movies=data.results;
  trendingListContainer.classList.remove('movie-list__container--vertical')
  generatorListMovie(movies,trendingListContainer) 

}
async function getCategoryAleatory() {
  const{data}=await api('/genre/movie/list');
  const categories=data.genres;
  const totalId=categories.length
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const id= getRandomInt(totalId);
  movieListTitle.innerText=categories[id].name
  getMoviesByCategory(categories[id].id)
}
async function getCategoryList() {
  const{data}=await api('/genre/movie/list');
  const categories=data.genres;
  generatorCategoryList(categories,categoryListContainer,'category-list__item')
}
async function getMovieSearch(query) {
  const{data}=await api(`/search/movie`,{
    params:{
      query:query,
    }
  });
  const movies=data.results;
  generatorListMovie(movies,movieListContainer,'vertical')
}
async function getMoviesByCategory(id) {
  const{data}=await api(`/discover/movie`,{
    params:{
      with_genres:id,
    }
  });
  const movies=data.results;
  generatorListMovie(movies,movieListContainer)
}
async function getMovieDetails(id) {
  const{data}=await api(`/movie/${id}`);
  const movie=data;

  movieDetailsContainerImage.innerHTML=''
  const movieDetailsImage = document.createElement('img')
  movieDetailsImage.classList.add('movie-details__image')
  movieDetailsImage.setAttribute('alt',movie.title)
  movieDetailsImage.setAttribute('src','https://image.tmdb.org/t/p/w300/'+movie.poster_path)

  movieDetailsContainerImage.appendChild(movieDetailsImage)
  movieDetailsTitle.textContent=movie.title
  movieDetailsScore.textContent=movie.vote_average
  //release_date:"2022-05-04"
  const [age,month,day_] = movie.release_date.split('-')
  movieDetailsAge.textContent=age
  movieDetailsDescription.innerText=movie.overview
  generatorCategoryList(movie.genres,movieDetailsCategoryList)
  getSimilarMovies(id) 
}
async function getSimilarMovies(id) {
  const {data}=await api(`/movie/${id}/recommendations`);
  const movies=data.results;
  generatorListMovie(movies,movieListContainer)
}
// linea 183 antes de reducir código // linea 125 después de reducir código