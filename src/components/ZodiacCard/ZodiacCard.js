import React from 'react';

export default function Zodiac({ name, dates }) {
  return (
    <div className='zodiac'>
      <img alt={name} src={`${process.env.PUBLIC_URL}/zodiacsigns/${name}.png`}/>
      <h1 className="name">{name}</h1>
      <span>{dates}</span>
    </div>
  );
}