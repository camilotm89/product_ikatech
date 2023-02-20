import React, {useState} from 'react';
import data from './components/data/zapato.json'
import './App.css';

import { ProductProvider } from './context/ProductContext';
import PromoHeader from './components/commons/PromoHeader';
import Header from './components/commons/Header';
import MainProduct from './components/MainProduct';
import Slider from './components/Slider';
import RecomendedProducts from './components/RecomendedProducts';
import SocialBanner from './components/SocialBanner';

function App() {
  const [stateProduct, setStateProduct] = useState(1)
  
  return (
    <ProductProvider>
      <div className="App">


        <PromoHeader/>
        <Header/>
        <MainProduct product={data[stateProduct]}/>
        <Slider />
        <RecomendedProducts/>
        <SocialBanner/>

      </div>
    </ProductProvider>
  );
}

export default App;
