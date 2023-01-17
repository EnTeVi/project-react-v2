import './App.css';
import {
  AbadangoClusterPrincess
} from "./components/AbadangoClusterPrincess/AbadangoClusterPrincess";
import {RickSanchez} from "./components/RickSanchez/RickSanchez";
import {MortySmith} from "./components/MortySmith/MortySmith";
import {SummerSmith} from "./components/SummerSmith/SummerSmith";
import {BethSmith} from "./components/BethSmith/BethSmith";
import {JerrySmith} from "./components/JerrySmith/JerrySmith";

function App() {
  return (
    <div className="App">
        <div className='header'><h1 className='header-text'>Characters of the animated series Rick and Morty</h1></div>
        <div className='block-one'>
            <RickSanchez/>
            <MortySmith/>
            <SummerSmith/>
        </div>

        <div className='block-one'>
            <BethSmith/>
            <JerrySmith/>
            <AbadangoClusterPrincess/>
        </div>
    </div>
  );
}

export default App;
