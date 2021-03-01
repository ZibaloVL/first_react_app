import React from 'react'


function Car(props) {
  return (
    <div>
    <h3>Сar name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <button 
      type="button"
      onClick={props.onChangeTitle}
    >
            change
    </button>
  </div>
  )
}  

export default Car;