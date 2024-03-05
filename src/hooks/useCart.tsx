import { useContext } from "react";
import CartContext, { UseCartContextType } from "../context/CardProvider";

const useCart = (): UseCartContextType => {
    return useContext(CartContext)
}

export default useCart