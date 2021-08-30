import React from 'react'
import './Subheading.scss'

export default function Subheading({ text, atr }) {
    return (
        <p className={`subheading ${atr}`}>
            {text}
        </p>
    )
}
