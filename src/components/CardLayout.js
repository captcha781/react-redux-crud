import React from 'react'
import Card from './Card'

function CardLayout({data}) {
  return (
    <section className='cardLayout bg-gray-300'>
        {data.map(element => {
          return  <Card user={element} key={element.id} />
        })}
        
    </section>
  )
}

export default CardLayout