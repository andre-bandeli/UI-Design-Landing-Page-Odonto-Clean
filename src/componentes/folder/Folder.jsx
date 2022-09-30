import React from 'react'
import './folder.scss'

import imagem from './imagens/dentista.jpeg';
import bntC from './imagens/btncheckblack.png';

export default function Folder() {
  return (
    <div className='folder'>
        <div className="container">
          <div className="col-8">
            <h2>Venha fazer uma visita e conhecer a clínica</h2>
            <h3>Estamos ansiosos para conhecer você e sua família</h3>

            <button className='btn-secundary'> 
            <img src={bntC} alt="imagem botao agendar" />
            <a href="">Agende Agora</a>
              
            </button>

          </div>
            <div className="col-4">
                <img src={imagem} alt="imagem dentista com paciente" />
            </div>
        </div>
    </div>
  )
}
