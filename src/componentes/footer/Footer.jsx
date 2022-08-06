
import React from 'react'
import './footer.scss'

export default function Footer() {
  return (
    <div className='footer'>

      <div className="container">
          <div className="col-sm">

            <img src="imagens/logo.png" alt="" />

          </div>
          <div className="col-sm">

            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut atque sed numquam aspernatur accusantium</h3>

          </div>
          <div className="col-sm">

            <h2>Páginas</h2>
            <ul>
              <li>
                  Home
              </li>
              <li>
                  Sobre
              </li>
              <li>
                  Profissionais
              </li>
              <li>
                  Tratamentos
              </li>
              <li>
                  Dúvidas
              </li>
            </ul>

          </div>
          <div className="col-sm right">
                  <img src="icones/facebook.png" alt="" />
                  <img src="icones/linkedin.png" alt="" />
                  <img src="icones/instagram.png" alt="" />
          </div>
      </div>

    </div>
  )
}
