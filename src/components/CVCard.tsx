const CVCard = ({ photo }: { photo: string }) => (
	<div className="flex items-center justify-between p-4 bg-white rounded-lg mb-3">
		<div className="flex items-center flex-1">
			<input type="checkbox" className="w-5 h-5 mr-4 rounded border-gray-300" />
			<img src={photo} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
			<div className="flex-1">
				<div className="flex items-center">
					<h3 className="font-semibold">John Doe</h3>
					<span className="text-xs text-gray-500 ml-2">UI/UX Developer</span>
				</div>
				<p className="text-sm text-gray-500 mt-1">
					From France, Paris. I have rich experience in web design, also I am
					good at wordpress. I love to talk with you about our unique.
				</p>
			</div>
		</div>

		<div className="flex items-center space-x-4">
			<div>
				<div className="text-sm font-medium mb-1">Skills</div>
				<div className="flex space-x-1">
					{[1, 2, 3, 4, 5].map((_, i) => (
						<div key={i} className="w-4 h-4 rounded-sm bg-blue-500"></div>
					))}
				</div>
			</div>
			<button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
				Download for 30 credits
			</button>
			<button className="p-2">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					className="w-5 h-5"
				>
					<path
						d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
						strokeWidth="2"
					/>
				</svg>
			</button>
		</div>
	</div>
);
export default CVCard;
