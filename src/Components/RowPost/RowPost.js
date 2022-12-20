import React from 'react'
import Youtube from 'react-youtube'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import './RowPost.css'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,seturlId] =useState('')
  axios.get(`1/movie/${id}/videos?api_key=${API_KEY}&language=en-US1`).then(response=>
    {
      console.log(response.data)
    })
  useEffect(() => {
  
 axios.get(props.url).then(response=>
  {
    console.log(response.data)
    setMovies(response.data.results)
  }).catch(err=>
    {
      alert('Network Error')
    })
  }, [])

  const handleMovie = (id)=>
  {
    console.log(id)
  }
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
    {movies.map((obj)=>

      <img onClick={()=> handleMovie(obj.id)} className={`${props.isSmall ? 'smallPoster': 'poster'}`}src={`${imageUrl+obj.backdrop_path}`} alt="" />

    )}
    
    </div>

    <Youtube opts={opts} videoId="2g811Eo7K8U"/>

    </div>
  )
}

export default RowPost