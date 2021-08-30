import React from 'react'
import './Heading.scss'

export default function Heading({ heading, text, atr }) {
    const CustomTag = `h${heading}`
    return (
        <CustomTag className={`heading ${atr}`}>
            {text}
        </CustomTag>
    )
}
