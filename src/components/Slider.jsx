import React, {Fragment} from "react";
import data from './data/zapato.json';
import images from "../exports/images";
import '../styles/slider.css';
import ProductCard from "./ProductCard";
import Carousel from "react-elastic-carousel"

const breakPoints = [
    {width: 1, itemsToShow:1},
    {width: 550, itemsToShow:2},
    {width: 768, itemsToShow:3},
    {width: 1200, itemsToShow:4},
]

const Slider = () => {
    return (
        <Fragment>
            <section>
                <div className="slider-title">COMPLETA TU LOOK</div>
                <div className="row">
                    <Carousel breakPoints={breakPoints}>
                        {data.map((data) => {
                            return (
                                <div className="product">
                                    <ProductCard  key={data.nombre} title={data.nombre} price={data.precio} pictureName={data.foto} button={true}/>
                                </div>
                            )
                        } )}
                    </Carousel>
                </div>
            </section>
        </Fragment>
    )
}
    


export default Slider