// Components
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Genres from "./components/Genres";
import SectionMusicCards from "./components/SectionMusicCards";
import Footer from "./components/Footer/index.";

// Data
import songsData from './data/db.json';

// React
import { useState } from 'react';


function App() {

  const [songs, setSongs] = useState(songsData.musics);

  const songsFilter = (categ) => {
    categ !== 'Todos' ? 
    setSongs(songsData.musics.filter((song) => song.category === categ)) :
    setSongs(songsData.musics)
  }

  const onHandleSearch = (valor) => {
    console.log(valor)
    const toLower = (text) => text.toLowerCase();
    setSongs(songsData.musics.filter(song => (
      toLower(song.name).includes(valor) || toLower(song.artist).includes(valor)
    )))
  }

  return (
    <div>
      <Navbar />
      <Banner />
      <Genres songsFilter={songsFilter} />
      <SectionMusicCards onHandleSearch={onHandleSearch} songs={songs}/>
      <Footer />
    </div>
  );
}

export default App;
