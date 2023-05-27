import React from 'react';
import HeroBanner from './herobanner/HeroBanner';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import Trending from './trending/Trending';



const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home