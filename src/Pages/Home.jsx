
import Navbar from '../components/Navbar';
import '../assets/Home.scss';
import web from '../assets/pexels-miguel-á-padriñán-1591060.jpg';
import scroll from '../assets/scroll.png';
export default function Home() {
  return (
    <div>
      <div class='ripple-background'>
        <div class='circle xxlarge shade1'></div>
        <div class='circle xlarge shade2'></div>
        <div class='circle large shade3'></div>
        <div class='circle mediun shade4'></div>
        <div class='circle small shade5'></div>
      </div>

      <Navbar />
      <div className='body__container'>
        <div className='body__name'>
          <p className='first'>
            INGENIOUS <br />
            <p className='second'>DEVELOPER</p>{' '}
          </p>
        </div>
        <div className='body__image'>
          <img src={web} alt='' />
        </div>

        <div className='body__detail'>
          <div className='left'>
            <p>
              I design and develop promethean, loveable and innovative websites.
            </p>
          </div>

          <div className='right'>
            <img src={scroll} alt='Scroll' />
          </div>
        </div>
      </div>
    </div>
  );
}
