import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next';
import {Categories, PostCard, PostWidget} from '../components';
import {getPosts} from '../services';


const Home: NextPage = ({posts}:InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(posts);
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Recipe Hub</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post: any, index:number) => (
              <PostCard post={post} key={index} />
            ))}
          </div>
          <div className='lg:col-span-4 col-span-1'>
              <div className='lg:sticky relative top-8'>
                <PostWidget/>
                <Categories/>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || [];
  return {
    props:{posts}
  };
}

export default Home
