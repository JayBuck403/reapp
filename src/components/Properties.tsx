import useProperties from "../hooks/useProperties";
import { ImPriceTag, ImLocation } from "react-icons/im";
import { FaBath, FaBed } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { Company } from "../hooks/useCompanies";

interface Props {
  selectedCompany: Company | null;
}

const Properties = ({selectedCompany}: Props) => {
	const {data: properties, error} = useProperties(selectedCompany);

	return (
		<>
		{error && <p>{error}</p>}
			{properties.map(property => 
				<Link to={`/properties/${property._id}`} key={property._id}><div className="card-container">
					<div className="image-container">
						<img src={property.propertyThumbnailUrl} />
						<div className="verified-tag">
                       					 <p>Shelter Mart</p>
                        				<span className="verified-icon"><MdVerified color="white" size={15}/></span>
                				</div>
					</div>
					<div className="card-body">
						<div className="title-box">
							<p>{property.title}</p>
						</div>
						<div className="price-box">
							<span className="price-icon"><ImPriceTag /></span><span><p>{property.currency} {property.price}</p></span>
						</div>
						<div className="utilities-box">
							<span className="bed-icon"><FaBed size={17}/></span><span>{property.bedrooms}</span>
							<span className="icon bath-icon"><FaBath /></span><span>{property.baths}</span>
						</div>
						<div className="location-box">
							<span className="location-icon"><ImLocation /></span><span>{property.propertyLocation}</span>
						</div>
					</div>
				</div></Link>
			)}
		</>
	);
}

export default Properties;
