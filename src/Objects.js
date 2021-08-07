import React, { Component,useEffect,useState } from 'react'

import {Link, useParams} from "react-router-dom";
import './css/objects.css'




const Objects = () => {

  let { value } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
   
    useEffect(() => {
      console.log(value);
      fetch("https://genius.p.rapidapi.com/search?q="+value, {
      method:'GET',
      
      headers: {
        'x-rapidapi-key': '5eb20c04bcmshd6c76d266ea95c6p16bd9bjsn9d6669e4bf0a',
        'x-rapidapi-host': 'genius.p.rapidapi.com'
      }})
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.response.hits);
          setIsLoaded(true);
          
          setItems(result.response.hits);

         
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
    } else {
      return (
        <div className='obj'>
         
        <ul className='oul'>
        <h2>Results for '<i>{value}</i>'*</h2>
        
        {items.map(item => (
          <li key={item.result.id} className='lis'>
            <Link to={'/songs/' + item.result.id} className='olink' key={item.result.id}>
            {item.result.full_title}
          </Link>
          </li>
        ))}
        <p>*Note: the api only provides 10 results</p>
      </ul></div>
        );
      }
    }

export default Objects

