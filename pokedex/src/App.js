import logo from './logo.svg';
import './App.css';
import Logo from "./Logo";
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
const App =() => {
  return (
    <div>
      <Logo appName="Pokedex"/>
      <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']}/>
      <CaughtPokemon TodayDate={new Date().toLocaleDateString()}/>
    </div>
  );
  
  
}

export default App;
