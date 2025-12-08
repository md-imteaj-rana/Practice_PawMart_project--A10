import React from 'react'
import Slider from '../component/Slider'
import PopularSection from '../component/PopularSection'
import MeetOurVets from '../component/MeetOurVets'
import WinterCareTips from '../component/WinterCareTips'
import WhyPawMart from '../component/WhyPawMart'

const Home = () => {
  return (
    <div>
        <title>PawMart/Home</title>
      <Slider></Slider>
      <PopularSection></PopularSection>
      <MeetOurVets></MeetOurVets>
      <WhyPawMart></WhyPawMart>
      <WinterCareTips></WinterCareTips>
    </div>
  )
}

export default Home
