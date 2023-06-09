import React from 'react'
import { useState } from 'react';
import Color from './Color';
import TextInput from './TextInput';

const Saludo = () => {
    const aqui= "React"

    function handleSubmit(){
        console.log("presionaste aqui")
    }

    let contador = 0;
    function enviar(){
        contador++;
        console.log(`${contador}`)
    }

    //---------Estados----------
   const [color, setColor] = useState('#00000')
  const [text, setText] = useState('Holicrayoli') 

  return (
    <div>

      <h1>Hola Mundo</h1>
      <h3>!Hola {aqui}!</h3>
      <button onClick={handleSubmit}>Enviar</button>
      <button onClick={()=> enviar()}>Contador</button>  
      
      <div>
        <h1 style={{color: color}}>{text}</h1>
      <Color colorValue={setColor}/>
      <TextInput  textValue={setText} />
      </div>

    </div>
  )
}

export default Saludo
