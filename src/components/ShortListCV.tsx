import { Download } from "lucide-react";
import Profile1 from "../assets/h1.jpg";
import Profile2 from "../assets/h2.jpg";
import Profile3 from "../assets/h3.jpg";
import Profile4 from "../assets/h4.jpg";
import Profile5 from "../assets/h5.jpg";

const candidates = [
	{
		id: 1,
		name: "John Doe",
		profile: Profile1,
		role: "UI/UX Developer",
		description:
			"I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.",
		skills: [1, 2, 3, 4, 5],
		credits: 30,
	},
	{
		id: 2,
		profile: Profile2,
		name: "John Doe",
		role: "UI/UX Developer",
		description:
			"I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.",
		skills: [1, 2, 3, 4, 5],
		credits: 50,
	},
	{
		id: 3,
		profile: Profile3,
		name: "John Doe",
		role: "UI/UX Developer",
		description:
			"I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.",
		skills: [1, 2, 3, 4, 5],
		credits: 30,
	},
	{
		id: 4,
		profile: Profile4,
		name: "John Doe",
		role: "UI/UX Developer",
		description:
			"I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.",
		skills: [1, 2, 3, 4, 5],
		credits: 15,
	},
	{
		id: 5,
		profile: Profile5,
		name: "John Doe",
		role: "UI/UX Developer",
		description:
			"I have rich experience in web design, also I am good at WordPress. I love to talk with you about our unique.",
		skills: [1, 2, 3, 4, 5],
		credits: 0,
	},
];
const ShortListCV = () => {
	return (
		<>
			<h1 className="text-2xl font-semibold mb-6">Shortlisted CV's</h1>
			<div className="space-y-4">
				{candidates.map((candidate) => (
					<div key={candidate.id} className="flex items-center gap-4">
						<input type="checkbox" className="w-5 h-5 accent-blue-600" />
						<div className="flex flex-col md:flex-row items-start md:items-center w-full p-4 md:p-6 shadow hover:shadow-md rounded-lg gap-4 md:gap-6 transition-all duration-200 bg-white">
							<div className="w-20 md:w-[8%] min-w-[56px] max-w-[80px] flex-shrink-0">
								<img
									src={candidate.profile}
									alt={candidate.name}
									className="w-16 h-16 rounded-lg object-cover shadow-sm"
								/>
							</div>

							<div className="w-full md:w-[15%] min-w-[100px] max-w-full md:max-w-[180px] flex-shrink-0">
								<h2 className="text-lg font-semibold truncate">
									{candidate.name}
								</h2>
								<p className="text-gray-500 text-sm truncate">
									{candidate.role}
								</p>
							</div>

							<div className="w-full md:w-[45%] px-0 md:px-4">
								<p className="text-gray-600 text-sm line-clamp-2 hover:line-clamp-none">
									{candidate.description}
								</p>
							</div>

							<div className="w-full md:w-[17%] min-w-0 md:min-w-[180px] max-w-full md:max-w-[220px] flex-shrink-0">
								<div className="flex items-center gap-2">
									<div className="w-5 h-2.5 bg-blue-700 rounded-full"></div>
									<p className="text-sm font-semibold">Skills</p>
								</div>
								<div className="flex flex-wrap md:flex-nowrap gap-3 mt-2 md:gap-2">
									{candidate.skills.map((_, index) => (
										<div
											key={index}
											className="w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center shrink-0"
										>
											<div className="w-4 h-4 bg-white rounded-sm"></div>
										</div>
									))}
								</div>
							</div>

							<div className="w-full md:w-[15%] min-w-0 md:min-w-[180px] max-w-full md:max-w-[200px] flex-shrink-0">
								<button className="bg-gradient-to-r from-[#0075ff] to-[#0137ff] hover:from-blue-500 hover:to-blue-700 text-white px-4 py-2.5 rounded-lg text-sm w-full flex items-center justify-center gap-2 transition-all duration-200 h-12">
									<Download size={16} />
									{candidate.credits > 0
										? `Download for ${candidate.credits} credits`
										: "Download"}
								</button>
							</div>
							<div className="hidden md:flex w-4 h-4 bg-blue-700 rounded-md items-center justify-center shrink-0">
								<div className="w-2 h-[1px] bg-white rounded-sm"></div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ShortListCV;
