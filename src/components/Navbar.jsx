import { useState } from 'react'
import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'



const Container = styled.div`
    height: 60px;

  @media only screen and (max-width:480px) {
      ${mobile({
        height:"50px",

      })}
    }
`

const Wrapper = styled.div`
    padding: 10px 20px;    
    display:flex;
    justify-content:space-between;
    align-items:center;

    ${mobile({
      padding:"10px 0",

    })}
`
// Left section
const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center
`

const Language = styled.span`
  font-size:14px;
  cursor:pointer;  
  ${mobile({
    display:"none",
  })}
`
const SearchContainer = styled.div`
  border:1px solid grey;
  display:flex;
  align-items:center;
  margin-left:25px;
  padding:5px;
  ${mobile({
    marginLeft:"10px",
    marginRight:"10px"

  })}
`
const Input = styled.input`
  border:none;
  ${mobile({
    width:"50px",
  })}
`

// Center Section
const Center = styled.div`
  flex:1;
  text-align:center;
`

const Logo = styled.h1`
  font-weight:bold;  
  ${mobile({
    fontSize:"24px",
    // marginLeft:"5px"

  })}
`

//Right section
const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  ${mobile({
    justifyContent:"center",
    flex:"2",

  })}
`
const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px;
  ${mobile({
    fontSize:"12px",
    marginLeft:"10px",

  })}
  
` 
// navBar -- Main -- function 
function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const hoveredStyle = { color: 'black', fontSize: '18px', cursor: 'pointer' };
  const defaultStyle = { color: 'gray', fontSize: '16px', cursor: 'pointer' };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input placeholder='search'/>
                  <Search style={isHovered ? hoveredStyle : defaultStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}/>
              </SearchContainer>
            </Left>
            <Center>
              <Logo>DO.GET</Logo>
            </Center>
            <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined/>
                  
                </Badge>

              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar