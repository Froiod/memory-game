import React from 'react'
import './SingleCard.css'

function SingleCard({card, handleChoice}) {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className='card'>
      <div>
        <img src={card.src} alt="card front" />
        <img 
          src='/img/cover.png'
          onClick={handleClick}
          alt="card back" 
        />
      </div>
    </div>
  )
}

export default SingleCard