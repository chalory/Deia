import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./Landing.styles.scss";

const Landing = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="landing">
            <div className="page-bg"></div>

            <div className="animation-wrapper">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>

            <div className="accessibility">
                <span>a</span>
                <span>c</span>
                <span>c</span>
                <span>e</span>
                <span>s</span>
                <span>s</span>
                <span>i</span>
                <span>b</span>
                <span>i</span>
                <span>l</span>
                <span>i</span>
                <span>t</span>
                <span>y</span>
            </div>

            <div className="name">
                <span className="name__with">with</span>
                <h1>Deia</h1>
                {/* <button className="login-btn" onClick={() => loginWithRedirect()}>
                    Log In
                </button> */}
            </div>
        </div>
    );
};

export default Landing;
