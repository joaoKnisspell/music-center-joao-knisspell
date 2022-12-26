// React
import styled from "styled-components";


// Componentes
import MusicCard from "../MusicCard";
import { SectionTitle } from "../SectionTitle";



const Container = styled.section`

    width: 90%;
    margin: 0 auto 32px auto;
    padding-top: 1em;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    
    .subtitulo{
        text-align:center;
        color: #E6E6E6;
        margin: 2em 1em 2.5em 1em;
        text-align:justify;
    }

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap:2.5em;
    }

    input{
        border: none;
        background-color: #3D3D3D;
        border-radius:20px;
        padding: 0.8em 1em;
        width: 100%;
        max-width: 500px;
        margin: 0 1em 2em 1em;
        outline: none;
        text-align: start;
        color: #E1E1E1;
        
        text-align: center;
    }
    input::placeholder{
        background-image: url("/img/vector.svg");
        background-repeat: no-repeat;
        background-position: start;
        padding-right:1em ;
    }

`

const SectionMusicCards = ( {songs, onHandleSearch} ) => {

    return(
        <Container>
            <SectionTitle>Músicas</SectionTitle>
            <p className="subtitulo">Clique em uma categoria para filtrar as músicas por gênero ou pesquise pelo nome da música ou artista:</p>
            <input type="text" placeholder="Pesquise sua música/artista" onChange={(event) => onHandleSearch(event.target.value.toLowerCase())}/>
            <ul>
            {songs.map((song) => (
              <li key={song.id}><MusicCard name={song.name} artist={song.artist} img={song.img} category={song.category} /> </li>  
            ))} 
            </ul>
        </Container>
    )
}

export default SectionMusicCards;
