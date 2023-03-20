import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'


const Container = styled.div``
const Wrapper = styled.div`
    padding:50px;
    display:flex;

`
const ImgContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width:90%;
    height:90vh;
    object-fit:contain;
    
`

const InfoContainer = styled.div`
    flex:1;
    padding: 0 50px; 
`

const Title = styled.h1`
    font-weight:200;

`

const Desc = styled.p`
     margin:20px 0;

`

const Price = styled.span`
    font-weight:100;
    font-size:40px
`

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:50%;
    margin:30px 0;
`

const Filter = styled.div`
    display:flex;
    align-items:center;
`

const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor:pointer;
`

const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;

`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight:700;

`


const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display: flex;
    justify-content:center;
    align-items:center;
    margin:0 5px;
`

const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        transition:all 0.3s ease;
        background-color:wheatts;
        color:black;
        font-weight:bold;
        border-radius:30px;
        border:2px solid black;
    }
`

function Product() {
  return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1893076/2017/5/11/11494482714512-StyleStone-Women-Jumpsuit-8711494482714354-1.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim JumpSuit</Title>

                    <Desc>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto magni, at consectetur doloribus dignissimos quas neque sed quaerat minus dolorem alias repudiandae possimus quisquam. Architecto aperiam culpa ipsa illo incidunt ex delectus?
                    </Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="grey"/>
                    </Filter>

                    <Filter>
                        <FilterTitle>Size:</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                    
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{cursor:"pointer"}}/>
                            <Amount>1</Amount>
                            <Add style={{cursor:"pointer"}}/>
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                    

                </InfoContainer>
            </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
  )
}

export default Product