import './App.css';
import Cards from './componentes/cards/Cards';
import Clientes from './componentes/clientes/Clientes';
import Duvidas from './componentes/duvidas/Duvidas';
import Folder from './componentes/folder/Folder';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Navbar from './componentes/Nav/Navbar';

import Time from './componentes/time/Time';
import Tratamentos from './componentes/tratamentos/Tratamentos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Cards/>
      <Tratamentos/>
      <Time/>
      <Folder/>
      <Clientes/>
      <Duvidas/>
      <Footer/>
    </div>
  );
}

export default App;
