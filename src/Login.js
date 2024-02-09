import React, { useState } from "react";
import App from './App';


export default function Login() {
    const [isVerified, setIsVerified] = useState(false);

    const checkPw = () => {
        // gets the current input value
        const answer = document.getElementById("password").value;

        if (answer === "paco y jerry") {
            setIsVerified(true);
        } else {
            alert("Sorry, that's not it");
        }
    };

    return (
        <>
            {isVerified ? 
                <App /> :
                (
                    <div className="loginBackground">
                        <div className = "loginRow">
                            <h3 style={{color:'white', margin:'10pt'}}>Please Enter the Password: </h3>
                            <form onSubmit={checkPw}>
                                <input id="password" name="password"/>
                                <button className="loginButton">Open Sesame</button>
                            </form>
                        </div>
                    </div>
                )
            }
        </>

    );
}