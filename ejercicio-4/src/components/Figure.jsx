import React, { useState } from 'react'

const Figure = () => {

    const [manageInterval, setManageInterval] = useState(0)
    const [rgbColor, setRgbColor] = useState('0,0,0')

    const styles = {
        backgroundColor: `rgb(${rgbColor})`
    }


    const randomizeColor = () => {
        setManageInterval(
            setInterval(() => {
                const rgb = []
                rgb.push(Math.ceil(Math.random() * 255))
                rgb.push(Math.ceil(Math.random() * 255))
                rgb.push(Math.ceil(Math.random() * 255))
                setRgbColor(`${rgb.join(',')}`)
            }, 1000)
        )
    }

    const clearUpdate = () => {
        clearInterval(manageInterval)
    }

  return (
    <div className='container'>
        <div className='figure' style={styles} onMouseLeave={clearUpdate} onMouseOver={randomizeColor} onDoubleClick={clearUpdate}>

        </div>
        <p>Color {rgbColor}</p>
    </div>
  )
}


export default Figure