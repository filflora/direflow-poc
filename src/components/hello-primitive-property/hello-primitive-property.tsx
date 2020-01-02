import React, { FC } from 'react';
import { Styled } from 'direflow-component';
import styles from './hello-primitive-property.css';

interface IProps {
  userName: string;
  age: number;
  isMarried: boolean;
}

const HelloPrimitiveProperty: FC<IProps> = (props) => {

  console.log('Primitive property rerender', props);

  return (
    <Styled styles={styles}>
      <div className='app'>
        Hello world of Direflow!
        <br/>

        <h2>User data:</h2>

        <ul>
          <li><b>Name:</b> {props.userName}</li>
          <li><b>Age:</b> {props.age}</li>
          <li><b>Married:</b> {String(props.isMarried)}</li>
        </ul>
      </div>
    </Styled>
  );
};

export default HelloPrimitiveProperty;
