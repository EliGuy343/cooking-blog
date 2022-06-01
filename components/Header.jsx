import React, {useContext} from 'react';
import Link from 'next/link';

const Categories = [
    {name:'React', slug:'react'},
    {name:'React-bs', slug:'react-bs'}
];

const Header = () => {
  return (
    <div 
        style={{'backgroundColor':"rgba(80,80,200,0.7)"}} 
        className='container mx-auto px-10 mb-8'
    >
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
              <span
                style={{"fontSize":"25px"}}
                className='cursor-pointer font-bold-text-4xl text-white'
              >
                The Recipe Hub
              </span>
          </Link>
        </div>
        <div className='md:float-left md:contents'>
          {Categories.map((category)=>
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span 
                  className='md:float-right mt-2 align-middle text-white
                    ml-4 font-semibold cursor-pointer'
                >
                  <div className='linkButton'>
                    {category.name}
                  </div>
                </span>
              </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header