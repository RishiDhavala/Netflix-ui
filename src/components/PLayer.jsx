import React from 'react';
import styled from 'styled-components';
import {BsArrowLeft} from "react-icons/bs";
import video from "../assets/video.mp4"; 

import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const PLayer=()=> {

 const navigate=useNavigate();
  return (
    <Container>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={()=>navigate(-1)}/>
            </div>
            <video src={video} autoPlay loop controls muted></video>
        </div>
    </Container>
  );
}

const Container = styled.div`
.player{
    
    height:100vh;
    width:100vw;
    .back{
position:absolute;
padding:2rem;
z-index:1;
svg{
    font-size:3rem;
    cursor:pointer:
}
 &:hover{
    cursor:pointer;
 }
    }

    video{
        height:100%;
        width:100%;
        object-fit:cover;
    }
}`;
export default PLayer;