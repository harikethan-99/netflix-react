import React from 'react';
import './index.css';
import { arr } from './Movies';
import {deschead,desc}  from './data';
import Movie from './Movie';

function Project() {
  
function scrolldiv() {
  let butt1 = document.getElementById('butt1');
  if(window.innerWidth >= 1023)
  {
    butt1.style.visibility = 'visible';
    let item = document.getElementById('div1');
  item.scrollBy({ left: 900, top: 0, behavior: 'smooth' });
  }else
  {
    butt1.style.visibility = 'hidden';
  }
}
  function scrolldiv1() {
    let item = document.getElementById('div1');
    item.scrollBy({ left: -900, top: 0, behavior: 'smooth' });
  }
  return (
    <div className="action">
      <button type='button' className='butt' onClick={scrolldiv} style={{marginTop:"15rem"}}>&gt;</button>
      <button type='button' className='butt1' id='butt1' onClick={scrolldiv1}
        style={{ visibility: 'hidden' }}> &lt;</button>
        <h1>{deschead}</h1>
      <h3>{desc}</h3>
      
      <article className='innerdiv' id='div1'>
        {arr.map((movies) => {
          const { id,image, name } = movies;
          return (
            <div key={id}>
              <Movie movies={movies}></Movie>
            </div>
          );
        })}
      </article>
    </div>
  );
}
export default Project
