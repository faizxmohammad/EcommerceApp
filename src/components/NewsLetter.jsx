
import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
    ${mobile({
        textAlign:"center",
        fontSize:"40px"
      })}
`

const Desc = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({
        textAlign:"center",
        fontSize:"20px"
      })}
`

const InputContainer = styled.div`
    width:50%;
    height:40px;
    background:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
    ${mobile({
        width:"80%",
      })}
`

const Input = styled.input`
    border:none;
    flex:8;
    padding-left:28px;

`
const Button = styled.button`
    flex:1;
    border:none;
    background:teal;
    color:white;
    ${mobile({
      })}
`


function NewsLetter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get Updates from your favourite products.</Desc>
        <InputContainer>
        <Input placeholder="Your Email"/>
        <Button>
            <Send/> 
        </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter;