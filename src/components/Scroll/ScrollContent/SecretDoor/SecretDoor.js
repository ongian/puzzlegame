import React from 'react';
import Brick from '../../../../image/brick-keyhole.png';
import style from './SecretDoor.module.css';
const SecretDoor = (props) => {
    return <div className={style.SecretDoor}>
        <p>{props.message}</p>
        <div className={style.brick}>
            <img src={Brick} alt="Brick with keyhole" />
        </div>
    </div>;
}
 
export default SecretDoor;