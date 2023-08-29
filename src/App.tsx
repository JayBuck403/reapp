import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./pages/Register";
import Homepage from "./components/Homepage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetails from "./pages/PropertyDetails";


function App() {
  return (
	<div className="App">
	<Routes>
		<Route path="/" element={<Homepage />} />
     	<Route path="/properties" element={<PropertiesPage />} />
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/properties/:_id" element={<PropertyDetails />} />
	</Routes>
	</div>
  );
}

export default App;
