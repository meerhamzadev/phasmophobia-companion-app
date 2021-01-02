import React from 'react';

// icons
import gitHub from '../../images/contact-icons/github.png';
import feedback from '../../images/contact-icons/feedback.png';

export default function DevelopmentInformation(props){
    return(
        <div className={"important-information-container"}>
            <div className={"important-information-bubble"}>
                <h2>This application is in Alpha stage</h2>

                <div className={"contact-information"}>
                    <div className={"contact-bubble"}>
                        <div className={"contact-logo"}>
                            <img
                                src={gitHub}
                                className={"contact-icon"}
                                alt={"Project on GitHub"}
                                title={"See the project on GitHub!"}
                            />
                        </div>
                        <div className={"contact-information"}>
                            Help me develop the application!
                        </div>
                    </div>

                    <div className={"contact-bubble"}>
                        <div className={"contact-logo"}>
                            <img
                                src={feedback}
                                className={"contact-icon"}
                                alt={"Send feedback on the application"}
                                title={"Send me some feedback on the application!"}
                            />
                        </div>
                        <div className={"contact-information"}>
                            Send me some feedback!
                        </div>
                    </div>
                </div>

                <div className={"development-information"}>
                    <h3>About</h3>

                    This is a fan-made application with no relation to the game development team.
                    <p />
                    This focuses on helping ghost hunters get the information they need by making it readily available in manners that the current in-game journal does not.

                    <h3>What's coming up</h3>

                    <ul className={"development-list"}>
                        <li className={"development-item"}>
                            A fully responsive, mobile-friendly application
                        </li>
                        <li className={"development-item"}>
                            Smaller evidence menu you'll be able to toggle and see only what matters to you: the ghosts!
                        </li>
                        <li className={"development-item"}>
                            Clicking on the ghost cards will expand them to show you more about each one.
                        </li>
                        <li className={"development-item"}>
                            A section with important information on the existing equipment and how to use them.
                        </li>
                        <li className={"development-item"}>
                            A section with important information on the possible evidence and how to get them.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
