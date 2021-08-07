
import React, { Component } from 'react'
import { Route,Switch,NavLink,Link,BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Songs from './Songs.js'
import Search from './Search.js'
import Objects from './Objects.js'
import About from './About.js'
import Home from './Home.js'
import {FontAwesomeIcon} from '../node_modules/@fortawesome/react-fontawesome'
import { faBars, faMusic,faSearch } from '../node_modules/@fortawesome/free-solid-svg-icons'



class App extends Component {
    

      constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(){
        this.setState({ menu: !this.state.menu })
    }

  render(){
    const show = (this.state.menu) ? "show" : "" ;

     
         
     
    return (


        <Router>

<nav className="navbar navbar-expand-md " id={'na'}>
                <a id="logo" className="navbar-brand" href="/">Music</a>
                <button className="colbut" type="button" onClick={this.toggleMenu}>
                    <FontAwesomeIcon className='ba' icon={faBars}  color={'white'}/>
                </button>
                <div className={"collapse navbar-collapse "+show}>
                    <ul className="navbar-nav">
                        <li>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                       
                    </ul>

                    <ul className="nav navbar-nav ml-auto">

        

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search">Search</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about">About us</NavLink></li>
                        
                        
                    </ul>
                </div>
            </nav>








            <Route exact path={"/"} component={Home}></Route>
          <Route path='/songs/:id' component={Songs} />
          <Route path='/search' component={Search} />
          <Route path='/objects/:value' component={Objects} />
          <Route exact path={"/about"} component={About}></Route>
        </Router>


    );
  }
}




export default App;
