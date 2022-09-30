import React from 'react'
import './cards.scss'

import card1 from './imagens/card1.png'
import card2 from './imagens/card2.png'
import card3 from './imagens/card3.png'
import card4 from './imagens/card4.png'
import card5 from './imagens/card5.png'
import card6 from './imagens/card6.png'

export default function Cards() {
  return (
    <div className='cards'>

      <h2>Diferencial</h2>

        <div className="container">

            <div className="box">

              <div className="circle">
                    <img src={card1} alt="" />
              </div>
              <h2>Profissionais Capacitados</h2>
              <h3>Nossa equipe de dentistas e assistentes é formada apenas por profissionais altamente qualificados</h3>
            </div>
            <div className="box">
              <div className="circle">
                        <img src={card2} alt="" />
                </div>
                <h2>Horários flexíveis</h2>
                <h3>A marcação de horários e exames pode ser feita de acordo com o melhor horário para os nossos pacientes</h3>
            </div>
            <div className="box">
                <div className="circle">
                        <img src={card3} alt="" />
                  </div>
                  <h2>Tratamento personalizado</h2>
                  <h3>Cada paciente é recebido de forma única e seu conforto é uma prioridade para nós</h3>
            </div>
            <div className="box">
                  <div className="circle">
                              <img src={card4} alt="" />
                    </div>
                    <h2>Solicite um orçamento</h2>
                    <h3>Nossa equipe de dentistas e assistentes é formada apenas por profissionais altamente qualificados</h3>
            </div>
            <div className="box">
                    <div className="circle">
                        <img src={card5} alt="" />
                      </div>
                      <h2>Trabalho em equipe</h2>
                      <h3>A marcação de horários e exames pode ser feita de acordo com o melhor horário para os nossos pacientes</h3>
            </div>
            <div className="box">
                      <div className="circle">
                              <img src={card6} alt="" />
                      </div>
                      <h2>Profissionais Capacitados</h2>
                      <h3>Cada paciente é recebido de forma única e seu conforto é uma prioridade para nós</h3>
            </div>
        </div>
    </div>
  )
}
