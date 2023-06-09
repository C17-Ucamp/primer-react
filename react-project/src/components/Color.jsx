import React from 'react'

const Color = ({colorValue}) => {
  return (
    <div>
        <h1>Color</h1>
 
      <input type='color' onChange={(e)=> colorValue(e.target.value)}></input>
    </div>
  )
}

export default Color
