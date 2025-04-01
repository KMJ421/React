import React from 'react'

const Box = (props) => {
  return (
    <div className="box" style={props.style}>
        <h1>{props.title}</h1>
        {props.item ? (<img className="item-img" src={props.item.img} />) : (<div style={{ height: "100px" }}></div>)}
        <h2>{props.result}</h2>
    </div>
  )
}

export default Box
