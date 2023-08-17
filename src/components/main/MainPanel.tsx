import "./main.css";
import SidePanel from "./side/SidePanel";
import Properties from "../properties/Properties";

const MainPanel = () => {
	return (
		<main>
		<SidePanel />
		<div className="main-container">
			<Properties />
		</div>
		</main>
	);
}

export default MainPanel;
