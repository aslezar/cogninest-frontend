import React from "react";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import ShortListCV from "./components/ShortListCV";
import Sidebar from "./components/Sidebar";
import TransactionHistory from "./components/TransactionHistory";
import { MenuItem, menuItems } from "./config/menu-items";

const App = () => {
	const [selected, setSelected] = React.useState<MenuItem>(menuItems[1]);
	return (
		<div className="flex min-h-screen bg-gray-100">
			<Sidebar selected={selected} setSelected={setSelected} />
			<div className="flex-1 p-12">
				<Header />
				{
					{
						"search-cv": <ErrorPage />,
						"shortlisted-cv": <ShortListCV />,
						"transaction-history": <TransactionHistory />,
						"search-history": <ErrorPage />,
						profile: <ErrorPage />,
						settings: <ErrorPage />,
					}[selected.key]
				}
			</div>
		</div>
	);
};

export default App;
