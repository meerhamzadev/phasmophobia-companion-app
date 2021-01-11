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
        if(countdownTrigger && totalTime > 0){
            timer(totalTime);
        }

        handleTime(totalTime);
    }, [totalTime, countdownTrigger, minutes, seconds]);

    const handleCountdown = () => {
        setCountdownTrigger(!countdownTrigger);

        let time = timerType === 'amateur' ? 300 : 150;
        handleTime(time);
    }

    const timer = (time) => {
        setTimeout(() => setTotalTime(time - 1), 1000)
    }

    const handleView = () => {
        setExpandedDiv(!expandedDiv)
    }

    const handleTypeSwitch = () => {
        setCountdownTrigger(false)

        if(timerType === "amateur"){
            setTimerType('intermediate');
            handleTime(150);
        } else {
            setTimerType('amateur');
            handleTime(300);
        }
    }

    const handleTime = (time) => {

        const standardMinutes = timerType === 'amateur' ? 5 : 2;
        const standardSeconds = timerType === 'amateur' ? 0 : 30;

        const minutesResult = countdownTrigger
            ? (Math.floor(time / 60))
            : standardMinutes
        const secondsResult = countdownTrigger
            ? time % 60
            : standardSeconds

        setTotalTime(time);
        setMinutes(minutesResult.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
        setSeconds(secondsResult.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
    }

    const countdownButtonText = countdownTrigger ? "Stop and reset" : "Start";
    const timerTypeSwitch = timerType === 'amateur' ? "Switch to Intermediate" : "Switch to Amateur";

    const fullView = (
        <div className={'countdown-container-expanded'}>
            <button className={"minimize"} onClick={handleView}>_</button>

            <h2>
                Setup Time
            </h2>

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
