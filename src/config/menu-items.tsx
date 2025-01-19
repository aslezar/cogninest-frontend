import {
	Clock,
	Layers,
	LayoutGrid,
	LogOut,
	Search,
	Settings,
	User
} from "lucide-react";

export interface MenuItem {
	key: string;
	icon: React.ReactNode;
	text: string;
	location: "upper" | "lower";
}

export const menuItems: MenuItem[] = [
	{
		key: "search-cv",
		icon: <LayoutGrid size={20} />,
		text: "Search CV",
		location: "upper",
	},
	{
		key: "shortlisted-cv",
		icon: <Layers size={20} />,
		text: "Shortlisted CV",
		location: "upper",
	},
	{
		key: "transaction-history",
		icon: <Clock size={20} />,
		text: "Transaction History",
		location: "upper",
	},
	{
		key: "search-history",
		icon: <Search size={20} />,
		text: "Search History",
		location: "upper",
	},
	{
		key: "profile",
		icon: <User size={20} />,
		text: "Profile",
		location: "upper",
	},
	{
		key: "settings",
		icon: <Settings size={20} />,
		text: "Settings",
		location: "lower",
	},
	{
		key: "signout",
		icon: <LogOut size={20} />,
		text: "Sign Out",
		location: "lower",
	},
];
