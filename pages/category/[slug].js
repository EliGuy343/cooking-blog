import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPosts } from '../../services';
import { PostCard, Categories, PostWidget} from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
          {posts.length > 0 ?
            (<PostWidget 
                category={posts[0].node.category} 
                slug={posts[0].node.slug}
            />)
            :(<PostWidget/>)}
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPosts(params.slug);

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}