import React, { useRef, useEffect } from 'react'
import './Timeline.scss'
import { Heading, Subheading, Text } from '../../elements'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Timeline({ id }) {

    const container = useRef(null)
    const progress_bar = useRef(null)
    const timeline_item = useRef([])

    useEffect(() => {
        if (container.current) {

            ScrollTrigger.create({
                trigger: container.current,
                start: "20% bottom",
                // endTrigger: headings[i+1] ? headings[i+1] : '',
                // end: distance ? `+=${distance}` : "",
                toggleActions: "play play play play",
                // end: "bottom 50%+=100px",
                onEnter: (evt) => {
                    // li.classList.add("active");
                },
                onLeave: (evt) => {
                    // li.classList.add("active");
                },
                onLeaveBack: (evt) => {
                    // li.classList.remove("active");
                },
                onUpdate: ({ progress, direction, isActive }) => {
                    progress_bar.current.style.setProperty("--progress", progress * 100 + "%");
                },
            });
        }
    }, [])

    useEffect(() => {
        if (timeline_item.current.length > 0) {

            for (let i = 0; i < timeline_item.current.length; i++) {
                const timeline = timeline_item.current[i];
                ScrollTrigger.create({
                    trigger: timeline,
                    start: "top 70%",
                    toggleActions: "play play play play",
                    onEnter: (evt) => {
                        timeline.classList.add("active");
                    },
                });
            }


        }
    }, [])

    return (
        <section id={id} className={`timeline`}>
            <div ref={container} className={`container`}>
                <div className={`row`}>
                    <div className={`col-12 timeline-container`}>

                        <div ref={progress_bar} className={`timeline-progress`}>

                        </div>

                        <div className={`timeline-experiences`}>

                            <div
                                ref={(item) => (timeline_item.current[0] = item)}
                                className={`timeline-experience`}>

                                <div className={`timeline-experience-year mb-3`}>
                                    2019 - Actualidad
                                </div>

                                <div className={`timeline-experience-content`}>
                                    <Heading
                                        heading={'2'}
                                        text={'360PMI'}
                                        atr={`mb-2`}
                                    />
                                    <Subheading
                                        text={'[ Lider front-end ]'}
                                        atr={`mb-3`}
                                    />
                                    <Text
                                        text={`                                        
                                        Desde un comienzo trabaje como desarrollador front-end creando
                                        paginas para Wordpress, Shopify, Squarespace y correos
                                        electrónicos para campañas de mailing, a partir de la segunda
                                        mitad del año de 2020 fui promovido para liderar el equipo de
                                        front-end implementando tecnologías de javascript para el
                                        front como React y Next js.`}
                                    />
                                </div>

                            </div>

                            <div
                                ref={(item) => (timeline_item.current[1] = item)}
                                className={`timeline-experience`}>

                                <div className={`timeline-experience-year mb-3`}>
                                    2018 - 2019
                                </div>

                                <div className={`timeline-experience-content`}>
                                    <Heading
                                        heading={'2'}
                                        text={'Ciudad Plus'}
                                        atr={`mb-2`}
                                    />
                                    <Subheading
                                        text={'[ Programador web ]'}
                                        atr={`mb-3`}
                                    />
                                    <Text
                                        text={`                                        
                                        Desempeñe el cargo de programador web en Wordpress,
                                        creando el código desde 0 tanto para el back como para el front,
                                        además de tareas adicionales como desplegar la pagina en
                                        servidores apache, configuración y posicionamiento SEO,
                                        administración de campañas de mailing y administración de
                                        campañas de Google adwords y Facebook Ads`}
                                    />
                                </div>

                            </div>

                            <div
                                ref={(item) => (timeline_item.current[2] = item)}
                                className={`timeline-experience`}>

                                <div className={`timeline-experience-year mb-3`}>
                                    2016 - 2018
                                </div>

                                <div className={`timeline-experience-content`}>
                                    <Heading
                                        heading={'2'}
                                        text={'Web Colombia Hosting'}
                                        atr={`mb-2`}
                                    />

                                    <Subheading
                                        text={'[ Programador y diseñador web ]'}
                                        atr={`mb-3`}
                                    />
                                    <Text
                                        text={`                                        
                                        En un comienzo trabaje como diseñador de paginas web creando
                                        mock ups y diseños finales de paginas, banners y logos para la
                                        web. Desde de la mitad del 2016 empecé a trabajar como
                                        programador web y analista de Google adwords.`}
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
