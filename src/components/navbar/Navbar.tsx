import "./navbar.css";
import Logo from "../logo/Logo";
import Button from "../Button";

const Navbar = () => {
	return (
		<div className="nav-container">
			<span><Logo /></span>
			<div className="nav-buttons">
				<Button>Register</Button>
				<Button>Login</Button>
			</div>
		</div>
	);
}

export default Navbar;
