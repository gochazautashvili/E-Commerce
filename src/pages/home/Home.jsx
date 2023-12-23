import React from 'react'
import './Home.scss'
import Hero from '../../components/homeComponent/hero/Hero'
import Popular from '../../components/homeComponent/popular/Popular'
import Arrivals from '../../components/homeComponent/arrivals/Arrivals'
import Offer from '../../components/homeComponent/offer/Offer'
import Articles from '../../components/homeComponent/articles/Articles'
import NewsLetter from '../../components/newsLetter/NewsLetter'

function Home() {
  return (
    <main className='home'>
      <Hero />
      <Popular />
      <Arrivals />
      <Offer />
      <Articles />
      <NewsLetter />
    </main>
  )
}

export default Home