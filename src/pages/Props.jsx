import React from 'react'
import Btn from '../components/Btn'

const Props = () => {
  return (
    <>
      <Btn title='Change' color='btn btn-danger' text='text-info' />
      <Btn title='Beautify' color='btn btn-primary' text='text-warning'/>
      <Btn title='Decorate' color='btn btn-dark' text='text-light'/>
      <Btn title='Add' color='btn btn-warning' text='text-danger'/>
      <Btn title='Update' color='btn btn-danger' text='text-dark'/>
    </>
  )
}

export default Props
