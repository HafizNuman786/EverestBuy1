import React from 'react'
import Head from 'next/head'
import Navbar from './Layout_comp/Navbar'
import Footer from './Layout_comp/Footer'
import Header from './Layout_comp/Header'

export default function Layout({title,children}) {
  return (
 <>
  <Head>
        <title>{title ? title + '-Everst ' : 'EverstBuy'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
 </>

  )
}
