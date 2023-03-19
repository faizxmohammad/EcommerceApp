import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size : 14px;
    font-weight:500;
`
function Announcement() {
  return (
    <Container>Super deal !!! Free Shipping on Orders over 50$</Container>
  )
}

export default Announcement