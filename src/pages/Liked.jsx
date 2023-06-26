import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovies, getGenres } from "../store";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import NotAvailable from "../components/NotAvailable";
import Slider from "../components/Slider";
import SelectGenre from "../components/SelectGenre";
import Card from "../components/Card";
import { getUSerLikedMovies } from "../store";
export default function Liked() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);

  const dispatch = useDispatch();
  const [email, setEmail] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else {
      navigate("/login");
    }
  });
  useEffect(() => {
    if (email) {
      dispatch(getUSerLikedMovies(email));
    }
  }, [email]);

 
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>My List</h1>
        <div className="grid flex">
            {movies.map((movie,index)=>{
                return <Card movieData={movie} index={index} key={movie.id} isLiked={true}/>
            })}
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
.content{
    margin:2.3rem;
    margin-top:8rem;
    gap:3rem;
    h1{
        margin:left3rem;
    }
    .grid{
        flex-wrap:wrap;
        gap:1rem;
    }
}`;
