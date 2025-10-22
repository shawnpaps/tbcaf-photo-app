interface VendorsScreenProps {
	onNavigate: (screen: string) => void;
}

const VendorsScreen = ({ onNavigate }: VendorsScreenProps) => {
	const vendors = [
		{
			name: 'Tampa Bay Coffee Roasters',
			specialty: 'Artisan Small-Batch Roasts',
			location: 'South Tampa',
			description: 'Local favorite known for their signature dark roast blends',
		},
		{
			name: 'Sunrise Coffee Co.',
			specialty: 'Cold Brew & Nitro Coffee',
			location: 'Downtown Tampa',
			description:
				'Modern coffee house specializing in innovative brewing methods',
		},
		{
			name: 'Bean There Coffee',
			specialty: 'Organic Fair-Trade Coffee',
			location: 'Westchase',
			description:
				'Committed to sustainable and ethically sourced coffee beans',
		},
		{
			name: 'Espresso Express',
			specialty: 'Italian-Style Espresso',
			location: 'Hyde Park',
			description: 'Traditional Italian coffee experience with imported beans',
		},
		{
			name: 'The Grind Coffee House',
			specialty: 'Single Origin & Pour-Over',
			location: 'Seminole Heights',
			description:
				'Specialty coffee with emphasis on origin stories and brewing techniques',
		},
	];

	return (
		<div className="p-5">
			<div className="flex items-center justify-between mb-6">
				<button
					className="btn btn-circle btn-ghost text-white"
					onClick={() => onNavigate('home')}>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>
				<h1 className="text-2xl font-semibold text-white text-center flex-1">
					TBCAF 2025 Vendors
				</h1>
				<div className="w-12"></div>
			</div>

			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-8">
					<p className="text-white/80 text-lg">
						Meet our amazing coffee vendors and discover your new favorite brew!
					</p>
				</div>

				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{vendors.map((vendor, index) => (
						<div
							key={index}
							className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
							<div className="text-center mb-4">
								<div className="text-3xl mb-2">☕</div>
								<h3 className="text-xl font-bold text-white mb-1">
									{vendor.name}
								</h3>
								<p className="text-amber-300 text-sm font-medium">
									{vendor.specialty}
								</p>
								<p className="text-white/60 text-xs mt-1">
									📍 {vendor.location}
								</p>
							</div>
							<p className="text-white/80 text-sm text-center leading-relaxed">
								{vendor.description}
							</p>
						</div>
					))}
				</div>

				<div className="text-center mt-8">
					<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
						<h3 className="text-xl font-semibold text-white mb-3">
							Can't make it to the festival?
						</h3>
						<p className="text-white/80 mb-4">
							Keep supporting these amazing local vendors year-round! Visit
							their locations and follow them on social media.
						</p>
						<button
							className="btn btn-primary"
							onClick={() => onNavigate('home')}>
							Back to Home
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VendorsScreen;
