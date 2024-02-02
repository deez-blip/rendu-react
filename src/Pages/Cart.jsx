import React from 'react'
import { useCartContext } from '../Context/CarContext'
import { Link } from 'react-router-dom';

const CartItems = () => {
    const { state, dispatch } = useCartContext(); // Récupérez l'état du panier
    const { items } = state; // Récupérez les éléments du panier à partir de l'état
    //console.log(items)
    const removeItemFromCart = (id) => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: { id: id }
        });
    };

    return (
        <div>
            <Link to='/products'> Retour aux produits </Link>
            {items.length > 0 ? (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.title} - Quantité: {item.quantity} - Prix: {item.price}
                            <button onClick={() => removeItemFromCart(item.id)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Votre panier est vide.</p>
            )}
        </div>
    );
};

export default CartItems;
