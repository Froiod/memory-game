import React from 'react'

function SingleCard({card}) {
  return (
    <div className='card'>
      <div>
        <img src={card.src} alt="card front" />
        <img src='/img/cover.png' alt="card back" />
      </div>
    </div>
  )
}

export default SingleCard