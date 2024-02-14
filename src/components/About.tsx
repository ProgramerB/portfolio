import React from 'react'
import profilePic from '../img/divya.png';
const About = () => {
  return (
    <div className="main">
      <div className='col left-col'>
        <img className='profilePic' alt='divya-nadar' src={profilePic}></img>
      </div>
      <div className='col right-col'>
        <div className='title'>
          My Story
        </div>
        <div className='paragraph'>
          As a seasoned advertising and marketing professional, I've had the privilege to craft compelling narratives, driving brand success and 
          igniting audience engagement.
        </div>
        <div className='paragraph'>
          My journey began with a passion for storytelling and a keen eye for designs and patterns. At the heart of my approach lies a deep 
          understanding of consumer psychology and market dynamics. I thrive on uncovering insights that inspire impactful campaigns and 
          deliver measurable results. Whether it's crafting captivating ad copy, developing strategic marketing plans, or orchestrating 
          multi-channel campaigns, I bring a blend of creativity and analytical rigor to every project.
        </div>
        <div className='paragraph'>
          Beyond the boardroom, I'm a perpetual learner, relentless dreamer & passionate photographer. I'm always exploring new trends, 
          experimenting with emerging technologies, and pushing the boundaries of creativity. From mastering the latest social media 
          algorithms to diving deep into finding different patterns in the daily routine, I'm constantly seeking ways to stay ahead of 
          the curve and deliver cutting-edge solutions.
        </div>
        <div className='paragraph'>
          But above all, what drives me is the opportunity to make a meaningful impact. Whether it's sparking a conversation, inspiring 
          action, or evoking emotion, I believe in the power of advertising and marketing to shape perceptions, drive change, and create 
          lasting connections.
        </div>
        <div className='paragraph'>
          So, whether you're looking to launch a new product, elevate your brand presence, or connect with your audience in a meaningful 
          way, I'm here to help you tell your story, captivate your audience, and achieve your goals.
        </div>
      </div>
    </div>
  )
}

export default About
