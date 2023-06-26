import React from "react";
import CardSlider from "./CardSlider";

export default React.memo( function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  
  return (
    <div>
      <CardSlider title="Trending" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="Popular" data={getMoviesFromRange(10, 20)} />
      <CardSlider title="Action" data={getMoviesFromRange(20, 30)} />
      <CardSlider title="Blockbuster" data={getMoviesFromRange(30, 40)} />
      <CardSlider title="Epics" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="trending" data={getMoviesFromRange(50, 60)} />
    </div>
  );
});
