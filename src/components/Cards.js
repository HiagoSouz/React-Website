import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our BLOG!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Blood Moon will appear next week: Check out our tips'
              label='Eclipse'
              path='/blog'
            />
            <CardItem
              src='images/img-2.jpg'
              text="The Pillars of Creation no longer exist: we explain"
              label='Curiosity'
              path='/blog'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Thinking about buying your first telescope? We can help you!'
              label='Telescopes'
              path='/blog'
            />
            
            <CardItem
              src='images/img-8.jpg'
              text='Three Years without Cassini. See our favorite photos. '
              label='Saturn'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
