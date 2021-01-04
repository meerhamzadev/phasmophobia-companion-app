import React, { useState, useEffect } from 'react';
import './HuntCountdown.css';

export default function HuntCountdown(){
    const [countdownTrigger, setCountdownTrigger] = useState(false);
    const [timerType, setTimerType] = useState('amateur');
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

    return(
        <div className={'countdown-container'}>
            <h2>
                Setup Time
            </h2>

            <span className={"time"}>
               {minutes} : {seconds}
            </span>

            <p/>

            <button className={'countdown-trigger'} onClick={handleCountdown}>
                {countdownButtonText}
            </button>

            <button className={"timer-type-switch"} onClick={handleTypeSwitch}>{timerTypeSwitch}</button>
        </div>
    )
}
