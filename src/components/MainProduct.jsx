import React, { Fragment, useContext } from "react";
import imageArray from "../exports/images";
import "../styles/mainProduct.css"

const MainProduct = (props) =>{
    const productPictureIndex=(parseInt(props.product.foto.substring(0,props.product.foto.length-4))-1)
    return(
    <div className="main-product">
        <div className="navigation-route">HUSHPUPPIESCO / CALZADO / ZAPATILLA HOMBRE PELIKAN</div>
        <div className="main-info">
            <div className="image-product-container">
                <img src={imageArray[productPictureIndex]} alt="img"></img>
            </div>
            <div className="productDetails">
                <div className="productName">{props.product.nombre}</div>
                <div className="productPrice">${props.product.precio}</div>
                <div className="navigation-route">COLOR</div>
                <div className="mini-img"><img src={imageArray[productPictureIndex]} alt="img"></img></div>
                <div className="navigation-route">TALLA</div>
                <div className="tallas-container">
                    <div className="talla">5</div>
                    <div className="talla">5.5</div>
                    <div className="talla">6</div>
                    <div className="talla">6.5</div>
                    <div className="talla">7</div>
                    <div className="talla">7.5</div>
                    <div className="talla">8</div>
                    <div className="talla">8.5</div>
                    <div className="talla">9</div>
                    <div className="talla">9.5</div>
                </div>
                <div className="guia-tallas" >GUÍA DE TALLAS</div>
                <div className="button-container"><a href="#" className="btn-custom primary-btn">AGREGAR AL CARRITO</a></div>
            </div>
        </div>
        <div className="information">
        <h5>Detalles del producto</h5>
          <p className='generalText'>Lorem ipsum dolor sit amet. Ut voluptatum assumenda sit molestias molestiae eum facilis consequatur qui laborum odit et tempore necessitatibus et maxime repudiandae a soluta velit. Aut cupiditate saepe sit saepe nulla sed aliquid molestiae est dignissimos beatae a reprehenderit quod. Sit quae dolores est quos blanditiis a culpa corporis qui quaerat minus aut laborum sint quo minus eveniet!</p>        
        <h5>Tecnologías</h5>
          <p className='generalText'>Lorem ipsum dolor sit amet. Ut voluptatum assumenda sit molestias molestiae eum facilis consequatur qui laborum odit et tempore necessitatibus et maxime repudiandae a soluta velit. Aut cupiditate saepe sit saepe nulla sed aliquid molestiae est dignissimos beatae a reprehenderit quod. Sit quae dolores est quos blanditiis a culpa corporis qui quaerat minus aut laborum sint quo minus eveniet!</p>
        </div>

    </div>
    )
}

export default MainProduct