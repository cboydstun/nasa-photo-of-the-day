import React from 'react'
import styled from 'styled-components';

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin: 0 auto;
  background-color:white;
  padding: 20px;
`;

const BodyDiv = styled.div`
  width: 500px;
  background-color: grey;
  padding: 50px;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 20%;
  border-width: 10px;
  border-style: solid;
`;

const Headline = styled.h1`
  text-align:center;
  color: black;
  font-size: 40px;
`;

const SpacePic = styled.img`
  height: 300px;
  width: 300px;
`;

const SpaceBlurb = styled.span`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const SpaceDate = styled.p`
  font-size: 40px;
  display: flexbox;
  align-items: center;
  justify-content: center;
  margin:0;
`;


function PhotoCard(props){
  return (
    <WrapperDiv>
      <BodyDiv>
        <Headline>{props.title}</Headline>
        <SpaceDate>{props.date}</SpaceDate>
        <SpacePic src={props.url} alt="nasa"/>
        <SpaceBlurb>{props.explanation}</SpaceBlurb>
      </BodyDiv>
    </WrapperDiv>
  )

}

export default PhotoCard;