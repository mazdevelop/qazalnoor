import { useState, useEffect } from 'react'
import { getHomePageData } from '../lib/api'

export default function Slider() {
  const [slides, setSlides] = useState([])

  useEffect(() => {
    const fetchSlides = async () => {
      const { data } = await getHomePageData()
      setSlides(data.slider)
    }
    fetchSlides()
  }, [])

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <img src={slide.image} alt={slide.title} />
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      ))}
    </div>
  )
}