import React from 'react'


const Cards = ({ image, title, price, description }) => {
  return (
   
    <div className='card ' style={{ backgroundColor: 'blue', color: 'white',width: '500px' }}>
      
    <img src={image} alt={title} className="card-img" style={{width: '300px'}} />
    <div className="card-body">
      <h4>{title}</h4>
      <p>{description}</p>
      <p><strong>₦{price}</strong></p>
    </div>
  </div>
  
  )
}

export default Cards
