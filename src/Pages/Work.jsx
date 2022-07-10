import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../assets/Work.scss';
import cat from '../assets/cat.png';
import back from '../assets/back.png';
import github from '../assets/github.svg';
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
      <div className='work__container'>
        <div className='left'>
          <img src={cat} alt='' />
        </div>
        <div className='right'>
          <div className='project'>
            <h3>Netflix clone</h3>
            <p>Updated and modified version for the netflix home page.</p>
            <a href='#'>
              Check it out on Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
