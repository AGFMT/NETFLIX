import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./RowPost.css";
import { imageUrl, API_KEY } from "../../constants/constants";
import axios from "../../axios";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [UrlId, setUelId] = useState("");
  const [setmovie, setclickedMovie] = useState([0]);
  const [isOpen, setIsOpen] = useState();


 
 useEffect(() => {
  axios.get(props.urls).then(response => {
    if (props.inputData) {
      setMovies(response.data.results.filter(item => (item.title && item.title.toLowerCase().includes(props.inputData.toLowerCase())) || (item.name && item.name.toLowerCase().includes(props.inputData.toLowerCase()))));

    } else {
      setMovies(response.data.results); 
      console.log(movies) 
    }
  })
})




  const opts = {
    height: "250",
    width: "50%",
    playerVars: {
      autoplay: 0,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUelId(response.data.results[0]);
        } else {
          console.log('array empty');
        }
        
    axios.get(props.urls).then(response=>{
  
       let moviesId=id;
       setclickedMovie(response.data.results.find((m) => m.id === moviesId));
    
    })
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => {
              handleMovie(obj.id);
              if(setIsOpen==true){
                setIsOpen(false)
               }
               else{
                setIsOpen(true)
               }
            }}
            key={obj.id}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          ></img>
        ))}
      </div>
      {UrlId && isOpen &&  <Youtube className="youtube" opts={opts} videoId={UrlId.key} />}
      {UrlId && isOpen && <div className="onclick-Button">
          
   
    <h1>NAME:{setmovie.title? setmovie.title:setmovie.name}</h1>
    <h1>OVERVIEW:<br/>{setmovie.overview} </h1>
    <h1>RATING:{setmovie.vote_average} </h1>
    <button style={{ width:'100px',height:'50px'}} onClick={() => setIsOpen()}><p style={{ color: 'red',fontSize:'30px'}}>Close</p></button>

  </div>  
  
      }
    </div>
  );
}

export default RowPost;
