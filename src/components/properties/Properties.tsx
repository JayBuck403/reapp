import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import useProperties from "../../hooks/useProperties";


const Properties = () => {
	const {properties, error} = useProperties();
	return (
		<>
		{error && <p>{error}</p>}
		<ul>
			{properties.map(property => <li key={property._id}>{property.title}</li>)}
		</ul>
		</>
	);
}

export default Properties;
