import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import {arr} from "./Movies";
let deschead = "Action & Adventure Series";
const desc = "Time for some action? We’ve got you covered. Fantasy and adventure, mystery and murder, cops and criminals—there’s enough fun for everyone in these TV shows. Watch now for free";
function MovieList() {
  function scrolldiv(){
    let butt1 = document.getElementById("butt1");
    butt1.style.visibility = "visible";
    let item = document.getElementById("div1");
    item.scrollBy({left:900,top:0,behavior:'smooth'});
    
}
function scrolldiv1(){
  let item = document.getElementById("div1");
  item.scrollBy({left:-900,top:0,behavior:'smooth'});
}
  return(
    <div>
    <nav></nav> 
    <h1>{deschead}</h1> 
    <h3>{desc}</h3>
    <button type="button" className="butt" onClick={scrolldiv}>&gt;</button>
    <button type="button" className="butt1" id="butt1" onClick={scrolldiv1} style={{visibility:"hidden"}}>&lt;</button>
    <article className="innerdiv" id="div1"> 
    {arr.map((movies) => {
      const {image, name} = movies;
      return (
        <div>
        <Movie movies = {movies}></Movie>
        </div>
      );
    })}
  </article>
</div>
  );
}
const Movie = (props) =>{
  const {image, name} = props.movies;
  return(
    <section>
    <img src={image}></img>
    <h4>{name}</h4>
    </section>
  );
}


ReactDOM.render(<MovieList/>,document.getElementById("root"));