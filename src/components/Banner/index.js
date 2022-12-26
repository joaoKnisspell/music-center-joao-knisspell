import styled from 'styled-components';

const Container = styled.main`
    background-image: url("/img/banner.jpg");
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 90vh;
    position: relative;
    .fade{
        height: 100%;
        width: 100%;
        position: absolute;
        top:0;
        left:0;
        background-color: rgba(0,0,0,0.6);
        z-index: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .banner-text{
        z-index:1;
        width: 300px;
        margin: 0 auto;
        h1{
            color: #FFF;
            font-size: 40px;
            line-height: 1.5em;
        }  
        p{
            font-size: 16px;
            font-weight: 400;
            margin: 1.5em 0;
            color: #E6E6E6;
            line-height: 1.8em;
        }
    }
    button{
        background: #FED530;
        border-radius: 40px;
        border: none;
        font-size: 20px;
        font-weight: 700;
        padding: 0.5em 1em;
        border: 3px solid #FED530;
        cursor: pointer;
        transition: .5s;
        :hover{
            background-color: transparent;
            color: #FED530;
        }
    }

    @media screen and (min-width: 1024px){
        .fade{
            justify-content: center;
        }
        .banner-text{
            text-align: start;
            width: auto;
            h1{
                font-size: 64px;
                text-align: center;
                width: 800px;
            }
            p{
                width: 500px;
                font-size: 20px;
                margin: 2em auto 3em auto;
            }
        }
        button{
            padding: 0.5em 2em;
        }
    }
`

const Banner = () => {
    return(
        <Container>
            <div className="fade">
                <div className='banner-text'>
                    <h1>Suas músicas preferidas em um só lugar</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <button>Criar conta</button>
            </div>
        </Container>
    )
}

export default Banner;