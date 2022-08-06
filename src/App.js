import './App.css';
import Cards from './componentes/cards/Cards';
import Navbar from './componentes/navbar/Navbar';
import Slider from './componentes/slider/Slider';
import Time from './componentes/time/Time';
import Tratamentos from './componentes/tratamentos/Tratamentos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Cards/>
      <Tratamentos/>
      <Time/>
    </div>
  );
}

export default App;
