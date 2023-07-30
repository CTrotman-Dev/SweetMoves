import React, { useRef, useState } from "react";
import useScript from "./useScript";


const GoogleLogin = () => {
    let text = "signin_with";
    const data = localStorage.getItem('loginData');
    const [loginData, setLoginData] = useState(
        data ? JSON.parse(data) : null
    );

    function logoutClick() {
        window.google.accounts.id.disableAutoSelect();
        localStorage.removeItem('loginData');
        setLoginData(null);
    }

    async function onGoogleSignIn(googleData) {
        const res = await fetch('/api/auth/google', {
            method: 'POST',
            body: JSON.stringify({
                tokenId: googleData.credential,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
    }
    const googleSignInButton = useRef(null);

    useScript("https://accounts.google.com/gsi/client", () => {
        if (!loginData) {
            window.google.accounts.id.initialize({
                client_id: process.env.REACT_APP_CLIENT_ID,
                callback: onGoogleSignIn,
                ux_mode: "popup"
            });

            window.google.accounts.id.renderButton(
                googleSignInButton.current,
                { type: "icon", shape: "pill", theme: "outline", size: "large", text, width: "250" } // customization attributes
            );
        }


    });


    return (
        <div>
            {loginData ?
                <div>
                    {/* Hello {loginData.googleId} */}
                    {/* <div className="logout" ref={googleSignOutButton}></div> */}
                    <button className="logout-btn btn btn-lg" onClick={logoutClick} >Logout</button>
                </div> :
                <div>

                    <div className="login" ref={googleSignInButton}></div>
                </div>
                }
        </div>
    );
}

export default GoogleLogin;