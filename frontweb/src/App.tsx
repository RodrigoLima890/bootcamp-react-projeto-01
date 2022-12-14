import {BrowserRouter, Route, Routes} from'react-router-dom';
import "./assets/style/custom.scss";
import "./App.css";

import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/catalogo' element = {<Catalog/>}/>
          <Route path='/admin' element = {<Admin/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
