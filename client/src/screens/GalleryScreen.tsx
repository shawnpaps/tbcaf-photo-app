import { motion } from "motion/react";

interface GalleryScreenProps {
	onNavigate: (screen: string) => void;
}

const GalleryScreen = ({ onNavigate }: GalleryScreenProps) => {
	return (
		<div className="p-5">
			<motion.div
				className="flex items-center justify-between mb-6"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.button
					className="btn btn-circle btn-ghost text-white"
					onClick={() => onNavigate("home")}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
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
				</motion.button>
				<h1 className="text-2xl font-semibold text-white text-center flex-1">
					Photo Gallery
				</h1>
				<div className="w-12"></div> {/* Spacer for centering */}
			</motion.div>

			<div className="text-center text-white/80 mt-12">
				<motion.div
					className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<motion.div
						className="text-6xl mb-4"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
					>
						📸
					</motion.div>
					<motion.h2
						className="text-xl mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						Official Photo Gallery
					</motion.h2>
					<motion.p
						className="text-sm opacity-80 mb-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.8 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						View the complete collection of photos from TBCAF 2025 in our
						professional gallery powered by sudo.create. Click below to open the
						gallery in a new tab.
					</motion.p>
					<motion.div
						className="space-y-3"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.7 }}
					>
						<motion.button
							className="btn btn-primary w-full"
							onClick={() =>
								window.open(
									"https://photos.sudocreate.studio/-tampabaycoffeeartsfestivalgroupphotos/login?&redirect_back=%2f-tampabaycoffeeartsfestivalgroupphotos%2fgallery",
									"_blank",
								)
							}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<svg
								className="w-5 h-5 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
							Open Photo Gallery
						</motion.button>
						<motion.button
							className="btn btn-ghost text-white"
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

export default GalleryScreen;
