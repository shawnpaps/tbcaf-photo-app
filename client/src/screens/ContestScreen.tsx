import { motion } from "motion/react";

interface ContestScreenProps {
	onNavigate: (screen: string) => void;
}

const ContestScreen = ({ onNavigate }: ContestScreenProps) => {
	return (
		<div className="p-5">
			<motion.div
				className="flex items-center justify-between mb-6"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<button
					className="btn btn-circle btn-ghost text-white"
					onClick={() => onNavigate("home")}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
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
			</motion.div>

			<div className="max-w-2xl mx-auto">
				<motion.div
					className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<motion.div
						className="text-center mb-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<div className="text-6xl mb-4">☕</div>
						<h2 className="text-2xl font-bold text-white mb-2">
							Win Free Coffee for a Year!
						</h2>
						<p className="text-white/80">
							Enter our amazing contest for a chance to win free coffee for an
							entire year!
						</p>
					</motion.div>

					<div className="space-y-4 text-white">
						<motion.div
							className="border-l-4 border-amber-400 pl-4"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<h3 className="font-semibold text-lg">How to Enter:</h3>
							<ul className="list-disc list-inside mt-2 space-y-1 text-sm">
								<li>Post a photo on Instagram</li>
								<li>Tag @tbcaffl in your post</li>
								<li>Use the hashtag #tbcaf2025</li>
							</ul>
							<div className="mt-3">
								<motion.button
									className="btn btn-sm btn-outline btn-warning"
									onClick={() => onNavigate("gallery")}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									📸 Need a photo? Browse our gallery
								</motion.button>
							</div>
						</motion.div>

						<motion.div
							className="border-l-4 border-green-400 pl-4"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							<h3 className="font-semibold text-lg">Prize Details:</h3>
							<p className="text-sm mt-2">
								Winner will receive free coffee for a year!
							</p>
						</motion.div>

						<motion.div
							className="border-l-4 border-blue-400 pl-4"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<h3 className="font-semibold text-lg">Contest Rules:</h3>
							<ul className="list-disc list-inside mt-2 space-y-1 text-sm">
								<li>Must be 18+ to enter</li>
								<li>One entry per person</li>
							</ul>
						</motion.div>
					</div>

					<motion.div
						className="text-center mt-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.7 }}
					>
						<motion.button
							className="btn btn-primary btn-lg"
							onClick={() => onNavigate("home")}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Back to Home
						</motion.button>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default ContestScreen;
