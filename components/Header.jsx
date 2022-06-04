import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { getCategories } from '../services';


const Header = () => {
 const [categories, setCategories] = useState([]);
  useEffect(() =>{
    const fetchData = async () => {
      try {
        const res = await getCategories();
        setCategories(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  
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
          <Link href='/'>
            <span 
              className='md:float-right mt-2 align-middle text-white
              ml-4 font-semibold cursor-pointer'
            >
              <div className='linkButton'>
                home
              </div>
            </span>
          </Link>
          {categories.map((category)=>
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