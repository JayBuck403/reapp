import Logo from "./Logo";
import { Link } from "react-router-dom";


const Navbar = () => {
	return (
		<div className="nav-container">
			<span><Logo /></span>
			<div className="nav-buttons">
				<Link to="/register"><button className="register-button">Register</button></Link>
				<Link to="/login"><button className="login-button">Login</button></Link>
			</div>
		</div>
	);
}

export default Navbar;
