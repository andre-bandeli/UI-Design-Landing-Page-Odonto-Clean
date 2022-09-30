import React from 'react'
import './header.scss'

import imagemHeader from'./imagens/imagemInicial.png';

export default function Header() {
  return (
    <div className='slider'>

        <div className="container">
            <div className="col-6">
                  <h3>
                    20 Anos de experiência
                  </h3>
                  <h2>
                    Realizando sonhos de um <span className='color-text'>Sorriso perfeito!</span>
                  </h2>

                  <div className="btns">
                      <button className='btn-intro'>
                        Entre em contato
                      </button>
                      <button className='btn-intro-secundary'>
                        Saiba mais
                      </button>
                  </div>

              
            </div>
            <div className="col-6">

              <img src={imagemHeader} alt="imagem-inicial" />
                
            </div>
        </div>

    </div>
  )
}
