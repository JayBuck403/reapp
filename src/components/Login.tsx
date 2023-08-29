import { Link } from "react-router-dom";
import Logo from "./Logo";
import { BsFacebook, BsTwitter, BsGoogle} from "react-icons/bs";

const Login = () => {
	return (
		<div className="login-body">
			<form className="login-box">
				<Logo />
				<div className="login-input-box">
					<input type='text' required={true} spellCheck={false} />
					<span>Email</span>
				</div>
				<div className="login-input-box">
                        		<input type="password" required={true} />
                        		<span>Password</span>
                		</div>
				<div className="forgotten-password-box">
					<Link to="/recover_password"><p className="forgotten-password">Forgotten password?</p></Link>
				</div>
			</form>
			<button className="log-in-button">Login</button>
			<div className="social-login-box">
				<p>or login with</p>
				<div>
					<Link to="/google_login"><span className="social-login"><BsGoogle /></span></Link>
					<Link to="facebook_login"><span className="social-login"><BsFacebook /></span></Link>
					<Link to="twitter_login"><span className="social-login"><BsTwitter /></span></Link>
				</div>
			</div>
		</div>
	);
}

export default Login;
