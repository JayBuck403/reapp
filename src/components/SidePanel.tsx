import { useState } from "react"
import Companies from "./Companies";
import { Company } from "../hooks/useCompanies";


const SidePanel = () => {
	const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);	

	return (
		<div className="side-container">
			<Companies onSelectCompany={(company) => setSelectedCompany}/>
		</div>
	);
}

export default SidePanel;
