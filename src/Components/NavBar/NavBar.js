import React,{useState,useRef} from 'react';
import "./NavBar.css";

function NavBar(props) {
  
  const inputRef = useRef();

  const handleButtonClick =(event) => {
    inputRef.current=event.target.value;
    const value=inputRef.current;
    props.handleInputChange(value);
  }
 
  return (
    <div className='navbar'>
             <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
             <input id='input-text' type='text' placeholder='search somethimg' onChange={handleButtonClick}></input>
             <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
    </div>
  )
}

export default NavBar