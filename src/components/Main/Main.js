import React from 'react';
import './Main.css';
import '../Footer/Footer.css';
import '../Header/Header.css';
import '../ZodiacCard/ZodiacCard.css';

import background from './background.png';
import Zodiac from '../ZodiacCard/ZodiacCard.js';
import { zodiacs } from '../../data.js';

export default function Main() {
  return (
    <div className="main" style={{ backgroundImage: `url(${ background })` }}>
      <main />
      {zodiacs.map ((data) => (<Zodiac key={data.name} {...data}/>))}
    </div>
  );
}