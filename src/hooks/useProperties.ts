import useData from "./useData";
import { Company } from "./useCompanies";

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
}

const useProperties = (selectedCompany: Company | null) => useData<Property>("/properties", { params: { company: selectedCompany?._id }}, [selectedCompany?._id])

export default useProperties;
