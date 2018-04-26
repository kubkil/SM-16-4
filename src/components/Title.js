import React from 'react';
import style from '../../styles/Title.css';

// props w nawiasie? chyba bez różnicy
const Title = props => (
  <h1 className={style.appTitle}>{props.title}
    <p className={style.appNumberOfTasks}>Ilość zadań to: {props.numberoftasks}</p>
  </h1>
)

export default Title;