import React from 'react'

function HeadingDescription({title,description}) {
  return (
    <div>
        <h2 className='font-bold text-3xl' >{title}</h2>
        <p className='text-gray-400 text-lg mt-2'>{description}</p>
    </div>
  )
}

export default HeadingDescription