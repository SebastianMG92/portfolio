import React from 'react'
import './Hero.scss'
import { Image } from '../../elements'
import { Particles } from '../index'
import hv from '../../static/curriculum-vitae.pdf'

export default function Hero({ id }) {
    return (
        <section id={id} className={`hero`}>
            <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className={`col-12 col-sm-10 col-md-6 mb-5 mb-md-auto m-auto order-md-1 hero-content`}>
                        <span className={`preheading mb-1 mb-xl-2`}>Hola</span>
                        <h1 className={`heading mb-4`}>
                            Soy Sebastian Marin <span className={`mt-1`}>[ Desarrollador front-end ]</span>
                        </h1>
                        <div className={`btns`}>
                            <a href="#about" className={`btn btn-solid btn-black mb-3 mb-lg-auto `}>
                                ACERCA DE MI
                            </a>
                            <a href={hv} target="_blank" className={`btn btn-solid btn-white`}>
                                DESCARGAR H.V
                            </a>
                        </div>
                    </div>
                    <div className={`col-12 col-sm-10 col-md-5 offset-md-1 hero-image`}>
                        <figure className={`hero-image-frame`}>
                            <Image name="163029279682349936.jpg" />
                            <Particles />
                        </figure>
                    </div>
                </div>
            </div>
        </ section>
    )
}
