import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import { imageUrl,API_KEY} from '../../Constants/Constants'
import axios from 'axios'
function RowPost(props) {
  const [movies,setMovies]= useState([])
  const [urlid,setUrlId]=useState('')
  useEffect (()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)

    })

  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const handleMovie= (id)=>{
      console.log(id)
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length !== 0){
          console.log(response.data);
          setUrlId(response.data.results[0])
        }else{
          console.log(alert ('Trailer not allowed'))
        }
      });
  }
  return (
    <div className='row poster_container'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>


          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster' : 'Poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
                
      </div>
   { urlid &&  <Youtube opts={opts} videoId={urlid.key}/> }
    </div>
  )
}

export default RowPost
