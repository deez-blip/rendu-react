import React from 'react';
import styled from 'styled-components';
import MyLinkButton from "../Components/MyLinkButton";

// Créez les styles de la carte en utilisant styled-components
const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin: 8px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: blue
`;

const Username = styled.h3`
  margin: 0;
  color: #ffff;
  font-size: 1.2em;
`;

const Comment = styled.div`
  color: #ffff;
  font-size: 1em;
  margin-top: 8px;
`;

// Composant Card qui accepte id, title et price en tant que props
function CommentCard({ id, username, comment }) {
  return (
    <StyledCard>
      <Username>{username}</Username>
      <Comment>{comment}</Comment>
      {/* Vous pouvez également afficher l'ID si nécessaire */}
      {/* <div>ID: {id}</div> */}
    </StyledCard>
  );
}

export default CommentCard;
