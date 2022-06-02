import {useState, useEffect} from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() =>{
    const   fetchData = async () => {
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
   <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        categories
      </h3>
      {categories.map((category) =>(
        <>
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
        </>
      ))}
      </div>
  )
}

export default Categories