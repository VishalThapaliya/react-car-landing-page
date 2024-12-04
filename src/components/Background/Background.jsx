import './Background.css';
import image1 from '../../assets/image_1.jpg';
import image2 from '../../assets/image_2.avif';
import image3 from '../../assets/image_3.avif';
import image4 from '../../assets/image_4.jpg';
import image5 from '../../assets/image_5.avif';
import video1 from '../../assets/video_1.mp4';

const Background = ({ playState, heroCount }) => {
  if(playState === true) {
    return <video className='background fade-in' autoPlay loop muted >
              <source src={video1}></source>
          </video>

  } else if(playState !== true && heroCount === 0) {
    return <img src={image1} className='background fade-in' />
  } else if(playState !== true && heroCount === 1) {
    return <img src={image2} className='background fade-in' />
  } else if(playState !== true && heroCount === 2) {
    return <img src={image3} className='background fade-in' />
  } else if(playState !== true && heroCount === 3) {
    return <img src={image4} className='background fade-in' />
  } else if(playState !== true && heroCount === 4) {
    return <img src={image5} className='background fade-in' />
  }
}

export default Background