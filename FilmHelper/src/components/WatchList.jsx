import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/WatchList.css'
//hasOwnProperty
const WatchList = () => {

    const [watchList, setWatchList] = useState([])
    const [flag,setFlag] = useState(true)
    const pullWatchList =async () =>{
        const response = await axios.get('http://localhost:3000/watchList')
        setWatchList(response.data)
      }
      useEffect(() => {
        pullWatchList()
      },[flag])

      const handleRemoveClick = (id) => {
        setFlag(!flag)
        axios
        .delete(`http://localhost:3000/watchList/${id}`)
        // .then(res => {
        //   setWatchList(res.data)
        // }
        // )

        }
      

  return (
    <div className='mainContainer'>
      <h2 className='watchListTitle'>Watch List</h2>
        <div className='container'>{watchList.map((item, index) => {
            if(item.hasOwnProperty('movieTitle')){
            return(<div key={index} className='box'>
                <img src={item.movieImage}></img>
                <h2 className='titleTxt'>{item.movieTitle}</h2>
                <p className='voteTxt'>Vote Average: <span className={item.voteAverage > 8 ? 'highRate' : (item.voteAverage > 6 ? 'middleRate' : 'lowRate')}>{item.voteAverage}</span></p>
                <button className='removeWatchListBtn' onClick={ () => handleRemoveClick(item.id)}>Remove</button>
           </div>)}else{
            return (
             <div key={index} className='box'>
                 <img src={item.serieImage}></img>
                 <h2 className='titleTxt'>{item.serieTitle}</h2>
                 <p className='voteTxt'>Vote Average: <span className={item.voteAverage > 8 ? 'highRate' : (item.voteAverage > 6 ? 'middleRate' : 'lowRate')}>{item.voteAverage}</span></p>
                 <button className='removeWatchListBtn' onClick={ () => handleRemoveClick(item.id)}>Remove</button>
            </div>
           )
           }
        }
        )}
        </div>
        </div>
  )
}

export default WatchList
