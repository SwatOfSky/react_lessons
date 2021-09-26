import React, { useState } from "react"
import './header.css'
import './Login'
import Login from "./Login";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Clock from "./Clock";

const App = function (){
    const [isLoggin, setIsLoggin] = useState(true);

    const ToggleLogin = () => {
        setIsLoggin(!isLoggin)
    };

    return<>
        <Loggin isLoggin={isLoggin} onLogOut={ToggleLogin} />
        <button onClick={ToggleLogin} >войти</button>
    </>
        }

        function Loggin ({isLoggin, onLogOut}) {
    return(
        <div>
            { isLoggin ? (<SignIn onClick={onLogOut}> </SignIn> ) :<SignOut /> }
        </div>
    )
        }

export default function Header() {
    return <div className='header'>
        <div className='logo'><div className="circle" />
        Booking</div>
       <div className='buttons'> <button className='buttons_inside'>ABOUT</button><span>  </span>
        <button className='buttons_inside'>MY BOOKING</button><span>  </span>
        <button className='buttons_inside'>SIGN IN</button>
       </div>
        <button><App className="buttons_inside" /></button>
    </div>
}