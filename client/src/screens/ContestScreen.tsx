interface ContestScreenProps {
	onNavigate: (screen: string) => void;
}

const ContestScreen = ({ onNavigate }: ContestScreenProps) => {
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
					Coffee Contest
				</h1>
				<div className="w-12"></div>
			</div>

			<div className="max-w-2xl mx-auto">
				<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
					<div className="text-center mb-6">
						<div className="text-6xl mb-4">☕</div>
						<h2 className="text-2xl font-bold text-white mb-2">
							Win Free Coffee for a Year!
						</h2>
						<p className="text-white/80">
							Enter our amazing contest for a chance to win free coffee for an
							entire year!
						</p>
					</div>

					<div className="space-y-4 text-white">
						<div className="border-l-4 border-amber-400 pl-4">
							<h3 className="font-semibold text-lg">How to Enter:</h3>
							<ul className="list-disc list-inside mt-2 space-y-1 text-sm">
								<li>Visit at least 3 vendor booths at TBCAF 2025</li>
								<li>Take a photo at each booth</li>
								<li>Post on social media with #TBCAF2025</li>
								<li>Fill out the entry form at the information booth</li>
							</ul>
						</div>

						<div className="border-l-4 border-green-400 pl-4">
							<h3 className="font-semibold text-lg">Prize Details:</h3>
							<p className="text-sm mt-2">
								Winner receives a $500 gift card bundle from participating TBCAF
								vendors, enough for free coffee throughout 2025!
							</p>
						</div>

						<div className="border-l-4 border-blue-400 pl-4">
							<h3 className="font-semibold text-lg">Contest Rules:</h3>
							<ul className="list-disc list-inside mt-2 space-y-1 text-sm">
								<li>Must be 18+ to enter</li>
								<li>One entry per person</li>
								<li>Winner announced on December 15, 2025</li>
								<li>Must be present at TBCAF 2025 to win</li>
							</ul>
						</div>
					</div>

					<div className="text-center mt-8">
						<button
							className="btn btn-primary btn-lg"
							onClick={() => onNavigate('home')}>
							Back to Home
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContestScreen;
