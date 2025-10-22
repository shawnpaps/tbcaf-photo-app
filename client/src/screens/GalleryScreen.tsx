interface GalleryScreenProps {
	onNavigate: (screen: string) => void;
}

const GalleryScreen = ({ onNavigate }: GalleryScreenProps) => {
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
					Photo Gallery
				</h1>
				<div className="w-12"></div> {/* Spacer for centering */}
			</div>

			<div className="text-center text-white/80 mt-12">
				<div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
					<div className="text-6xl mb-4">📸</div>
					<h2 className="text-xl mb-4">Official Photo Gallery</h2>
					<p className="text-sm opacity-80 mb-6">
						View the complete collection of photos from TBCAF 2025 in our
						professional gallery powered by sudo.create. Click below to open the
						gallery in a new tab.
					</p>
					<div className="space-y-3">
						<button
							className="btn btn-primary w-full"
							onClick={() =>
								window.open(
									'https://photos.sudocreate.studio/-tampabaycoffeeartsfestivalgroupphotos/gallery',
									'_blank'
								)
							}>
							<svg
								className="w-5 h-5 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
							Open Photo Gallery
						</button>
						<button
							className="btn btn-ghost text-white"
							onClick={() => onNavigate('home')}>
							Back to Home
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GalleryScreen;
