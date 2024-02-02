import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetProductCommentsQuery, useCreateProductCommentMutation } from '../Services/API';
import CommentCard from '../Components/CommentCard';
import styled from 'styled-components';

// Styled component pour la grille de commentaires
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Crée une grille avec 4 colonnes
  gap: 16px; // Espace entre les cartes
  margin: 16px; // Marge autour de la grille
`;

export default function ProductScreen() {
    const { productID } = useParams();
    let { data, isLoading } = useGetProductCommentsQuery(productID);
    let [createProductComment, { isLoading: isCommentSubmitting }] = useCreateProductCommentMutation();

    // État local pour le formulaire
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assurez-vous que ni le username ni le commentaire ne sont vides
        if (username.trim() && comment.trim()) {
            createProductComment({
                id: productID,
                username,
                comment
            }).then(() => {
                // Réinitialiser le formulaire et peut-être actualiser les commentaires
                setUsername('');
                setComment('');
                // Vous pouvez également rafraîchir les commentaires ici si nécessaire
            });
        }
    };

    return (
        <div>
            <h1>ProductScreen</h1>
            <Link to='/products'>Back to products</Link>
            {!isLoading ? (
                <GridContainer>
                    {data?.map((comment, index) => (
                        <CommentCard key={index} username={comment.username} comment={comment.comment} />
                    ))}
                </GridContainer>
            ) : (
                <span>Loading</span>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..."
                    required
                />
                <button type="submit" disabled={isCommentSubmitting}>
                    Submit Comment
                </button>
            </form>
        </div>
    );
}
