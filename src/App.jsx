import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {
  

  return (
    <>
      
      <Routes>
        <Route element={<Contact/>} path='/Contact'/>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/About' />
      </Routes>
      
    </>
  )
}

export default App
