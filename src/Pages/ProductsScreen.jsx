import React from "react";
import { Link } from "react-router-dom"
import { useGetProductsQuery, useGetProductCommentsQuery, useCreateProductCommentMutation } from '../Services/API';
import Card from '../Components/Card';
import styled from "styled-components"
import Header from "../Components/Header";

export default function ProductsScreen() {
    const products = [
        { id: 1, name: "Product 1", price: 200 },
        { id: 2, name: "Product 2", price: 200 },
        { id: 3, name: "Product 3", price: 200 }
    ]

    let { data, isLoading } = useGetProductsQuery();

    return (
        <Container>
            <Link to='/cart'>Voir panier</Link>
            ProductsScreen
            {!isLoading ? (
                data.map((article) => {
                    //console.log('aaaaa',data)
                    console.log('ocunt')
                    return (
                        <Card 
                        id={article.id} 
                        title={article.title} 
                        price={article.price} 
                        amount={article.quantity} 
                        ar={article}/>
                    );
                })
            ) : (
                <span>Loading</span>
            )}
        </Container>
    )
}

const Container = styled.div`
    background-color: antiquewhite;
    height: 100vh
`