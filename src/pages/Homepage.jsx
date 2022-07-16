import React from 'react'
import { Banner } from '../components/Banner'
import { MovieTray } from '../components/MovieTray'

export const Homepage = () => {
  return (
      <div className='homepage'>
        <Banner />
        <MovieTray heading="Latest & Trending" />
        <MovieTray heading="Popular Shows" />
      </div>
  )
}
