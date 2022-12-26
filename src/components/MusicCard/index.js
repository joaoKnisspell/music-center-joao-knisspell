import styled from "styled-components";

const Container = styled.div`
    display: inline-block;
    background-color: #3D3D3D;
    padding: 1em 1em 0 1em;
    border-radius: 5px;
    height: 320px;
    .card-image{
        text-align: center;
    }
    .card-image img{
        width: 180px;
        height: 180px;
    }
    .card-text{
        p{
            color: #E6E6E6;
            font-weight:400;
            font-size: 12px;
        }
        .artist{
            font-size: 14px;
        }
        h4{
            font-weight: 500;
            font-size: 24px;
            color: #FFFFFF;
            max-width: 180px;
            margin: 5px 0;
        }
    }
`

const MusicCard = ({ name, artist, category, img }) => {
    return(
        <Container>
            <div className="card-image">
                <img alt={name} src={img} />
            </div>
            <div className="card-text">
                <p className="artist">{artist}</p>
                <h4>{name}</h4>
                <p>{category}</p>
            </div>
        </Container>
    )
}

export default MusicCard;