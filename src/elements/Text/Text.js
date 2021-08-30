import React from 'react'
import parse from "html-react-parser"
import './Text.scss'

export default function Text({ atr, text }) {
    return (
        <p className={`text ${atr}`}>
            {parse(text)}
        </p>
    )
}
