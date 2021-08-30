import React, { useRef, useEffect } from 'react'
import './Particles.scss'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Particles() {

    const container = useRef(null)
    const shapes = useRef(null)


    useEffect(() => {


        if (container.current) {

            let shapeW = 15
            let shapeH = 25

            let windowW = window.getComputedStyle(shapes.current).width.split('px')[0]
            let windowH = window.getComputedStyle(shapes.current).height.split('px')[0]

            let numContainers = Math.floor(windowH / shapeH)
            let numShapes = Math.floor(windowW / shapeW)
            let gutter = ((windowW - (shapeW * numShapes)) / numShapes) + 10
            let totalWidthShape = shapeW + gutter
            let config = {
                duration: 1,
                rotation: -135,
                ease: "linear",
                repeat: -1,
                // delay: 1,
                stagger: {
                    grid: 'auto',
                    from: "end",
                    axis: "x",
                    amount: 1.5
                }
            }

            const handleanimation = () => {
                gsap.to(".shape", config).yoyo(true).repeatDelay(.4);
            }

            for (let j = 0; j < numContainers; j++) {
                let template = document.createElement("div");
                template.classList.add('shape__row');

                for (let i = 0; i < numShapes; i++) {
                    let shape = document.createElement("div");
                    shape.classList.add('shape')
                    shape.style.left = `${(totalWidthShape * i) + gutter / 2}px`
                    template.appendChild(shape);
                }

                shapes.current.appendChild(template);
            }

            handleanimation();

        }

    }, [])

    return (
        <div ref={container} className={`particles`}>
            <div className={`particles-loader`}>
                <div ref={shapes} className={`particles-loader--inner`}>
                </div>
            </div>
        </div>
    )
}
