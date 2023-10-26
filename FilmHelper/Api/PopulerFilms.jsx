import axios from 'axios'

const PopulerFilmsData = async () => {
  const response = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
    method: 'GET',
    headers:{//https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
      accept: 'application/json',
      Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDhiOGJjN2IxMWFhMjE4ZTc4MWIxYjg0MTk3M2U5YyIsInN1YiI6IjY1MmQ1NGI1ZWE4NGM3MDEwYzFjZjVmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3sva1b2fGlFXV0ewgaf0cbVAsWfV0s-5R0-HIwFaEoA'
    },
    params:{
        language:'en-US',
        page: 1
      }
  })//https://api.themoviedb.org/3/movie/76341?api_key=9d8b8bc7b11aa218e781b1b841973e9c
  return response.data.results;
}

export default PopulerFilmsData