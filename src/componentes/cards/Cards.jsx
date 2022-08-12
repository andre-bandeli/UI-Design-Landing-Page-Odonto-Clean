import React from 'react'
import './cards.scss'

export default function Cards() {
  return (
    <div className='cards'>

      <h2>Diferencial</h2>

        <div className="container">

            <div className="box">

              <div className="circle">
                    <img src="imagens/layout/card1.png" alt="" />
              </div>
              <h2>Profissionais Capacitados</h2>
              <h3>Nossa equipe de dentistas e assistentes é formada apenas por profissionais altamente qualificados</h3>
            </div>
            <div className="box">
              <div className="circle">
                        <img src="imagens/layout/card2.png" alt="" />
                </div>
                <h2>Horários flexíveis</h2>
                <h3>A marcação de horários e exames pode ser feita de acordo com o melhor horário para os nossos pacientes</h3>
            </div>
            <div className="box">
                <div className="circle">
                        <img src="imagens/layout/card3.png" alt="" />
                  </div>
                  <h2>Tratamento personalizado</h2>
                  <h3>Cada paciente é recebido de forma única e seu conforto é uma prioridade para nós</h3>
            </div>
            <div className="box">
                  <div className="circle">
                              <img src="imagens/layout/card4.png" alt="" />
                    </div>
                    <h2>Solicite um orçamento</h2>
                    <h3>Nossa equipe de dentistas e assistentes é formada apenas por profissionais altamente qualificados</h3>
            </div>
            <div className="box">
                    <div className="circle">
                        <img src="imagens/layout/card5.png" alt="" />
                      </div>
                      <h2>Trabalho em equipe</h2>
                      <h3>A marcação de horários e exames pode ser feita de acordo com o melhor horário para os nossos pacientes</h3>
            </div>
            <div className="box">
                      <div className="circle">
                              <img src="imagens/layout/card6.png" alt="" />
                      </div>
                      <h2>Profissionais Capacitados</h2>
                      <h3>Cada paciente é recebido de forma única e seu conforto é uma prioridade para nós</h3>
            </div>
        </div>
    </div>
  )
}
