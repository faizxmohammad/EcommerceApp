import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;



`;

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    ${mobile({
        height:"38vh",
      })}
`;

const Info = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    


`;

const Title = styled.h1`
    color:white;
    margin:20px;
    // opacity:0.8
`;

const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:grey;
    cursor:pointer;
    font-weight:600;



`;

function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem