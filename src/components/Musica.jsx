import React, { useEffect, useRef, useState } from 'react'
import musica from '../audio/musica.mp3'

function Musica() {

  const controls = useRef(null)

  useEffect(() => {
    controls.current.volume = 0.05
  }, [controls]);

  return <audio ref={controls} src={musica} autoPlay={true} ></audio>

}

export default Musica