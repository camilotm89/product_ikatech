import React, { Fragment } from "react";
import logo from '../../assets/img/dog.jpg'
import textLogo from '../../assets/img/textLogo.jpg'
import "../../styles/Header.css"


const Header = () => {
    return(
        <Fragment>
            <div className="header">
                <div className="top-navbar">
                    <span>
                        <p className="top-navbar-item">DIRECTORIO DE TIENDAS</p>
                        <p className="top-navbar-item">SERVICIO AL CLIENTE</p>
                        <p className="top-navbar-item">MI CUENTA</p>
                    </span>
                </div>
                <div className="row">
                    <div className="logo">
                        <a href="#">
                            <img className="logo-img" src={logo} alt="img"></img><img className="logo-text" src={textLogo} alt="img"></img>
                        </a>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="BUSCAR" />
                        <p> ENVIO GRATIS PARA PEDIDOS SUPERIORES A $300.000</p>
                    </div>
                </div>
                <div className="row">
                    <div className="menu">
                    <ul>
                        <li><a href="#">Hombre</a></li>
                        <li><a href="#">Mujer</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Historia</a></li>
                        <li><a href="#">Tiendas</a></li>
                    </ul>
                    </div>
                    <div className="carrito">
                        <p> Carrito</p>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;