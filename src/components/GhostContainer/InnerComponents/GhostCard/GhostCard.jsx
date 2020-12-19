import React from 'react';
import './GhostCard.css';

// Ghost Pictures
import spirit from '../../../../images/ghosts/0.png';
import wraith from '../../../../images/ghosts/1.png';
import banshee from '../../../../images/ghosts/2.png';
import demon from '../../../../images/ghosts/3.png';
import jinn from '../../../../images/ghosts/4.png';
import mare from '../../../../images/ghosts/5.png';
import oni from '../../../../images/ghosts/6.png';
import phantom from '../../../../images/ghosts/7.png';
import poltergeist from '../../../../images/ghosts/8.png';
import revenant from '../../../../images/ghosts/9.png';
import shade from '../../../../images/ghosts/10.png';
import yurei from '../../../../images/ghosts/11.png';

export default function GhostCard(props){
    console.log(props)

    return(
        <div className={props.cardType}>
            <div className={"ghost-name"}>
                {props.ghostType}
            </div>
            <div className={"ghost-picture"}>
                <img src={spirit} />
            </div>
        </div>
    )
}
