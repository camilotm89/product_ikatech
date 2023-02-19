import React, { Fragment } from "react";
import ProductCard from "./ProductCard";
import data from './data/zapato.json';
import '../styles/slider.css';
import '../styles/recomendedProducts.css';

const RecomendedProducts = () =>{
    return(
        <Fragment>
            <div className="section-title">PROPDUCTOS RECOMENDADOS</div>
            <div className="row">

                    <ProductCard key={data[4].nombre} title={data[4].nombre} price={data[4].precio} pictureName={data[4].foto} button={false}/>
                    <ProductCard key={data[5].nombre} title={data[5].nombre} price={data[5].precio} pictureName={data[5].foto} button={false}/>
                    <ProductCard key={data[6].nombre} title={data[6].nombre} price={data[6].precio} pictureName={data[6].foto} button={false}/>
                    <ProductCard key={data[7].nombre} title={data[7].nombre} price={data[7].precio} pictureName={data[7].foto} button={false}/>

            </div>
        </Fragment>
    )
}

export default RecomendedProducts