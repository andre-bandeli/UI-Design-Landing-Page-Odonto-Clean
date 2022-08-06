import React from 'react'
import './navbar.scss'

import $ from "jquery"


export default function Navbar() {




  $(".menu").on("click", function(){
    console.log('click')
    $(".col-sm-nav-mobile").css('visibility', 'visible');
    $(".btn-x").css('visibility', 'visible');
  });
  $(".btn-x").on("click", function(){
    console.log('click')
    $(".col-sm-nav-mobile").css('visibility', 'hidden');
  });
 


  return (
    <div className='navbar'>

        <div className="container-nav">
            <div className="col-logo">
              <img src="imagens/logo.png" alt="" />
            </div>
            <div className="nav">

                <div className="col-sm-nav">
                    <ul>
                      <li>Home</li>
                      <li>Sobre</li>
                      <li>Profissionais</li>
                      <li>Tratamentos</li>
                      <li>Dúvidas</li>
                    </ul>
                </div>
               
                <div className="col-mobile">
                <button className='btn-x'><img src="icones/x.png" alt="" /></button>
                   <button className='menu'>
                   <img src="icones/menu.png" alt="" />
                   </button>
                 
                    <div className="col-sm-nav-mobile">
                        <ul>
                          <li>Home</li>
                          <li>Sobre</li>
                          <li>Profissionais</li>
                          <li>Tratamentos</li>
                          <li>Dúvidas</li>
                        </ul>
                    </div>
                </div>
          
            </div>
            <div className="btn-agendar">

              <button className='btn'> <img src="icones/agenda.png" alt="" /> AGENDAR</button>
                
            </div>
        </div>

    </div>
  )
}
