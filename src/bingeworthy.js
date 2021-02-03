import React from 'react';
import './index.css';
import { arr2 } from './Movies';
import {descbinge}  from './data';
import Movie from './Movie';

function Bingeworthy() {
  
function scrolldiv() {
  let butt3 = document.getElementById('butt3');
  butt3.style.visibility = 'visible';
  let item = document.getElementById('div3');
  item.scrollBy({ left: 900, top: 0, behavior: 'smooth' });
}
  function scrolldiv1() {
    let item = document.getElementById('div3');
    item.scrollBy({ left: -900, top: 0, behavior: 'smooth' });
  }
  return (
    <div className="bngworth">
      <h3 style={{marginTop:'4.5rem'}}>{descbinge}</h3>
      <button type='button' className='butt' onClick={scrolldiv}  style={{marginTop:"5vw"}}>&gt;</button>
      <button type='button' className='butt1' id='butt3' onClick={scrolldiv1}
        style={{ visibility: 'hidden',marginTop:"4vw" }}> &lt;</button>
      <article className='innerdiv' id='div3'>
        {arr2.map((movies) => {
          const { id, image, name } = movies;
          return (
            <div key={id}>
              <Movie   movies={movies}></Movie>
            </div>
          );
        })}
      </article>
    </div>
  );
}
export default Bingeworthy
