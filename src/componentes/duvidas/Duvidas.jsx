import React from 'react'
import './duvidas.scss'

import img1 from './imagens/escovando-dentes.jpg';
import img2 from './imagens/sorriso.jpg';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Duvidas() {
  return (
    <div className='duvidas'>

        <div className="container">

            <div className="col-6">
            <h2>Dúvidas frequentes</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae fugiat odit a optio, nam dolorem deleniti soluta,
         quibusdam fugit aliquam reprehenderit voluptate dignissimos. Vel corporis vitae numquam ratione tempore.</h3>
                <div className="container">
                            <Accordion className='acordion'>
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            01 - Será que tenho DTM?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            02 - O que é DTM?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            03 - O que é bichectomia?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            04 - Dentista pode aplicar botox?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            05 - O que é harmonização facial?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='ac-btn'>
                                            06 - Aparelhos estéticos funcionam como os metálicos?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                          
                    </Accordion>
                </div>
            
            </div>
            <div className="col-6">

                <div className="card-box-tras">
                    <img src={img1} alt="imagem escovando dentes" />

                </div>
                <div className="card-box-meio">

                </div>
                <div className="card-box-frente">
                    <img src={img2} alt="imagem sorrindo" />
                </div>
                
            </div>
        </div>

    </div>
  )
}
