import React from 'react'
import './cards.scss'

export default function Cards() {
  return (
    <div className='cards'>

      <h2>Diferencial</h2>

        <div className="container">

            <div className="box">

              <div className="circle">
                    <img src="icones/coracao.png" alt="" />
              </div>
              <h2>Profissionais Capacitados</h2>
              <h3>Nossa equipe de dentistas e assistentes é formada apenas por profissionais altamente qualificados</h3>
            </div>
            <div className="box">
              <div className="circle">
                      <img src="icones/agenda.png" alt="" />
                </div>
                <h2>Horários flexíveis</h2>
                <h3>A marcação de horários e exames pode ser feita de acordo com o melhor horário para os nossos pacientes</h3>
            </div>
            <div className="box">
                <div className="circle">
                        <img src="icones/dente.png" alt="" />
                  </div>
                  <h2>Tratamento personalizado</h2>
                  <h3>Cada paciente é recebido de forma única e seu conforto é uma prioridade para nós</h3>
            </div>
            <div className="box">
                  <div className="circle">
                          <img src="icones/fone-de-ouvido.png" alt="" />
                    </div>
                    <h2>Solicite um orçamento</h2>
                    <h3>Nossa equipe de dentistas e assistentes é formada apenas por profissionais altamente qualificados</h3>
            </div>
            <div className="box">
                    <div className="circle">
                            <img src="icones/equipe.png" alt="" />
                      </div>
                      <h2>Trabalho em equipe</h2>
                      <h3>A marcação de horários e exames pode ser feita de acordo com o melhor horário para os nossos pacientes</h3>
            </div>
            <div className="box">
                      <div className="circle">
                            <img src="icones/exame-medico.png" alt="" />
                      </div>
                      <h2>Profissionais Capacitados</h2>
                      <h3>Cada paciente é recebido de forma única e seu conforto é uma prioridade para nós</h3>
            </div>
        </div>
    </div>
  )
}
