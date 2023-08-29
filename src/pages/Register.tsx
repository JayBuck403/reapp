const Register = () => {
	return (
		<div className="register-page-container">
			<div className="quotes-column"></div>
			<div className="register-form-column">
				<div>
					<h1>Create an account</h1>
				</div>
				<form className="register-box">
					<div className="register-input-box"><input type="text" /><span>Name</span></div>
					<div className="register-input-box"><input type="text" /><span>Email</span></div>
					<div className="register-input-box"><input type="password" /><span>Password</span></div>
					<div className="register-input-box"><input type="password" /><span>Confirm Password</span></div>
					<div className="register-input-box"><input type="tel" /><span>Phone</span></div>
				</form>
			</div>
		</div>
	);
}

export default Register;
