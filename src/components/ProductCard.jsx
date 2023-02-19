import React,{Fragment} from "react";
import '../styles/productCard.css'; 
import imageArray from "../exports/images";



const ProductCard = (props) => {
    const cardPicture = (parseInt(props.pictureName.substring(0,props.pictureName.length-4))-1)
    return(
        <Fragment>
            <section>
                <div className="product">
                    <div className="product-thumb">
                        <a href="#"><img src={imageArray[cardPicture]} alt="img"></img></a>
                    </div>
                    <div className="product-body">
                        <div className="title">
                            <h6> {props.title} </h6>
                        </div>
                        <div className="price">
                            <span> {props.price} </span>
                        </div>
                    </div>
                    <div className="footer">
                        {props.button ? <div className="btn">
                            <a href="#" className="btn-custom primary-btn">AGREGAR AL CARRITO</a>
                        </div> :<div></div>}
                        
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default ProductCard