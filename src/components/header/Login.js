import SignIn from "./SignIn";
import SignOut from "./SignOut";


function Login({isLoggin}){
    return(
        <div className="login">
            {isLoggin ? <SignIn /> : <SignOut /> }
        </div>
    );
}

export default Login;