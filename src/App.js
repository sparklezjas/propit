import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard name={"Flint Lockwood"}
      age={ 23} 
      occupation={"Inventor"} 
      home={"Swallow Falls"} /> 
      <PersonCard name={"Sam Sparks"}
      age={ 23} 
      occupation={"Meteorologist"} 
      home={"New York City"} /> 
      <PersonCard name={"Tim Lockwood"}
      age={ 49} 
      occupation={"Tackle Shop Owner"} 
      home={"Swallow Falls"} /> 
      <PersonCard name={"Brent McHale"}
      age={ 25} 
      occupation={"Mascot"} 
      home={"Swallow Falls"} /> 
    </div>
  );
}

export default App;
