import React, {useState} from 'react';
import data from './components/data/zapato.json'
import './App.css';

import PromoHeader from './components/commons/PromoHeader';
import Header from './components/commons/Header';
import MainProduct from './components/MainProduct';
import Slider from './components/Slider';
import RecomendedProducts from './components/RecomendedProducts';
import SocialBanner from './components/SocialBanner';

function App() {
  return (
    <div className="App">
      <div>
        <PromoHeader/>
        <Header/>
        <MainProduct product={data[1]}/>
        
      </div>
      <Slider/>
      <RecomendedProducts/>
      <SocialBanner/>

    </div>
  );
}

export default App;
