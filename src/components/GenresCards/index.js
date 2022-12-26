import styled from "styled-components";

const Container = styled.div`
    background-color: #000;
    width: 296px;
    height: 136px;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    :hover{
        .fade{
            background-color: rgba(0,0,0,0.2);
        }
    }
    .fade{
        height: 100%;
        width: 100%;
        position: absolute;
        top:0;
        left:0;
        background-color: rgba(0,0,0,0.6);
        z-index: 1;
        transition: .4s;
    }
    button{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: none;
        color: #fff;
        font-size: 30px;
        font-weight: 700;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    p{
        position: absolute;
        bottom: -15px;
        right: 10px;
        font-weight: 700;
        font-size: 25px;
        color: #fff;
    }
`

const GenreCards = ({ name, number, img, songsFilter}) => {
    return(
        <Container style={{backgroundImage:"url(" + img + ")"}}>
            <div className="fade">
                <button onClick={() => songsFilter(name)}>{name}</button>
                <p>{number}</p>
            </div>
        </Container>
    )
}

export default GenreCards;