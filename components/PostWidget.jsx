import moment from "moment";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getRecentPosts } from "../services";

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  console.log(relatedPosts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(slug) {
            const res = await getSimilarPosts(categories, slug);
            setRelatedPosts(res);
        }
        else {
          const res = await getRecentPosts(categories, slug);
          setRelatedPosts(res);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post)=> (
        <div key={post.name} className='flex items-center w-full mb-4'>
          <div className="w-16 flex-none">
            <img
              alt={post.name}
              height='60px'
              width='60px'
              className="align-middle rounded-full"
              src={ post.featuredImage.url} 
            />
          </div>
          <div className="flex grow ml-4">
            <p className="text-gray-500 font-xs mr-5">
              {moment(post.createdAt).format('MMM DD YYYY')}
            </p>
            <Link 
              href={`/post/${post.slug}`}
              key={post.name} 
              className='ml-2 text-md'
            >
              {" "+post.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget