import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Créez le contexte du panier
const CartContext = createContext();

// Créez un custom hook pour utiliser le contexte du panier
export const useCartContext = () => useContext(CartContext);

// Définir une fonction reducer pour gérer les actions sur l'état du panier
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // Logique pour ajouter un article au panier
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      // Logique pour retirer un article du panier
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    case 'CLEAR':
      // Logique pour vider le panier
      return { ...state, items: [] };
    // ... autres actions
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Créez un provider pour encapsuler la logique d'état du panier
export const CartProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('cart')) || { items: [] };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

