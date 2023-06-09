import React from 'react'

const TextInput = ({textValue}) => {
    const handlechange = (e) =>{
        textValue(e.target.value)
    }
    return (
     
    <div>
         <input type="text" onChange={(e) => handlechange(e)} />
    </div>
     
  )
}

export default TextInput
