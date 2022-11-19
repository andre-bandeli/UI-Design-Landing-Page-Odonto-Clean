import classes from '../Nav/Navbar.modules.css'
import NavLinks from "./NavLinks";

import btnCheck from './imagens/btncheck.png'
import logo from './imagens/logo.svg'

const Navigation = () => {
    return ( 
        <nav className="Navigation">
             <img src={logo} alt="imagem-logo" />
             <div className="btn-agendar">
                <button className='btn'> 
                <img src={btnCheck} alt="botao-agendar" />
                <a href="">AGENDAR</a></button>
            </div>
        <NavLinks/>
        </nav>
     );
}
 
export default Navigation;