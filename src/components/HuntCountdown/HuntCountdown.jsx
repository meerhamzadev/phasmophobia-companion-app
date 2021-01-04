import React, { useState, useEffect } from 'react';
import './HuntCountdown.css';

export default function HuntCountdown(){
    const [countdownTrigger, setCountdownTrigger] = useState(false);
    const [timerType, setTimerType] = useState('amateur');
    const [expandedDiv, setExpandedDiv] = useState(true);

    const [totalTime, setTotalTime] = useState(300);
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        countdownTrigger && totalTime > 0 && setTimeout(() => setTotalTime(totalTime - 1), 1000);

        let minutesResult = (Math.floor(totalTime / 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        let secondsResult = ((totalTime % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}))

        setMinutes(minutesResult);
        setSeconds(secondsResult);
    }, [totalTime, countdownTrigger]);

    const handleCountdown = () => {
        setCountdownTrigger(!countdownTrigger);

        let timerReset = timerType === 'amateur' ? 300 : 150;
        setTotalTime(timerReset);
    }

    const handleView = () => {
        setExpandedDiv(!expandedDiv)
    }

    const handleTypeSwitch = () => {
        setCountdownTrigger(false)

        if(timerType === "amateur"){
            setTimerType('intermediate');
            setTotalTime(150);
        } else {
            setTimerType('amateur');
            setTotalTime(300);
        }
    }

    const countdownButtonText = countdownTrigger ? "Stop and reset" : "Start";
    const timerTypeSwitch = timerType === 'amateur' ? "Switch to Intermediate" : "Switch to Amateur";

    const fullView = (
        <div className={'countdown-container-expanded'}>
            <button className={"minimize"} onClick={handleView}>_</button>

            <h2>
                Setup Time
            </h2>
            <span className={"countdown-description"}>
                Alpha Stage
            </span>

            <p />

            <span className={"time"}>
               {minutes} : {seconds}
            </span>

            <p/>

            <button className={'countdown-trigger'} onClick={handleCountdown}>
                {countdownButtonText}
            </button>

            <button className={"timer-type-switch"} onClick={handleTypeSwitch}>{timerTypeSwitch}</button>
            <p />

            <span className={"countdown-description"}>Timer may look glitched at times,</span>
            <span className={"countdown-description"}>but starting over will correct it</span>
        </div>
    );

    const compactView = (
        <div className={'countdown-container-compact'} onClick={setExpandedDiv}>
            <span className={"time-spin"}>
               {minutes} : {seconds}
            </span>
        </div>
    );

    return expandedDiv ? fullView : compactView
}
