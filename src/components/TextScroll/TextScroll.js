import React, { useRef, useState, useEffect } from 'react'
import './TextScroll.scss'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


export default function TextScroll({ content, direction }) {

    const container = useRef(null);

    useEffect(() => {
        if (container.current) {
            const w = container.current.querySelector('.text')

            const [x, xEnd] = direction === 'left' ? ['100%', (w.scrollWidth - container.current.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
            gsap.fromTo(w, { x }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: container.current,
                    scrub: 0.5
                }
            });
        }
    }, [])


    return (
        <section ref={container} className={`textScroll`} >
            <div className={`textScroll-text`}>
                <p className="text" >
                    {
                        content
                    }
                </p>
            </div>
        </section>
    )
}
