import React from 'react'
import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>

        <div className="container">
            <div className="col-logo">
              <img src="imagens/logo.png" alt="" />
            </div>
            <div className="nav">

              <div className="container">

                  <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Profissionais</li>
                    <li>Tratamentos</li>
                    <li>Dúvidas</li>
                  </ul>
              </div>

          
            </div>
            <div className="btn-agendar">
                
            </div>
        </div>

    </div>
  )
}
