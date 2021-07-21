import styled from 'styled-components';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  box-sizing: border-box;
  padding: 7em 3em 3em 3em;
  overflow-x: hidden;
  @media only screen and (max-width: 1024px) {
    padding-top: 13em;
    padding-bottom: 3em;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 7em;
    padding-bottom: 3em;
  }
`;
const Heading1 = styled.h1`
  font-family: 'Bungee', cursive;
  margin-bottom: 1%;
  font-size: 2em;
`;

const Heading2 = styled.h2`
  font-family: 'Bungee', cursive;
  margin-bottom: 1%;
  font-size: 1.5em;
`;

const HowTo = styled.div`
  width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.7em;
  box-sizing: border-box;
  @media only screen and (max-width: 1024px) {
    width: 70%;
  }
`;
const ListItem = styled.p`
  font-size: 1.8em;
  text-align: left;
  margin: 1em 0;
  color: lightcyan;
  @media only screen and (max-width: 1024px) {
    font-size: 1em;
  }
`;
const ContributorWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  align-self: center;
`;
const Contributor = styled.a`
  font-family: 'Bungee', cursive;
  text-decoration: none;
  color: aquamarine;
  font-size: 0.8em;
  font-weight: 300;
  margin: 1em 0;
  &:hover {
    color: gold;
  }
`;

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.to-synth',
      {
        color: () => {
          return `hsl(360, 100%, 50% )`;
        },
      },
      {
        color: 'hsl(+=360, +=0%, +=0%)',
        duration: 5.5,
        repeat: -1,
        ease: 'none',
      }
    );
  });

  return (
    <AboutContainer>
      <Heading1> How To Play: </Heading1>
      <HowTo data-cy='how-to'>
        <ListItem data-cy='list-item'>
          Make sure the sound is on! (also, rotate your phone horizontally if
          you're using one)
        </ListItem>
        <ListItem data-cy='list-item'>
          Play the synth by clicking/touching the keys, or try using your
          computer keyboard!
        </ListItem>
        <ListItem data-cy='list-item'>
          Morph the sound by playing with the effects sliders (if you have a
          scroll wheel, this can be used to change the sliders)
        </ListItem>
        <ListItem data-cy='list-item'>
          Look around by clicking & dragging the space behind the keyboard
          (holding shift will change your position)
        </ListItem>
        <Link
          to='/synth'
          className='to-synth'
          style={{
            fontFamily: 'Bungee, cursive',
            textDecoration: 'none',
            fontSize: '2em',
            margin: '1em 0',
            background: 'rgba(0, 0, 0, .5)',
            padding: '1em',
            borderRadius: '15px',
            boxShadow: '0px 0px 7px 3px #00000061',
            maxWidth: '25em',
            alignSelf: 'center',
          }}
        >
          Get Down With The Synthness
        </Link>
      </HowTo>
      <Heading2>Contributors:</Heading2>
      <ContributorWrap data-cy='contributors'>
        <Contributor href='https://github.com/mistercanderson' target='_blank'>
          Chris Anderson
        </Contributor>
        <Contributor href='https://github.com/tysnj' target='_blank'>
          Tyson McNutt
        </Contributor>
        <Contributor
          data-cy='contributor'
          href='https://github.com/Patfindley'
          target='_blank'
        >
          Pat Findley
        </Contributor>
      </ContributorWrap>
    </AboutContainer>
  );
};

export default About;
