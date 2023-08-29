import SidePanel from "./SidePanel";
import Properties from "./Properties";
import { useState } from "react";
import { Company } from "../hooks/useCompanies";

const MainPanel = () => {
	const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
	return (
		<main>
		<SidePanel />
		<div className="main-container">
			<Properties selectedCompany={selectedCompany}/>
		</div>
		</main>
	);
}

export default MainPanel;
