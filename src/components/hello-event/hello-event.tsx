import React, { FC, useContext } from 'react';
import { EventContext, Styled } from 'direflow-component';
import styles from './hello-event.css';

interface IUser {
    name: string;
}

interface IProps {
    limit: number;
    user: IUser;
}

const HelloEvent: FC<IProps> = (props) => {
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
                <button className='button' onClick={handleClick}>Dispatch event</button>
            </div>
        </Styled>
    );
};

export default HelloEvent;
