import { Routes, Route } from 'react-router-dom';
import NavBar from './components/general/navbar/navbar';
import Home from './routes/Home';
import ApieMus from './routes/ApieMus';
import Paslaugos from "./routes/Paslaugos";
import Karjera from './routes/Karjera';
import ApskaitosImones from './routes/ApskaitosImones';
import Atstovai from './routes/Atstovai';
import Kontaktai from './routes/Kontaktai';
import IsbandykNemokamai from "./routes/IsbandykNemokamai";
import Footer from './components/general/footer/footer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apiemus' element={<ApieMus />} />
        <Route path='/paslaugos' element={<Paslaugos />} />
        <Route path='/karjera' element={<Karjera />} />
        <Route path='/apskaitosimones' element={<ApskaitosImones />} />
        <Route path='/atstovai' element={<Atstovai />} />
        <Route path='/kontaktai' element={<Kontaktai />} />
        <Route path='/isbandyknemokamai' element={<IsbandykNemokamai />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
