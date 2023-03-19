import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from "../data"
const Container = styled.div`
    height:100vh;
    width :100%;
    display:flex;
    position:relative;
    overflow:hidden;

`
const Wrapper = styled.div`
    height:100%;
    display:flex;
    transition: all 1.5s ease;
    transform:translateX(${props => props.slideIndex * -100}vw);
`

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;    
    z-index:2;

`

const Slide = styled.div`
    display:flex;
    height:100vh;
    align-items:center;
    width:100vw;
    background-color: #${props=>props.bg}
`


const ImgContainer = styled.div`
    flex:1;
    height:100%;

`
const Image = styled.img`
    height:85%
`


const InfoContainer = styled.div`
    flex:1;
    padding:50px;
    


`

const Title = styled.h1`
    font-size:70px;

    
    
`
const Desc = styled.h1`
    margin: 50px 0;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;


`
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background:transparent;
    cursor:pointer;
    border-radius:30px;
`




function Slider() {
    const [slideIndex ,setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 );
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {
                sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                    <Image src = {item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                ))

                        }

            
        </Wrapper> 
        <Arrow direction = "right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider