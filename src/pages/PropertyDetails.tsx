import { useParams } from "react-router-dom";
import useData from "../hooks/useData";
import Navbar from "../components/Navbar";
import { ImPriceTag } from "react-icons/im";
import { LuBedDouble, LuBath } from "react-icons/lu";
import { BsEye, BsTextarea } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

interface Property {
        _id: string;
        title: string;
        propertyThumbnailUrl: string;
        price: string;
        currency: string;
        bedrooms: number;
        baths: number;
        propertyLocation: string;
        company: string;
		description: string;
		area: string;
}


const PropertyDetails = (property: Property) => {
	
	const { _id } = useParams();
	const { error } = useData<Property>("/properties/" + _id);

	return (
		<div>
			<Navbar />
			<div className="property-details-container">
				<div className="property-details">
					<img className="details-image" src={property.propertyThumbnailUrl} />
					<div className="details-box">
						<div className="main-details-box">
							<div className="details-title-box">
								<div className="details-title-row">
									<p className="details-title">{property.title}</p>
								</div>
								<div className="details-location-box">
								<span className="details-location-icon"><GrLocation /></span><p className="details-location">{property.propertyLocation}</p>
								</div>
							</div>
							<div className="details-description-box">
								<p className="details-description">{property.description}</p>
							</div>
						</div>
						<div className="side-details-box">
							<div className="brief-info-box">
								<p className="brief-info">Brief Information</p>
								<div className="details-company-name"><p><strong>Owner:</strong> Shelter Mart</p><span className="details-verified-icon"><MdVerified size={18}/></span></div>
							</div>
							<div className="facilities-box">
								<div className="details-bedroom"><span><LuBedDouble size={20}/></span><p>{property.bedrooms}</p></div>
								<div className="details-bathroom"><span><LuBath size={20}/></span><p>{property.baths}</p></div>
								<div className="details-area"><span><BsTextarea size={20}/></span><p>{property.area} sqft</p></div>
							</div>
							<div className="details-price-box"><span><ImPriceTag /></span><p className="details-price">{property.currency} {property.price}</p></div>
							<button>Contact</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PropertyDetails;
