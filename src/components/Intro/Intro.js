import React from 'react';
import style from './Intro.module.css';
const Intro = () => {
    return <div className={style['intro-title']}>
        <h1>Escape Room</h1>
        <p>Try to get out of the castle, find all the hidden clues!</p>
    </div>;
}
 
export default Intro;