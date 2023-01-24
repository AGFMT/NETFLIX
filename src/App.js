import React,{useState, useRef} from 'react'
import NavBar from './Components/NavBar/NavBar'
import {action,originals} from './urls'
import Banner from './Components/Banner/Banner';
import './App.css'
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';

function App() {
 
  const [input, setInput] = useState('');

  const inputRef = useRef('');
  const handleInputChange = (newValue) => {
    inputRef.current=newValue;
    setInput(inputRef.current);

  }
 
  return (
    <div className='App'>
      <NavBar handleInputChange={handleInputChange}/>
      <Banner/>
      <RowPost  inputData={input}  urls={originals} title='Netflix Orginal'/>
      <RowPost  inputData={input}  urls={action} title='Action' isSmall />
      <Footer />
    </div>
  )
  
}

export default App
