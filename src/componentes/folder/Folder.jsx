import React from 'react'
import './folder.scss'

export default function Folder() {
  return (
    <div className='folder'>
        <div className="container">
          <div className="col-8">
            <h2>Venha fazer uma visita e conhecer a clínica</h2>
            <h3>Estamos ansiosos para conhecer você e sua família</h3>

            <button className='btn-secundary'> 
            <img src="imagens/layout/btncheckblack.png" alt="" />
            <a href="">Agende Agora</a>
              
            </button>

          </div>
            <div className="col-4">
                <img src="imagens/paciente-dentista.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}
