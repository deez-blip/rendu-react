import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGetProductCommentsQuery, useCreateProductCommentMutation } from '../Services/API'
import CommentCard from '../Components/CommentCard'
import styled from 'styled-components';

// Styled component pour la grille de commentaires
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Crée une grille avec 4 colonnes
  gap: 16px; // Espace entre les cartes
  margin: 16px; // Marge autour de la grille
`;

export default function ProductScreen() {
    const { productID } = useParams()
    //console.log(productID)
    let { data, isLoading } = useGetProductCommentsQuery(productID);
    let [createProductComment] = useCreateProductCommentMutation()
    return (
        <div>
            ProductScreen
            <Link to='/products'>Back to products</Link>
            {!isLoading ? (
                <GridContainer>
                    {data.map((comment) => {
                        console.log(comment)
                        return (
                            <CommentCard username={comment.username} comment={comment.comment} />
                        )
                    })}
                </GridContainer>
            ) : (
                <span>Loading</span>
            )}

            <button onClick={() => {
                createProductComment({
                    id: productID,
                    username: "User123",
                    comment: "test123"
                })
            }}>
                click me
            </button>
        </div>
    )
}
