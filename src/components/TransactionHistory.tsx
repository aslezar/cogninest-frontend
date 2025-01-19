import { Ellipsis } from "lucide-react";
import { Fragment } from "react";
const TransactionHistory = () => {
	const transactions = [
		{
			invoice: "INV-01-09072010",
			status: "Completed",
			credits: 1200,
			amount: 240,
		},
		{
			invoice: "INV-01-09072011",
			status: "Completed",
			credits: 2400,
			amount: 240,
		},
		{
			invoice: "INV-01-09072012",
			status: "Completed",
			credits: 120,
			amount: 240,
		},
		{
			invoice: "INV-01-09072013",
			status: "Completed",
			credits: 4000,
			amount: 500,
		},
		{
			invoice: "INV-01-09072014",
			status: "Completed",
			credits: 350,
			amount: 240,
		},
		{
			invoice: "INV-01-09072015",
			status: "Completed",
			credits: 600,
			amount: 240,
		},
	];

	return (
		<div className="p-4 md:p-6">
			<h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
				Credits Purchase History
			</h1>
			<div className="space-y-4 bg-white rounded-md p-2 md:p-4 font-semibold">
				<div
					className="hidden md:grid items-center"
					style={{ gridTemplateColumns: "48px 1fr 1fr 1fr 1fr 48px" }}
				>
					<div className="px-4">
						<input type="checkbox" className="w-5 h-5 accent-blue-600" />
					</div>
					<div className="font-bold">Invoice</div>
					<div className="font-bold">Status</div>
					<div className="font-bold">Credits</div>
					<div className="font-bold">Amount</div>
					<div></div>
				</div>
				<hr className="hidden md:block" />
				{transactions.map((transaction, index) => (
					<Fragment key={index}>
						<div className="md:hidden space-y-2 p-3 rounded-lg border">
							<div className="flex justify-between items-center">
								<div className="font-bold">{transaction.invoice}</div>
								<Ellipsis className="cursor-pointer" />
							</div>
							<div className="flex justify-between">
								<span className="text-gray-600">Status:</span>
								<div className="text-green-500 flex items-center gap-2">
									<div className="w-2 h-2 rounded-full bg-green-500"></div>
									{transaction.status}
								</div>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-600">Credits:</span>
								<div>{transaction.credits}</div>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-600">Amount:</span>
								<div>${transaction.amount}</div>
							</div>
						</div>
						<div
							className="hidden md:grid items-center"
							style={{ gridTemplateColumns: "48px 1fr 1fr 1fr 1fr 48px" }}
						>
							<div className="px-4">
								<input type="checkbox" className="w-5 h-5 accent-blue-600" />
							</div>
							<div>{transaction.invoice}</div>
							<div className="text-green-500 flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-green-500"></div>
								{transaction.status}
							</div>
							<div>{transaction.credits}</div>
							<div>${transaction.amount}</div>
							<div className="flex justify-end px-4">
								<Ellipsis className="cursor-pointer" />
							</div>
						</div>
						<hr className="hidden md:block" />
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default TransactionHistory;
