
import React, { Component } from 'react'
import { Route,Switch,NavLink,Link,BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import {FontAwesomeIcon} from '../node_modules/@fortawesome/react-fontawesome'
import { faPlayCircle } from '../node_modules/@fortawesome/free-solid-svg-icons'





class Home extends Component {
  

  render(){
   

     
         
     
    return (


     

    

<div classname='intro'>
<main>


  <div class="px-4 py-5 my-5 text-center">
  <FontAwesomeIcon icon={faPlayCircle}  className='f'/>
    <h1 class="display-5 fw-bold">Welcome</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Discover your favorite artists and songs!</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button id='btn1' type="button" class="btn btn-primary btn-lg px-4 gap-3"><Link className='l1' to='/search'>Search Now</Link></button>
        <button id='btn2' type="button" class="btn btn-outline-secondary btn-lg px-4"><Link className='l2' to='/about'>More about us</Link></button>
      </div>
    </div>
  </div>



<div class="container px-4 py-5" id="featured-3">
  <h2 class="pb-2 border-bottom">Developer's Favs</h2>
  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
       
      </div>
      <img className='im' src='https://www.cheatsheet.com/wp-content/uploads/2021/05/BTS-Butter-1012x1024.jpg' width='300px'></img>
      <h2 className='h'>BTS</h2>
      <p>BTS, also known as the Bangtan Boys, is a seven-member South Korean boy band that began forming in 2010 and debuted in 2013 under Big Hit Entertainment. The septet—composed of Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook—co-writes and co-produces much of their own output.  <a className='hlink' href="https://en.wikipedia.org/wiki/BTS">Wikipedia</a></p>
      
    </div>
    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
       
      </div>
      <img className='im' src='https://64.media.tumblr.com/c3f3c9d2eec0f88a8e64fdafb50290d9/74ca803c3c3cd9ff-69/s400x600/0c034fb3cd7cbd31d923eb536f076ae88bd76f25.png' width='300px'></img>
      <h2 className='h'>Doja Cat</h2>
      <p>Amala Ratna Zandile Dlamini, known professionally as Doja Cat, is an American rapper, singer, songwriter, and record producer. Born and raised in Los Angeles, she began making and releasing music on SoundCloud as a teenager.  <a href='https://en.wikipedia.org/wiki/Doja_Cat' className='hlink'>Wikipedia</a></p>
      
    </div>
    <div class="feature col">
      <div class="feature-icon bg-primary bg-gradient">
       
      </div>
      <img className='im' src='https://pbs.twimg.com/profile_images/1395389007060688903/NUnOnDtE_400x400.jpg' width='300px'></img>
      <h2 className='h'>Sunmi</h2>
      <p>Lee Sun-mi, known mononymously as Sunmi, is a South Korean singer and songwriter. She debuted in 2007 as a member of South Korean girl group Wonder Girls and left the group in 2010 to pursue an academic career.  <a href='https://en.wikipedia.org/wiki/Sunmi' className='hlink'>Wikipedia</a></p>
    
    </div>
  </div>
</div>



 

</main>
</div>





        


    );
  }
}




export default Home;