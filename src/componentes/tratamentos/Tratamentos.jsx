import React from 'react'
import './tratamentos.scss'
import { FaCheck } from 'react-icons/fa';

export default function Tratamentos() {
  return (
    <div className='tratamentos'>
      <h2>Tratamentos</h2>
        <div className="container">
            <div className="box">

              <div className="titulo">
                  <div className="fa-icon">
                   <img src="imagens/layout/checkbox.png" alt="" />
                  </div>
                  <h3>Implantandontia</h3>
              </div>
              <h3>O tratamento com implantes dentrários visa substituir ou repor dentes perdidos por parafusos de 
                titáno que funcionam como substitutos das raízes dos dentes. O tratamento é extremamente seguro e com altíssimo índice de sucesso,
                desdde que seja realizado por profissional capacitado</h3>

            </div>

            <div className="box">
            <div className="titulo">
                  <div className="fa-icon">
                    <img src="imagens/layout/checkbox.png" alt="" />
                  </div>
                  <h3>Prótese Dental</h3>
              </div>
               <h3>O tratamento com implantes dentrários visa substituir ou repor dentes perdidos por parafusos de 
                titáno que funcionam como substitutos das raízes dos dentes. O tratamento é extremamente seguro e com altíssimo índice de sucesso,
                desdde que seja realizado por profissional capacitado</h3>
                
            </div>
            <div className="box">
            <div className="titulo">
                  <div className="fa-icon">
                        <img src="imagens/layout/checkbox.png" alt="" />
                  </div>
                  <h3>Ortodontia</h3>
              </div>
              <h3>O tratamento com implantes dentrários visa substituir ou repor dentes perdidos por parafusos de 
                titáno que funcionam como substitutos das raízes dos dentes. O tratamento é extremamente seguro e com altíssimo índice de sucesso,
                desdde que seja realizado por profissional capacitado</h3>
            </div>
            <div className="box">
            <div className="titulo">
                  <div className="fa-icon">
                        <img src="imagens/layout/checkbox.png" alt="" />
                  </div>
                  <h3>Estética</h3>
              </div>
              <h3>O tratamento com implantes dentrários visa substituir ou repor dentes perdidos por parafusos de 
                titáno que funcionam como substitutos das raízes dos dentes. O tratamento é extremamente seguro e com altíssimo índice de sucesso,
                desdde que seja realizado por profissional capacitado</h3>
            </div>
            
        </div>
    </div>
  )
}
