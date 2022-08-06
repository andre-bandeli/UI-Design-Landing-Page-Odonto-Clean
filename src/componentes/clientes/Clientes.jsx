
import React from 'react'
import './clientes.scss'
import ReactElasticCarousel from 'react-elastic-carousel'

export default function Clientes() {


  const breakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 375, itemsToShow: 1},
    {width: 550, itemsToShow: 1},
    {width: 768, itemsToShow: 1},
    {width: 1200, itemsToShow: 2},
    {width: 1400, itemsToShow: 2},
  ]


  return (
    <div className='clientes'>

      <h2>Nossos Clientes</h2>
     
        <div className="container">

        <ReactElasticCarousel breakPoints={breakPoints}>
          <div className='box'>
            <h2>"</h2>
            <div className="text">
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci sunt, repudiandae totam
               eveniet minima pariatur fuga atque placeat rem quam vel, nisi beatae ratione sit labore numquam asperiores corporis!</h3>
            </div>
            <div className="imagem">

            </div>

          </div>

          <div className='box'>
              <h2>"</h2>
                <div className="text">
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci sunt, repudiandae totam
                  eveniet minima pariatur fuga atque placeat rem quam vel, nisi beatae ratione sit labore numquam asperiores corporis!</h3>
                </div>
                <div className="imagem">
              
              </div>

          </div>

          <div className='box'>
              <h2>"</h2>
                <div className="text">
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci sunt, repudiandae totam
                  eveniet minima pariatur fuga atque placeat rem quam vel, nisi beatae ratione sit labore numquam asperiores corporis!</h3>
                </div>
                <div className="imagem">
              
              </div>

          </div>

          <div className='box'>
              <h2>"</h2>
                <div className="text">
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci sunt, repudiandae totam
                  eveniet minima pariatur fuga atque placeat rem quam vel, nisi beatae ratione sit labore numquam asperiores corporis!</h3>
                </div>
                <div className="imagem">
              
                </div>
              
          </div>

         
   
          </ReactElasticCarousel>
            
        </div>
    </div>
  )
}
