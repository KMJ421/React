import React from 'react'

const Box = (props) => {
  return (
    <div className="box" style={props.style}>
        <h1>{props.title}</h1>
        {props.item ? (<img className="item-img" src={props.item.img} alt={props.item.name || "아이템 이미지"} />) 
                    : (<img className="item-img" src="https://media.istockphoto.com/id/1269211670/ko/%EB%B2%A1%ED%84%B0/%EB%B0%94%EC%9C%84-%EC%A2%85%EC%9D%B4-%EA%B0%80%EC%9C%84-%EB%B0%94%EB%94%94-%EB%B6%80%ED%92%88-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%84%B8%ED%8A%B8.jpg?s=612x612&w=0&k=20&c=DUSkj7qffdCKSgog68nl9SebmidKSXxhnjzUlVcV9-s="
                      alt=""/>)}
        <h2>{props.result}</h2>
    </div>
  )
}

export default Box
