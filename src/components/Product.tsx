import { ReactElement } from "react";
import { ReducerAction, ReducerActionType } from "../context/CardProvider";
import { ProductType } from "../context/ProductsProvider";

interface PropsType {
    product: ProductType;
    dispatch: React.Dispatch<ReducerAction>;
    REDUCER_ACTION: ReducerActionType;
    inCart: boolean;
}

const Product = ({product, dispatch, REDUCER_ACTION, inCart}: PropsType): ReactElement => {
    
    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href

    const onAddToCart = () => dispatch({type: REDUCER_ACTION.ADD, payload: {...product, qty:1}})

    const itemInCart = inCart ? '→ Item in Cart: ✔️' : null

    return (
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className="product__img" />
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{itemInCart}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </article>
    )

};

export default Product;
