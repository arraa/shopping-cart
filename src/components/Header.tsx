import useCart from "../hooks/useCart";
import Nav from "./Nav";

interface PropsType {
    viewCart: boolean;
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
    const {totalItems, totalPrice} = useCart();

    return (
        <header className="header">
            <div className="header__title-bar">
                <h1>Acme Co.</h1>
                <div className="header__price-box">
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: {totalPrice}</p>
                    <Nav viewCart={viewCart} setViewCart={setViewCart}/>
                </div>
            </div>
        </header>
    );
};

export default Header;
