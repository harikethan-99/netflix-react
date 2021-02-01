import React from 'react';
import './index.css';
import { arr1 } from './Movies';
import {descheadkids}  from './data';
import Movie from './Movie';

function Project1() {
  
function scrolldiv() {
  let butt2 = document.getElementById('butt2');
  butt2.style.visibility = 'visible';
  let item = document.getElementById('div2');
  item.scrollBy({ left: 900, top: 0, behavior: 'smooth' });
}
  function scrolldiv1() {
    let item = document.getElementById('div2');
    item.scrollBy({ left: -900, top: 0, behavior: 'smooth' });
  }
  return (
    <div>
      <h3 style={{marginTop:'4.5rem'}}>{descheadkids}</h3>
      <button type='button' className='butt' onClick={scrolldiv}>&gt;</button>
      <button type='button' className='butt1' id='butt2' onClick={scrolldiv1}
        style={{ visibility: 'hidden' }}> &lt;</button>
      <article className='innerdiv' id='div2'>
        {arr1.map((movies) => {
          const { id,image, name } = movies;
          return (
            <div key={id}>
              <Movie key={id} movies={movies}></Movie>
            </div>
          );
        })}
      </article>
    </div>
  );
}
export default Project1
