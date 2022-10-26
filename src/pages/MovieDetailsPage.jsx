import React from 'react'
import { BannerCard } from '../components/BannerCard'
import sbp75 from "../images/movies/sbp75.webp"

const slideData = 
    {
      sno: 1,
      title: "SPB 75",
      meta: [
          {
              data: "StarPlus"
          },
          {
              data: "Hindi"
          },
          {
              data: "Reality"
          }
      ],
      description: "On the birth anniversary of the legendary singer, late Mr. SP Balasubrahmanyam, relive some of his evergreen melodies.",
      img: sbp75
    }

export const MovieDetailsPage = () => {
  return (
    <div>
        <BannerCard item={slideData}/>
        <h2>Hello World</h2>
    </div>
  )
}
