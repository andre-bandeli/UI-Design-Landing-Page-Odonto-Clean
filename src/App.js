import './App.css';
import Cards from './componentes/cards/Cards';
import Navbar from './componentes/navbar/Navbar';
import Slider from './componentes/slider/Slider';
import Tratamentos from './componentes/tratamentos/Tratamentos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Cards/>
      <Tratamentos/>
    </div>
  );
}

export default App;
