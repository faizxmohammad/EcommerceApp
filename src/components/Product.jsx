
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    margin:5px;
    min-width:280px;
    height : 350px;
    position:relative;
`;
const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`;
const Image = styled.img`
    height:75%;
    z-index:2;
`;
const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(192,192,192,0.3);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    
    &:hover{
        transition:all 0.5 ease;
        opacity:1;
    }
`;
const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;



    &:hover{
        background:#e9f5f5;
        transform:scale(1.1);
        transition:all 0.8s ease;
        cursor:pointer;
  

    }

`;

function Product({item}) {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>

        </Info>
    </Container>
  )
}

export default Product