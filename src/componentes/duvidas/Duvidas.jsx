import React from 'react'
import './duvidas.scss'


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
                                            What harsh truths do you prefer to ignore?
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
                                            What harsh truths do you prefer to ignore?
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
                                            What harsh truths do you prefer to ignore?
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
                                            What harsh truths do you prefer to ignore?
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
                                            What harsh truths do you prefer to ignore?
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
                                            What harsh truths do you prefer to ignore?
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
                    <img src="imagens/sorr.jpg" alt="" />

                </div>
                <div className="card-box-meio">

                </div>
                <div className="card-box-frente">
                    <img src="imagens/escovando-dentes.jpg" alt="" />
                </div>
                
            </div>
        </div>

    </div>
  )
}
