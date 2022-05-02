
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Homedecor from './components/Homedecor';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="products" element={<Products/>} />
      <Route path="products/men" element={<Men/>} />
      <Route path="products/women" element={<Women/>} />
      <Route path="products/kids" element={<Kids/>} />
      <Route path="products/homedecor" element={<Homedecor/>} />
    </Routes>
    </div>
  );
}

export default App;

