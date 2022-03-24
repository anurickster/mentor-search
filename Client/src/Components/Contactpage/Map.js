import React from 'react';
import styled from 'styled-components';
import MapImg from './Imges/Pune.jpg';
import PText from './PText';
// import Footer from '../Footerpage/Footer';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;

  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: #c0c0c0;
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className='container'>
        <div className='map__card'>
          <h3 className='map__card__heading'>Here we are</h3>
          <PText> Pune, Maharashtra </PText>
          <a
            className='map__card__link'
            href='https://www.google.com/maps/place/Pune+International+Airport+Area,+Lohegaon,+Pune,+Maharashtra/@18.5782028,73.9102148,14z/data=!3m1!4b1!4m12!1m6!3m5!1s0x3bc2c134e6c4ff8f:0xa810745cf9310798!2sPune+International+Airport!8m2!3d18.579343!4d73.9089168!3m4!1s0x3bc2c153b1524207:0x2d9bce408a8c8746!8m2!3d18.5775875!4d73.9418614'
            target='_blank'
            rel='noreferrer'
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
