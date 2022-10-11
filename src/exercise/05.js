// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size='',style,...otherProps}) => {
    const combinedStyle = {fontStyle: 'italic', ...style}
    const sizeClassName = size ? `box--${size}` : '';
    return (<div style={combinedStyle} className={`box ${sizeClassName}`} {...otherProps}/>)
}

const smallBox = <Box size="small" style={{backgroundColor:'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor:'pink'}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor:'orange'}}>large orange box</Box>

export function App() {
    return (
        <React.StrictMode>
            {smallBox}
            {mediumBox}
            {largeBox}
            <Box>sizeless box</Box>
        </React.StrictMode>
    )
}
