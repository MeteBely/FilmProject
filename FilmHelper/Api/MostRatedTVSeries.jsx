import axios from 'axios'

const MostRatedTVSeriesData = async () => {
  const response = await axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200', {
    method: 'GET',
    headers:{
      accept: 'application/json',
      Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDhiOGJjN2IxMWFhMjE4ZTc4MWIxYjg0MTk3M2U5YyIsInN1YiI6IjY1MmQ1NGI1ZWE4NGM3MDEwYzFjZjVmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3sva1b2fGlFXV0ewgaf0cbVAsWfV0s-5R0-HIwFaEoA'
    },
    params:{
        language:'en-US',
        page: 1
      }
  })
  return response.data.results;
}

export default MostRatedTVSeriesData