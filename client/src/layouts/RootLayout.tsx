import coffee from '../assets/coffee_beans_bg.png';
import tbcaf from '../assets/tbcaf_logo.png';

interface RootLayoutProps {
	children: React.ReactNode;
	onNavigate: (screen: string) => void;
	activeScreen: string;
}

const RootLayout = ({
	children,
	onNavigate,
	activeScreen,
}: RootLayoutProps) => {
	return (
		<div className="w-screen min-h-screen relative bg-black/50 tracking-tighter">
			<div className="absolute top-0 left-0 -z-10 w-screen h-screen">
				<img className="object-cover w-full h-full" src={coffee} />
			</div>
			<div className="max-w-screen-sm mx-auto">
				<header className="flex justify-center p-5">
					<button
						onClick={() => onNavigate('home')}
						className="w-24 h-24 p-5 backdrop-blur-sm rounded-full bg-white/10 border-2 border-transparent hover:border-stone-500 transition-all ease-linear cursor-pointer">
						<img className="w-full h-full object-contain" src={tbcaf} />
					</button>
				</header>

				{activeScreen !== 'home' && (
					<nav className="flex justify-center mb-4">
						<div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
							<div className="flex gap-2">
								<button
									onClick={() => onNavigate('home')}
									className={`btn btn-sm ${
										activeScreen === 'home'
											? 'btn-primary'
											: 'btn-ghost text-white'
									}`}>
									Home
								</button>
								<button
									onClick={() => onNavigate('gallery')}
									className={`btn btn-sm ${
										activeScreen === 'gallery'
											? 'btn-primary'
											: 'btn-ghost text-white'
									}`}>
									Gallery
								</button>
								<button
									onClick={() => onNavigate('contest')}
									className={`btn btn-sm ${
										activeScreen === 'contest'
											? 'btn-primary'
											: 'btn-ghost text-white'
									}`}>
									Contest
								</button>
								<button
									onClick={() => onNavigate('vendors')}
									className={`btn btn-sm ${
										activeScreen === 'vendors'
											? 'btn-primary'
											: 'btn-ghost text-white'
									}`}>
									Vendors
								</button>
								<button
									onClick={() => onNavigate('sudocreate')}
									className={`btn btn-sm ${
										activeScreen === 'sudocreate'
											? 'btn-primary'
											: 'btn-ghost text-white'
									}`}>
									sudo.create
								</button>
							</div>
						</div>
					</nav>
				)}
				<main>{children}</main>
			</div>
		</div>
	);
};

export default RootLayout;
