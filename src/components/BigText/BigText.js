import React from 'react'
import './BigText.scss';

export default function BigText({ id }) {
    return (
        <section id={id} className={`bigText`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-12 bigText__content`}>
                        <p className={`text`}>
                            Tengo aproximadamente 4 años de experiencia trabajando en el ámbito digital
                            principalmente como programador, también tengo experiencia con marketing
                            digital y en diseño digital.
                            <br /><br />
                            He podido desempeñarme con éxito en todas mis
                            labores gracias a que me considero una persona creativa, responsable y por
                            sobre todas las cosas el deseo de aprender habilidades y herramientas nuevas
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
