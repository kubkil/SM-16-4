import React from 'react';
import style from '../../styles/Title.css';

// nazwa zmiennej z dużej, małej?
// const Title = props => <h1 className={style.appTitle}>{props.title}</h1>


const Title = ({title, numberOfTasks}) => (
  <h1 className={style.appTitle}>{props.title}>
    <p className={style.appNumberOfTasks}>{props.appNumberOfTasks}</p>
  </h1>
)

export default 'Title';