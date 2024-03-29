import { useState } from "react";
import useCart from "../hooks/useCart";
import CartLineItem from "./CartLineItem";

const Cart = () => {
    const [confirm, setConfirm] = useState<boolean>(false);
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } =
        useCart();

    const onSubmitOdrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT });
        setConfirm(true);
    };

    const pageContent = confirm ? (
        <h2>Thank you for your order.</h2>
    ) : (
        <>
            <h2 className="offscreen">Cart</h2>
            <ul className="cart">
                {cart.map((item) => {
                    return (
                        <CartLineItem
                            key={item.sku}
                            item={item}
                            dispatch={dispatch}
                            REDUCER_ACTION={REDUCER_ACTIONS}
                        />
                    );
                })}
            </ul>
            <div className="cart__totals">
                <p>Total Items : {totalItems}</p>
                <p>Total Price : {totalPrice}</p>
                <button
                    className="cart__submit"
                    disabled={!totalItems}
                    onClick={onSubmitOdrder}
                >
                    Place Order
                </button>
            </div>
        </>
    );

    return <main className="main main--cart">{pageContent}</main>;
};

export default Cart;
