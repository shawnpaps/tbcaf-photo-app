import { SiInstagram } from 'react-icons/si';

interface SudoCreateScreenProps {
	onNavigate: (screen: string) => void;
}

const SudoCreateScreen = ({ onNavigate }: SudoCreateScreenProps) => {
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
					sudo.create
				</h1>
				<div className="w-12"></div> {/* Spacer for centering */}
			</div>

			<div className="max-w-4xl mx-auto">
				<div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 space-y-8">
					{/* Header Section */}
					<div className="text-center">
						<h2 className="text-4xl font-bold text-white mb-4">sudo.create</h2>
						<h3 className="text-2xl font-semibold text-amber-300 mb-6">
							Creative Technology Studio ⚡
						</h3>
						<p className="text-lg text-white/90 leading-relaxed">
							Building digital systems that scale creative brands.
						</p>
					</div>

					{/* Main Description */}
					<div className="text-white/90 space-y-4">
						<p className="text-lg leading-relaxed">
							sudo.create merges the precision of engineering with the emotion
							of artistry — crafting{' '}
							<span className="font-semibold text-amber-300">web systems</span>,{' '}
							<span className="font-semibold text-amber-300">software</span>,
							and{' '}
							<span className="font-semibold text-amber-300">automation</span>{' '}
							that help creative brands grow with intention.
						</p>
						<p className="text-lg leading-relaxed">
							We design the{' '}
							<span className="font-semibold text-amber-300">
								digital infrastructure
							</span>{' '}
							behind modern creativity — systems that make creative work flow
							smoother, faster, and smarter.
						</p>
					</div>

					{/* What We Do Section */}
					<div className="border-l-4 border-amber-400 pl-6">
						<h4 className="text-xl font-bold text-white mb-4">What We Do</h4>
						<ul className="space-y-3 text-white/90">
							<li className="flex items-start">
								<span className="text-amber-300 mr-3">•</span>
								<div>
									<span className="font-semibold">Web Development:</span>{' '}
									Next.js / Webflow / custom digital ecosystems
								</div>
							</li>
							<li className="flex items-start">
								<span className="text-amber-300 mr-3">•</span>
								<div>
									<span className="font-semibold">Automation & Workflows:</span>{' '}
									Notion, Zapier, Make, AI-assisted content systems
								</div>
							</li>
							<li className="flex items-start">
								<span className="text-amber-300 mr-3">•</span>
								<div>
									<span className="font-semibold">Software Development:</span>{' '}
									Scalable tools & products for creative teams
								</div>
							</li>
							<li className="flex items-start">
								<span className="text-amber-300 mr-3">•</span>
								<div>
									<span className="font-semibold">
										Creative Systems Architecture:
									</span>{' '}
									End-to-end design of how creative businesses operate
								</div>
							</li>
						</ul>
					</div>

					{/* Philosophy Section */}
					<div className="border-l-4 border-green-400 pl-6">
						<h4 className="text-xl font-bold text-white mb-4">
							Our Philosophy
						</h4>
						<p className="text-white/90 mb-4 leading-relaxed">
							We believe great technology should{' '}
							<em className="text-amber-300">feel</em> creative.
						</p>
						<p className="text-white/90 mb-4 leading-relaxed">
							Every system we build is engineered for clarity, beauty, and scale
							— helping creators and studios work smarter without losing soul.
						</p>
						<blockquote className="italic text-amber-300 text-lg border-l-2 border-amber-300 pl-4">
							"Beautiful ideas deserve beautiful infrastructure." — sudo.create
						</blockquote>
					</div>

					{/* Current Focus Section */}
					<div className="border-l-4 border-blue-400 pl-6">
						<h4 className="text-xl font-bold text-white mb-4">Current Focus</h4>
						<ul className="space-y-2 text-white/90">
							<li className="flex items-start">
								<span className="text-blue-300 mr-3">•</span>
								Building automation and workflow systems for creative brands
							</li>
							<li className="flex items-start">
								<span className="text-blue-300 mr-3">•</span>
								Designing web platforms that blend design + function
							</li>
							<li className="flex items-start">
								<span className="text-blue-300 mr-3">•</span>
								Experimenting inside{' '}
								<span className="font-semibold text-blue-300">
									sudo.create Labs
								</span>{' '}
								— our R&D space for creative tools and experiences
							</li>
						</ul>
					</div>

					{/* Work With Us Section */}
					<div className="border-l-4 border-purple-400 pl-6">
						<h4 className="text-xl font-bold text-white mb-4">Work With Us</h4>
						<p className="text-white/90 mb-4 leading-relaxed">
							We collaborate with creatives, studios, and founders who want to
							scale their art through intelligent systems.
						</p>
						<div className="space-y-2 text-white/90">
							<p>📍 Based in Plant City, Florida — working worldwide 🌍</p>
							<p>
								🔗{' '}
								<button
									className="text-amber-300 hover:text-amber-200 underline transition-colors"
									onClick={() =>
										window.open('https://sudocreate.studio', '_blank')
									}>
									Visit sudo.create
								</button>
							</p>
							<p>
								📧{' '}
								<a
									href="mailto:contact@sudo.create"
									className="text-amber-300 hover:text-amber-200 underline transition-colors">
									contact@sudocreate.studio
								</a>
							</p>
							<p className="flex items-center">
								<SiInstagram className="text-amber-300 mr-2" size={16} />
								<button
									className="text-amber-300 hover:text-amber-200 underline transition-colors"
									onClick={() =>
										window.open('https://instagram.com/sudo.create', '_blank')
									}>
									@sudo.create
								</button>
							</p>
						</div>
					</div>

					{/* Back Button */}
					<div className="text-center pt-6">
						<button
							className="btn btn-primary btn-lg"
							onClick={() => onNavigate('home')}>
							Back to TBCAF Home
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SudoCreateScreen;
