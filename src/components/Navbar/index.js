import styled from "styled-components";
import { BsPlayCircleFill } from 'react-icons/bs';

const Container = styled.div`
    background-color:#1E1E1E;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5em;
    width: 100%;
    height: 10vh;
    box-sizing: border-box;
`

const Navbar = () => {
    return(
        <Container>
            <BsPlayCircleFill size={30} color={'#FED530'} />
            <h2>MusicCenter</h2>   
        </Container>
    )
}

export default Navbar;