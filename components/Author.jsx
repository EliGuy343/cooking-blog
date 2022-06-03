import React from 'react'

const Author = ({ author }) => {
  return (
    <div 
      style={{'backgroundColor':"rgba(150,80,10,0.3)"}}
      className='flex items-center text-center mt-20 mb-8 p-8 relative rounded-lg'
    >
        <img
          alt={author.name}
          height="100px"
          width="100px"
          className='align-middle rounded-full'
          src={author.photo.url}
        />
        <h3 className='ml-2 text-black text-xl font-bold'>
          {author.name}
        </h3>
        <p className='mt-1 ml-12 font-bold break-words'>
          {author.bio}
        </p>
    </div>
  )
}

export default Author