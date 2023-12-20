import React from 'react'

export default function Block(props) {
  return (
    <>
    <div>
    <button className='button' style={{border: "1px Solid", height: "100px", width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={props.onClick}>{props.value}</button>
      </div>
    </>
  )
}
