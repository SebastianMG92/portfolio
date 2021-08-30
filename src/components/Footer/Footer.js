import React from 'react'
import './Footer.scss'
import { Heading, Subheading, Text } from '../../elements/'
import emoji from 'emoji-dictionary'

import Email from "../../icons/email.svg";
import Phone from "../../icons/phone.svg";
import Linkedin from "../../icons/linkedin.svg";
import Github from "../../icons/github.svg";
import Behance from "../../icons/behance.svg";




export default function Footer() {
    return (
        <footer id="contact" className={`footer`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-12 col-md-6 m-auto text-center`}>
                        <span className="emoji mb-1">
                            {emoji.getUnicode("wave")}
                        </span>
                        <Heading atr={'mb-1'} heading={'3'} text={`Di hola`} />
                        <Subheading atr={'mb-3'} text={`[ Gracias por su visita ]`} />
                        <Text atr={`mb-5`} text={`Estoy interesado en contactar con personas que tengan una gran idea en mente o empresas que estén interesadas en mi portafolio. <br><br>Sin embargo, si tiene otra solicitud y pregunta puede escribirme en mis redes`} />

                        <ul className={`footer-btns`}>
                            <li>
                                <a href="mailto:sebastian.1546@gmail.com" target="_blank">
                                    <Email />
                                </a>
                            </li>

                            <li>
                                <a href="tel:3138141692" target="_blank">
                                    <Phone />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/sebastian-mg/" target="_blank">
                                    <Linkedin />
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/SebastianMG92" target="_blank">
                                    <Github />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.behance.net/SebastianMG" target="_blank">
                                    <Behance />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
