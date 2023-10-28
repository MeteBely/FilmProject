import './App.css'
import PopulerFilmsData from '../Api/PopulerFilms.jsx'
import PopulerTVSeriesData from '../Api/PopulerTVSeries.jsx'
import MostRatedFilmsData from '../Api/MostRatedFilms.jsx'
import MostRatedTVSeriesData from '../Api/MostRatedTVSeries.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Movies from './components/Movies.jsx'
import Series from './components/Series.jsx'
import { useState, useEffect } from 'react'

function App() {

  //? popüler filmlerin verilerini popularFilms adlı state'ye atıyoruz. Daha sonra bu state'yi(dizi'yi) Movies.jsx'e gönderiyoruz.
  const [popularFilms, setPopularFilms] = useState([])
  const getPopulerFilmsData = async() => {
    const data = await PopulerFilmsData()
    setPopularFilms(data)
  }
  useEffect(() => {
    getPopulerFilmsData()
  },[])

  //? rated filmlerin verilerini ratedFilms adlı state'ye atıyoruz. Daha sonra bu state'yi(dizi'yi) Movies.jsx'e gönderiyoruz.
  const [ratedFilms, setratedFilms] = useState([])
  const getMostRatedFilmsData = async() => {
    const data = await MostRatedFilmsData()
    setratedFilms(data)
  }
  useEffect(() => {
    getMostRatedFilmsData()
  },[])

  //? rated dizilerin verilerini ratedSeries adlı state'ye atıyoruz. Daha sonra bu state'yi(dizi'yi) Series.jsx'e gönderiyoruz.
  const [ratedSeries, setRatedSeries] = useState([])
  const getMostRatedTVSeriesData = async() => {
    const data = await MostRatedTVSeriesData()
    setRatedSeries(data)
  }
  useEffect(() => {
    getMostRatedTVSeriesData()
  },[])

  //? popüler dizilerin verilerini popularSeries adlı state'ye atıyoruz. Daha sonra bu state'yi(dizi'yi) Series.jsx'e gönderiyoruz.
  const [popularSeries, setPopularSeries] = useState([])
  const getPopulerTVSeriesData = async() => {
    const data = await PopulerTVSeriesData()
    setPopularSeries(data)
  }
  useEffect(() => {
    getPopulerTVSeriesData()
  },[])
  

  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies ratedFilms={ratedFilms} popularFilms={popularFilms}/>}/>
          <Route path='/series' element={<Series ratedSeries={ratedSeries} popularSeries={popularSeries}/>}/>
        </Routes>
    </>
  )
}

export default App

//film isimlerini backText içine ekle, bir filmin üzerine gelince ona focus olsun, basınca ise bilgilendirici bir popup çıksın.
//Hedefleliklerini yaptıktan sonra context kullanarak kodlarını olabildiğince sadeleştir. DOM yerine useRef falan daha faydalı olur mu düşün.
