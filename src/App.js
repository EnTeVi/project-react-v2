import './App.css';
import {RocketsLaunch} from "./components/RocketsLaunch/RocketsLaunch";

function App() {
  return (
    <div className="App">
        <div className='header'>
            <h1>Launching rockets Spacex in space</h1>
        </div>
        <div className='container'>
            <RocketsLaunch/>
        </div>
    </div>
  );
}

export default App;
