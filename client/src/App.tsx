import RootLayout from "./layouts/RootLayout";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import HomeScreen from "./screens/HomeScreen";
import GalleryScreen from "./screens/GalleryScreen";
import ContestScreen from "./screens/ContestScreen";
import VendorsScreen from "./screens/VendorsScreen";
import SudoCreateScreen from "./screens/SudoCreateScreen";

function App() {
	const [activeScreen, setActiveScreen] = useState("home");

	const handleScreenChange = (screen: string) => {
		setActiveScreen(screen);
	};

	const screens = [
		{ name: "home", element: <HomeScreen onNavigate={handleScreenChange} /> },
		{
			name: "gallery",
			element: <GalleryScreen onNavigate={handleScreenChange} />,
		},
		{
			name: "contest",
			element: <ContestScreen onNavigate={handleScreenChange} />,
		},
		{
			name: "vendors",
			element: <VendorsScreen onNavigate={handleScreenChange} />,
		},
		{
			name: "sudocreate",
			element: <SudoCreateScreen onNavigate={handleScreenChange} />,
		},
	];

	// Find the current screen to render
	const currentScreen = screens.find((screen) => screen.name === activeScreen);

	return (
		<RootLayout onNavigate={handleScreenChange} activeScreen={activeScreen}>
			<AnimatePresence mode="wait">
				<motion.div
					key={activeScreen}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -20 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				>
					{currentScreen ? (
						currentScreen.element
					) : (
						<HomeScreen onNavigate={handleScreenChange} />
					)}
				</motion.div>
			</AnimatePresence>
		</RootLayout>
	);
}

export default App;
