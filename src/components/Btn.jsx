import React from 'react'

const Btn = (props) => {
    console.log(props.title)
  return (
    <>
      <button className={props.color}>
       {props.title}
        </button>
    </>
  )
}

export default Btn
