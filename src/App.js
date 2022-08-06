import './App.css';
import Cards from './componentes/cards/Cards';
import Clientes from './componentes/clientes/Clientes';
import Folder from './componentes/folder/Folder';
import Footer from './componentes/footer/Footer';
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
      <Folder/>
      <Clientes/>
      <Footer/>
    </div>
  );
}

export default App;
