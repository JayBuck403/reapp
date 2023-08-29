const SecNavbar = () => {
	return (
		<div className="sec-nav-container">
			<form className="filter-box-form">
				<select className="type-select-box">
					<option value="">All Properties</option>
					<option value="">Apartment</option>
					<option value="">Commercial Space</option>
					<option value="">House</option>
					<option value="">Land</option>
					<option value="">Office Space</option>
					<option value="">Warehouse</option>
				</select>
				<select className="filter-select-box">
                                	<option value="">Filter</option>
                                	<option value="">Selling</option>
                                	<option value="">Renting</option>
                        	</select>
				<select className="sort-select-box">
                                	<option value="">Sort</option>
                                	<option value="">Newer</option>
                            		<option value="">Older</option>
                                	<option value="">Lower Price</option>
					<option value="">Higher Price</option>
                	        </select>
				<div className="input-box">
					<input type='text' required={true} spellCheck={false} />
                        		<span>Search location</span>
				</div>
			</form>
			<button className="search-button">Search</button>
		</div>	
	);
}

export default SecNavbar;
