import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
let deschead = "Action & Adventure Series";
const desc = "Time for some action? We’ve got you covered. Fantasy and adventure, mystery and murder, cops and criminals—there’s enough fun for everyone in these TV shows. Watch now for free";
const arr =[
  {
    image:"https://occ-0-2595-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUD92whdwqVnEPh5fMHOBL5vext3SdEnKXR03ZDZ7on7yhm0es-61Q_70kKhas_PtfHMDD49bJJ4F3w015XiAFW7H9cDUzEDl8TFSKPAHWhImqoatBUPOMxuj2N.jpg?r=1f7",
    name:"Extraction"
  },{
    image:"https://occ-0-2595-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa1nyBEi4gqCXXYJXObKWDwHT3HARnPQTPIi1G0IoXNApiXdldb6HG-M6sAaT4iSEE9L-SljqzTf0jlJl6WRfLvCRYA.jpg?r=845",
    name:"Aquaman"
  },{
    image:"https://occ-0-2595-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ3zNNfnKrKSwjlTOWsRp4FOUkcCpOhQ_I1V6UwpaKbY76dTJ633LfFf-A8AUi0bdL-w8b_-r2MVPyFWKQIqjLqRCQQ.jpg?r=052",
    name:"Godzilla"
  },
  {
    image:"https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVq1Ck17Qln2Qls2Jef8AZKXw0s48z1pdLcYi0FQfkevO8xka6lZGAvXdxC6HzpoR7ut5-kC24a-fkwPpGDnDzNhbz8.jpg?r=eab",
    name:"Vikings"
  },
  {
    image:"https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXxTnIX0G41UviehfvgOJkHYqq6GV3rMWqZhXwY7vqwZDzRZXYVqmhC-rg2nDR3BsB6HljF-IIId-klcADSRgCqUd41n5HDbkMQbu5aYWu-ldCsaKXt-nvscvxdg.jpg?r=4ce",
    name:"Cobra Kai"
  },
  {
    image:"https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXtmKjGQ71E6xL_WDCIxN7rUVLWGfe-AVDOsh9eg57bG9UIfmxzLES2fmd47vZaLnYj_wbOB_FqzVEFgF-gKi3b_zfE.jpg?r=972",
    name:"Teen Wolf"
  }
];
function MovieList() {
  return(
    <div>
    <nav></nav> 
    <h1>{deschead}</h1> 
    <h3>{desc}</h3>
    <button type="button" className="butt">&gt;</button> 
    <article className="innerdiv"> 
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
    <img
    src={image}>
    </img>
    <h4>{name}</h4>
    </section>
  );
}


ReactDOM.render(<MovieList/>,document.getElementById("root"));