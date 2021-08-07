
import { useParams,Link} from "react-router-dom";
import React, { useEffect,useState } from 'react'






const Songs = () => {
    let { id } = useParams(); //fetching id from url 
    let id1=parseInt(id);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [song,setSong]=useState({title:'',thumb_url:'',artist:'',link:'',rel_date:'',artistid:'',ablum:''});

    useEffect(() => {
        fetch("https://genius.p.rapidapi.com/songs/"+id1, {  //fetching song info
        method:'GET',
        headers: {
          'x-rapidapi-key': '5eb20c04bcmshd6c76d266ea95c6p16bd9bjsn9d6669e4bf0a',
          'x-rapidapi-host': 'genius.p.rapidapi.com'
        }})
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result.response.song);
            setIsLoaded(true);
            
            setSong({
                ...song,
                title: result.response.song.title,
                thumb_url:result.response.song.song_art_image_thumbnail_url,
                artist: result.response.song.primary_artist.name,
                link:result.response.song.media[0].url,
                rel_date: result.response.song.release_date_for_display,
                artistid:result.response.song.primary_artist.id,
  

            })
           
  
           
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    if (error) {
      return <div className='obj'>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className='obj'>Loading...</div>;
    }
    else if(typeof(song.link)!=='undefined'){ //checking if youtube link exists
        return(
            <div className='obj'>
                <h1>{song.title}</h1>
              
            
          <h3>{song.artist}</h3>
       
                <img src={song.thumb_url}></img>
                <p>Release date: {song.rel_date}</p>
                <a href={song.link} className='olink'>Youtube</a>
            </div>
        )
    }
    else{
    return(
        <div>
            <h1>{song.title}</h1>
            <h2>{song.artist}</h2>
           
            <img src={song.thumb_url}></img>
            <p>Release date: {song.rel_date}</p>
        </div>
    )}
    }

    export default Songs