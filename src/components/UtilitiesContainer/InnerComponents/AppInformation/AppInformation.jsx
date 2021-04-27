import React from 'react';
import './AppInformation.css';

// Icons
import gitHub from '../../../../images/informational-icons/github.png';
import feedback from '../../../../images/informational-icons/feedback.png';
import roadmap from '../../../../images/informational-icons/roadmap.png';
import linkedIn from '../../../../images/informational-icons/linkedin.png';

export default function AppInformation(){
    return(
        <div className={"app-information"}>
            <div className={"textual-information"}>
                <h4>From the community, for the community</h4>

                This app has been made with a single goal in mind: <b>help the players out.</b>
                <p/>
                It is focused on fast release and usability in the medium the game is played: PC screens. It is not optimized for mobile usage, but any help in progressing in this field is welcomed.
                <p/>
                It has been developed with React.js and has an <b>open-source code</b> to which any developer can contribute.
                <p/>
                It will <b>never be monetized</b> or gather any user information other than interaction to see which features are used the most.
            </div>
            <div className={"icon-container"}>
                <div className={"icon"}>
                    <a href={"https://forms.gle/Un9qxqTsjdw9xu67A"} target={"_blank"}>
                        <img src={feedback} alt={"feedback"} className={"icon-image"} />
                        <span className={"icon-description"}>Give me feedback!</span>
                    </a>
                </div>
                <div className={"icon"}>
                    <a href={"https://github.com/RCastilho91/phasmophobia-companion-app/projects/1"} target={"_blank"}>
                        <img src={roadmap} alt={"feedback"} className={"icon-image"} />
                        <span className={"icon-description"}>Check out the development roadmap!</span>
                    </a>
                </div>
                <div className={"icon"}>
                    <a href={"https://github.com/RCastilho91/phasmophobia-companion-app"} target={"_blank"}>
                        <img src={gitHub} alt={"feedback"} className={"icon-image"} />
                        <span className={"icon-description"}>Contribute to the project!</span>
                    </a>
                </div>
                <div className={"icon"}>
                    <a href={"https://www.linkedin.com/in/rmcastilho/"} target={"_blank"}>
                        <img src={linkedIn} alt={"feedback"} className={"icon-image"} />
                        <span className={"icon-description"}>Meet the project maker!</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
