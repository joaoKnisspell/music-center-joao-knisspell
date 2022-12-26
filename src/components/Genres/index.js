import styled from "styled-components";
import GenreCards from "../GenresCards";
import { SectionTitle } from "../SectionTitle";

const Container = styled.section`
    background-color: transparent;
    padding: 32px;
    //margin:0 10%;
    ul{
        margin-top: 32px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        gap: 2em 0;
    }
    @media screen and (min-width:1440px){
        ul{
            margin: 32px 10%;
            gap: 3.5em 0;
        }
    }
`

const Genres = ({ songsFilter }) => {

    const categories = [
        {id:1, name:"Rock", number:"01", img:"/img/rock.jpg" },
        {id:2, name:"Rap", number:"02", img:"/img/rap.jpg" },
        {id:3, name:"Reggaeton", number:"03", img:"/img/reggaeton.jpg" },
        {id:4, name:"Trap", number:"04", img:"/img/trap.jpg" },    
    ];

    return(
        <Container>
            <SectionTitle>Gêneros musicais</SectionTitle>
            <ul>
                {categories.map(categ => (
                    <li key={categ.id}><GenreCards songsFilter={songsFilter} name={categ.name} number={categ.number} img={categ.img}/></li>
                ))} 
                <li><GenreCards songsFilter={songsFilter} name="Todos" number="05" img="/img/todas.jpg"/></li>
            </ul>
        </Container>
    )
}

export default Genres;