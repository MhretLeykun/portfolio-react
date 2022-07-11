import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../assets/Work.scss';
import cat from '../assets/cat.png';
import back from '../assets/back.png';
import netflix from '../assets/netflix-1-logo-svgrepo-com.svg';
import next from '../assets/next.png';
export default function Work() {
  let navigate = useNavigate();
  return (
    <div>
      {/* <Navbar /> */}
      <div className='top-fixed'>
        <button onClick={() => navigate(-1)}>
          <img src={back} alt='' />
        </button>
      </div>
      <div className='absolute__icons'>
        <div className='next'>
          <img src={next} alt='' />
        </div>
      </div>
      <div className='work__container'>
        <div className='left'>
          <img src={cat} alt='' />
        </div>
        <div className='right'>
          <div className='card'>
            <div className='card__content'>
              <div className='card__image'>
                <img src={netflix} alt='' />
              </div>
              <div className='card__details'>
                <p>Netflix landing page clone by Mhret.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
