import React, { useRef, useEffect } from 'react'
import './Projects.scss'
import { Image, Heading, Subheading, Text } from '../../elements'


import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


export default function Projects({ projects, id }) {

    const parallax_container = useRef([])

    useEffect(() => {
        if (parallax_container.current.length > 0) {

            for (let i = 0; i < parallax_container.current.length; i++) {
                const container = parallax_container.current[i];
                const item = container.querySelector('.js-anim-parallax-item');


                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: .5,
                        onEnter: ({ progress, direction, isActive }) => {
                            container.classList.add('active')
                        }
                    }
                });

                tl.to(item, { y: -(container.offsetHeight * .3), ease: "none" }, 0);

            }

        }
    }, [])

    return (
        <section id={id} className={`projects`}>
            <div className={`container`}>
                {
                    projects.map((project, idx) => {
                        return (
                            <div
                                ref={(item) => (parallax_container.current[idx] = item)}
                                className={`row projects-row ${idx % 2 ? 'left' : ''}`} key={project.name + idx}>
                                <div className={`col-12 col-md-7`}>
                                    {
                                        project.isLive ?
                                            <a href={project.link} target="_blank" className={`projects-image js-anim-parallax-item`}>
                                                <Image name={`${project.image}`} atr={``} />
                                                <span>
                                                    VIEW LIVE
                                                </span>
                                            </a>

                                            :
                                            <a href="#" className={`projects-image js-anim-parallax-item`}>
                                                <Image name={`${project.image}`} atr={``} />
                                                <span>
                                                    VIEW LAYOUT
                                                </span>
                                            </a>
                                    }

                                </div>
                                <div className={`col-12 col-md-5 align-self-md-center`}>
                                    <div className={`projects-content`}>

                                        <Heading
                                            heading={'3'}
                                            text={project.name}
                                            atr={`mb-2`}
                                        />
                                        <Subheading
                                            text={project.subTitle}
                                            atr={`mb-3`}
                                        />
                                        <Text
                                            text={project.content}
                                        />
                                        {
                                            project.isLive ?
                                                <a href={project.link} target="_blank" className={`link`}>
                                                    VIEW LIVE
                                                </a>
                                                :
                                                <a href="#" className={`link`}>
                                                    VIEW LAYOUT
                                                </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
