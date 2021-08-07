
import React, { Component } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '../node_modules/@fortawesome/react-fontawesome'
import { faPlayCircle } from '../node_modules/@fortawesome/free-solid-svg-icons'






class About extends Component {
  

  render(){
   

     
         
     
    return (


     

    

<div classname='intro'>
<main>


  <div class="px-4 py-5 my-5 text-center">
  <FontAwesomeIcon icon={faPlayCircle}  className='f'/>
    <h1 class="display-5 fw-bold">About us</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">This is a project made for b2match job interview selection. It 
      was made using the GeniusAPI (via rapidApi due to genius requiering a log in). 
      The api only returns 10 objects per search.</p>
    </div>
  </div>
</main>
</div>






 






        


    );
  }
}




export default About;