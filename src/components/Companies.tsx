import useCompanies, { Company } from "../hooks/useCompanies";
import { Link } from "react-router-dom";


interface Props {
	onSelectCompany: (company: Company) => void;
}

const Companies = ({ onSelectCompany }: Props) => {
	const {data: companies, error} = useCompanies();
	
	return (
		<>
                {error && <p>{error}</p>}
			<ul>
                        {companies.map(company => 
				<Link to="" key={company._id}>
					<li className="company-list"onClick={() => onSelectCompany(company)} >
						<img src={company.companyLogo} />
						{company.companyName}
					</li>
				</Link>)}
			</ul>
                </>
	);
}

export default Companies;
