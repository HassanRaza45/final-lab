//import logo from './logo.svg';
import './App.css';
//import Header from './Components/Header';
import {Routes,Route} from "react-router-dom";
import HeroSection from '../src/Components/HeroSection';
import Header from '../src/Components/Header';
export default function App() {
  return (
    <div>
      <Header/> 
      <Routes>
        <Route path={"/"} element={<HeroSection/>}></Route>
        
      </Routes>
      
       
    </div>
  );
}

 