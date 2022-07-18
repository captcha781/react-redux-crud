import React from 'react'

function Card({user}) {
  console.log(user);
  return (
    <div className='col-span-1 bg-white px-2 py-3 my-2'>
        <p>{user.name}</p>
    </div>
  )
}

export default Card