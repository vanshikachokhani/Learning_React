import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { withRouter } from "react-router";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Writings!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              id='cardId1'
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle Amazon Jungle caught wild fires in year 2020 '
              title='Amazon Forests'
              label='Adventure'
              path='/read'
            />
            <CardItem
              id='cardId2'
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise '
              label='Luxury'
              path='/read'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
            id='cardId3'
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/read'
            />
            <CardItem
            id='cardId4'
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/read'
            />
            <CardItem
            id='cardId5'
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/read'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
