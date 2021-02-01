import React from 'react';
import './index.css';
import { arr } from './Movies';
import {deschead,desc}  from './data';
import Movie from './Movie';

function Project() {
  
function scrolldiv() {
  let butt1 = document.getElementById('butt1');
  butt1.style.visibility = 'visible';
  let item = document.getElementById('div1');
  item.scrollBy({ left: 900, top: 0, behavior: 'smooth' });
}
  function scrolldiv1() {
    let item = document.getElementById('div1');
    item.scrollBy({ left: -900, top: 0, behavior: 'smooth' });
  }
  return (
    <div>
      <nav></nav>
      <h1>{deschead}</h1>
      <h3>{desc}</h3>
      <button type='button' className='butt' onClick={scrolldiv}>&gt;</button>
      <button type='button' className='butt1' id='butt1' onClick={scrolldiv1}
        style={{ visibility: 'hidden' }}> &lt;</button>
      <article className='innerdiv' id='div1'>
        {arr.map((movies) => {
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
export default Project
