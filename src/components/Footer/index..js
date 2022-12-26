import styled from 'styled-components';

const Container = styled.footer`
    background-color: #3D3D3D;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-size:18px;
        color: #FFF;
    }
`

const Footer = () => {
    return(
        <Container>
            <p>Desenvolvido por João Knisspell.</p>
        </Container>
    )
}

export default Footer;