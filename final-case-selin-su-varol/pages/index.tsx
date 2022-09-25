import type { NextPage } from 'next'
import Head from 'next/head'
import Modal1 from '../public/components/modal1'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Selin Su Varol - Patika - Popupsmart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-yellow-300'>
        <Modal1 />
      </div>
    </div>
  )
}

export default Home
