import React from 'react';

export default function Zodiac({ name, dates }) {
  return (
    <div className='zodiac'>
      <img alt={name} src={`${process.env.PUBLIC_URL}/zodiacs/${name}.png`}/>
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  );
}