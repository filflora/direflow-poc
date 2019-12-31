import React, { FC, useContext } from 'react';
import { EventContext, Styled } from 'direflow-component';
import styles from './hello-world.css';


interface IUser {
  name: string;
}

interface IProps {
  limit: number;
  user: IUser;
}

const HelloWorld: FC<IProps> = (props) => {
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    const event = new CustomEvent('my-event', { detail: 123 });
    dispatch(event);
  };

  return (
    <Styled styles={styles}>
      <div className='app'>
        Hello world of Direflow!
        <br/>
        This is a number to be changed from parent: {props.limit}.
        <br/>
        <button className='button' onClick={handleClick}>
          Say hello to {props?.user?.name}
        </button>
      </div>
    </Styled>
  );
};

export default HelloWorld;
