import React from 'react'

function Card({user}) {
    console.log(user);
  return (
    <div className='w-full bg-white'>
        {user.name}
    </div>
  )
}

export default Card