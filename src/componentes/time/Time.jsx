import React from 'react'
import './time.scss'

import ReactElasticCarousel from 'react-elastic-carousel'

export default function Time() {


  const breakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 375, itemsToShow: 1},
    {width: 550, itemsToShow: 1},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
  ]


  return (
    <div className='time'>
      <h2>Dentistas Certificados</h2>
      <h3>Nossa equipe de dentistas e assistentes é formada apenas por profissionais altamente qualificados.</h3>
        <div className="container">

        <ReactElasticCarousel breakPoints={breakPoints}>
          <div className='box'>
            <div className="imagem">
                  <img src="imagens/medica-imagem-3.png" alt="" />
            </div>
            <div className="nome">
            <h2>Dra. Ana Pereira</h2>
              <h3>Ortodontista</h3>
            </div>

          </div>

          <div className='box'>
          <div className="imagem">
                  <img src="imagens/medica-imagem-3.png" alt="" />
            </div>
            <div className="nome">
            <h2>Dra. Ana Pereira</h2>
              <h3>Clínica geral</h3>
            </div>

          </div>

          <div className='box'>
          <div className="imagem">
                  <img src="imagens/medica-imagem-3.png" alt="" />
            </div>
            <div className="nome">
            <h2>Dra. Ana Pereira</h2>
              <h3>Ortodontista</h3>
            </div>

          </div>
          <div className='box'>
          <div className="imagem">
                  <img src="imagens/medica-imagem-3.png" alt="" />
            </div>
            <div className="nome">
            <h2>Dra. Ana Pereira</h2>
              <h3>Ortodontista</h3>
            </div>

          </div>
   
          </ReactElasticCarousel>
            
        </div>
    </div>
  )
}
