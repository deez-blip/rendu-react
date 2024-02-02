import React from "react";
import Card from '../Components/Card';
import styled from "styled-components"
import MyButton from "../Components/MyButton";

export default function HomeScreen() {
    return (
        <Container>
            HomeScreen
            <Card id="1" title="Product Title" price="19.99" />
            <MyButton text="styled button" />
        </Container>
    )
}

const Container = styled.div`
    background-color: antiquewhite;
    height: 100vh
`