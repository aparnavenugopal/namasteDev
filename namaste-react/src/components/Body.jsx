import React from 'react'
import ResCard from './ResCard';

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <ResCard resName="meghana foods" cusinie="north Indian, asian"/>
        <ResCard resName="kfc" cusinie="fast food, asian"/>
      </div>
    </div>
  )
}

export default Body;