import React from 'react';

export default function Navigation(props){
    return(
        <div className={"navigation"}>
            <nav>
                <ul className={"navigation-menu"}>
                    <button className={"navigation-active"}>Home</button>
                    <button className={"navigation-inactive"}>Feedback & App Information</button>
                </ul>
            </nav>
        </div>
    )
}
