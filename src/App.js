import logo from './logo.svg';
import './App.css';
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Music <code>Player App</code> React.
        </p>
        <div className='player'>
          <Player trackList={tracks} />
        </div>
       
      </header>
    </div>
  );
}

export default App;
