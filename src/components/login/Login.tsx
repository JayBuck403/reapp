import "./login.css";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Button from "../Button";
import { BsFacebook, BsTwitter, BsGoogle} from "react-icons/bs";

const Login = () => {
	return (
		<>
			<form className="login-box">
				<Logo />
				<div className="input-box">
					<input type='text' required={true} spellCheck={false} />
					<span>Email</span>
				</div>
				<div className="input-box">
                        		<input type="password" required={true} />
                        		<span>Password</span>
                		</div>
				<div className="forgotten-password-box">
					<Link to="/recover_password"><p className="forgotten-password">Forgotten password?</p></Link>
				</div>
			</form>
			<Button>Login</Button>
			<div className="social-login-box">
				<p>or login with</p>
				<div>
					<Link to="/google_login"><span className="google-login"><BsGoogle /></span></Link>
					<Link to="facebook_login"><span className="facebook-login"><BsFacebook /></span></Link>
					<Link to="twitter_login"><span className="twitter-login"><BsTwitter /></span></Link>
				</div>
			</div>
		</>
	);
}

export default Login;
