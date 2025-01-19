import { Menu } from "lucide-react";
import { useState } from "react";
import Aicvlogo from "../assets/Aicvlogo.png";
import { MenuItem, menuItems } from "../config/menu-items";

interface SidebarProps {
	selected: MenuItem;
	setSelected: (selected: MenuItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selected, setSelected }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<button
				onClick={toggleMobileMenu}
				className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-lg bg-white shadow-md"
			>
				<Menu className="w-6 h-6" />
			</button>

			{isMobileMenuOpen && (
				<div
					className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
					onClick={() => setIsMobileMenuOpen(false)}
				/>
			)}

			<div
				className={`fixed lg:static w-80 min-h-screen bg-white p-6 flex flex-col border-r border-gray-200 z-40 transition-transform duration-300 ease-in-out ${
					isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0`}
			>
				<div className="flex items-center mb-8">
					<div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-2">
						<img src={Aicvlogo} alt="AI CV" />
					</div>
					<span className="text-xl font-semibold">AI CV</span>
				</div>

				<nav className="flex-1">
					<div className="space-y-1">
						{menuItems
							.filter((i) => i.location === "upper")
							.map((item) => (
								<div
									onClick={() => setSelected(item)}
									className="flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-150 relative"
								>
									<div
										className={`w-5 h-5 mr-3 ${
											item === selected ? "text-blue-500" : "text-gray-400"
										}`}
									>
										{item.icon}
									</div>
									<span
										className={`${
											item === selected
												? "text-blue-500 font-bold"
												: "text-gray-500"
										}`}
									>
										{item.text}
									</span>
									{item === selected && (
										<div className="absolute right-0 top-0 h-full w-1 bg-blue-500 rounded-l"></div>
									)}
								</div>
							))}
					</div>
				</nav>

				<div className="mt-auto space-y-1">
					{menuItems
						.filter((i) => i.location === "lower")
						.map((item, index) => (
							<div
								key={index}
								onClick={() => setSelected(item)}
								className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-150
                ${
									item === selected
										? "bg-blue-50 text-blue-600"
										: "text-gray-600 hover:bg-gray-50"
								}`}
							>
								<div className="w-5 h-5 mr-3">{item.icon}</div>
								<span className={item === selected ? "font-medium" : ""}>
									{item.text}
								</span>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default Sidebar;
