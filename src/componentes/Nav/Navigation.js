import classes from '../Nav/Navbar.modules.css'
import NavLinks from "./NavLinks";

const Navigation = () => {
    return ( 
        <nav className="Navigation">
             <img src="imagens/layout/logo.svg" alt="" />
             <div className="btn-agendar">
                <button className='btn'> <img src="imagens/layout/btncheck.png" alt="" />
                <a href="">AGENDAR</a></button>
            </div>
        <NavLinks/>
        </nav>
     );
}
 
export default Navigation;