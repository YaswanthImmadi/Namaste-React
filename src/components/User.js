import React from 'react'
import { useState } from 'react'

const User = (props) => {
    const [count]=useState(0);
    const [count2]=useState(0);
  return (
    <div className='p-4 m-4 border border-green-500' >
      <h1>Count={count}</h1>
      <h1>Count2={count2}</h1>
      <h1>Name:{props.name}</h1>
      <h2>Location:{props.location}</h2>
      <h2>Contact: @SaiImmadi</h2>
    </div>
  )
}

export default User
