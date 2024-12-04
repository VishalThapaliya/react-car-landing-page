import './Hero.css';
import playIcon from '../../assets/play_icon.png';
import pauseIcon from '../../assets/pause_icon.png';
import arrowBtn from '../../assets/arrow_btn.png';

const Hero = ({ heroTexts, heroCount, setHeroCount, playState, setPlayState }) => {
    return (
        <>
            <div className="hero">
                <div className="hero-text">
                    <p className='title'>{heroTexts.title}</p>
                    <p className='sub-title'>{heroTexts.subtitle}</p>
                </div>

                <div className="hero-explore">
                    <p>Explore the features</p>
                    <img src={arrowBtn} alt="Explore" />
                </div>

                <div className="hero-play-dots">
                    <ul className="hero-dots">
                        <li onClick={() => setHeroCount(0)} className = { heroCount === 0 ? 'dot orange' : 'dot' }></li>
                        <li onClick={() => setHeroCount(1)}  className = { heroCount === 1 ? 'dot orange' : 'dot' }></li>
                        <li onClick={() => setHeroCount(2)} className = { heroCount === 2 ? 'dot orange' : 'dot' }></li>
                        <li onClick={() => setHeroCount(3)} className = { heroCount === 3 ? 'dot orange' : 'dot' }></li>
                        <li onClick={() => setHeroCount(4)} className = { heroCount === 4 ? 'dot orange' : 'dot' }></li>
                    </ul>

                    <div className="hero-play">
                        <img style={{height: "50px"}} onClick={() => setPlayState(!playState)} src={playState ? pauseIcon : playIcon } alt="Video" />
                        <p>See the video</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero