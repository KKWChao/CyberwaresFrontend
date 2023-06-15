const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  // checking if client side vs server side, server side doesn't have local storage
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  const [cartProducts, setCartProducts] = useState([]);

  // need to add useEffect to save keep the state of the cart
  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  function addProduct(productId) {
    setCartProducts((previous) => [...previous, productId]);
  }

  function removeProduct(productId) {
    setCartProducts((previous) => {
      const position = previous.indexOf(productId);
      if (position !== -1) {
        return previous.filter((value, index) => index !== position);
      }
      return previous;
    });
  }

  function clearCart() {
    window.localStorage.clear();
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
