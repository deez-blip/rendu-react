import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CarContext'

export default function Header() {
    const { state, dispatch } = useCartContext(); // Récupérez l'état du panier
    const { items } = state; // Récupérez les éléments du panier à partir de l'état

    return (
        <div>
            Nombre item dans le panier : {items.length}
        </div>
    )
}
