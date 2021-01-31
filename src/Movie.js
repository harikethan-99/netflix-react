import React from 'react';
const Movie = (props) => {
    const { image, name } = props.movies;
    return (
      <section>
        <img src={image}></img>
        <h4>{name}</h4>
      </section>
    );
  };
  export default Movie