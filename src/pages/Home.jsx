import React, { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
//React Hooks - useState useEffect, useContext
const Home = () => {
//const [variablename, functiontochangeyourvariablename]=useState(initialvalueforyourvariablename)
const [myAge, setMyAge]= useState(12)
const [myName, setMyName]= useState('Dave')

//  let myAge = 0
  const increaseBtn = () =>{
    setMyAge(myAge + 1)
    setMyName('David')

    
    // show.innerHTML = myAge
    // alert('i don dey work')
  }
  const decreaseBtn = () =>{
    setMyAge (myAge - 1)
    setMyName('Dave')
    // show.innerHTML = myAge
    // alert('i don dey work ooooo')
  }
  return (
    <>
    <div>
        <h1>I am a man</h1>
        <p>work with me</p>
    </div>
    <Button/>
    <Card/>

    <button onClick={()=>increaseBtn()}>Increase</button>
    <p>{myAge}</p>
    <p>{myName}</p>

    <button onClick={decreaseBtn}>Decrease</button>

    </>
  )
}

export default Home