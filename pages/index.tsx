import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const posts = [
  {id: 1, title: 'React Testing', excerpt:'Learn React Testing'},
  {id: 2, title: 'React with tailwind', excerpt: 'Learn React with Tailwind'}
];

const Home: NextPage = () => {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Recipe Hub</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post, index) => (
              <div key={post.id}>
                {post.title}
                {post.excerpt}
              </div>
            ))}
          </div>
          <div className='lg:col-span-4 col-span-1'>
              <div className='lg:sticky relative top-8'>

              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
