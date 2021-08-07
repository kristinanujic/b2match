import React, { Component,useEffect,useState } from 'react'
import './css/search.css';
import {FontAwesomeIcon} from '../node_modules/@fortawesome/react-fontawesome'
import { faBars, faMusic,faSearch } from '../node_modules/@fortawesome/free-solid-svg-icons'


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
          let v=event.target.value;
          
        this.setState({value: v});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        let c=this.state.value;
        c=c.split(" ").join("%20");
        setTimeout(function() {
            window.location.href = "/objects/"+c;
        },1000);
      }

  
    render() {
        return (
          <div>
          <form onSubmit={this.handleSubmit} className='srch'>
            <label>
              <input className="searchbar" type="text" placeholder={"Artist Or Song title"} value={this.state.value} onChange={this.handleChange} />
            </label>
            <button type="submit" className='srchb'><FontAwesomeIcon icon={faSearch}  color={'lightgrey'}/></button>
          </form></div>
        );
      }
    }

export default Search