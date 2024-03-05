import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
    const [ViewCart, setViewCart] = useState<boolean>(false);

    const pageContent = ViewCart ? <Cart /> : <ProductList />;

    return (
        <>
            <Header viewCart= {ViewCart} setViewCart={setViewCart}/>
            {pageContent}
            <Footer viewCart= {ViewCart} />
        </>
    );
}

export default App;
