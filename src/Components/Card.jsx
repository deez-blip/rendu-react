import React from 'react';
import styled from 'styled-components';
import MyLinkButton from "../Components/MyLinkButton";
import MyButton from './MyButton';
import { useCartContext } from '../Context/CarContext';
import { v4 as uuidv4 } from 'uuid';

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

const Title = styled.h3`
  margin: 0;
  color: #ffff;
  font-size: 1.2em;
`;

const Price = styled.div`
  color: #ffff;
  font-size: 1em;
  margin-top: 8px;
`;

const Amount = styled.div`
  color: #ffff;
  font-size: 1em;
  margin-top: 8px;
`;

function Card({ id, title, price, amount }) {
  const { dispatch } = useCartContext();

  const addItemToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: uuidv4(),
        title,
        price
      }
    });
  };

  return (
    <StyledCard>
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Amount>{amount}</Amount>
      <MyLinkButton id={id} text="see comment" />
      <MyButton text="add to cart" onClick={addItemToCart} />
    </StyledCard>
  );
}


export default Card;
