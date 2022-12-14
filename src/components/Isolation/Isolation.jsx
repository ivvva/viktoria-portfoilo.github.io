import React from 'react'
import './Isolation.scss'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const Isolation = () => {

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className='container3'>
      <AutoplaySlider
      cssModule={Isolation}
      className='slider'
      play={true}
      cancelOnInteraction={true}
      interval={2000}
      >
        <div>
          <video
            controls='' muted autoPlay loop
            src='/videos/isolation1.mp4'
            type='video/mp4'
            className='vid' />
        </div>
        <div>
          <video
            controls='' muted autoPlay loop
            src='/videos/isolation2.mp4'
            type='video/mp4'
            className='vid' />
        </div>
        <div>
          <video
            controls='' muted autoPlay loop
            src='/videos/isolation3.mp4'
            type='video/mp4'
            className='vid' />
        </div>
        <div>
          <video
            controls='' muted autoPlay loop
            src='/videos/isolation4.mp4'
            type='video/mp4'
            className='vid' />
        </div>
      </AutoplaySlider>
    </div>
  )
}

export default Isolation