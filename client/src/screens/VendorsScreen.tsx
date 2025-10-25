import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface VendorsScreenProps {
	onNavigate: (screen: string) => void;
}

interface Vendor {
	name: string;
	logo: string;
	website?: string;
}

const VendorsScreen = ({ onNavigate }: VendorsScreenProps) => {
	const [activeTab, setActiveTab] = useState<
		"artists" | "vendors" | "roasters" | "sponsors"
	>("roasters");

	const roasters: Vendor[] = [
		{
			name: "85 Drips",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/85-drips-roaster-announcement-graphic-copy.jpg",
			website: "http://www.85drips.com",
		},
		{
			name: "Corporate Menace Coffee Co",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/corporate-menace-coffee-co-roaster-announcement-graphic-copy.jpg",
			website: "https://www.corporatemenace.com/",
		},
		{
			name: "F'mi Coffee Roasters",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/f-mi-coffee-roasters-roaster-announcement-graphic-copy.jpg",
			website: "http://treehouseroasters.com",
		},
		{
			name: "Gasparilla Roasting",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/gasparilla-roasting-roaster-announcement-graphic-copy.jpg",
			website: "http://www.gasparillaroasting.com",
		},
		{
			name: "Goggy Dog Coffee",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/goggy-dog-coffee-roaster-announcement-graphic-copy.jpg",
			website: "http://www.groggycoffee.com",
		},
		{
			name: "Royal Diaspora Coffee Company",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/royal-diaspora-coffee-company-roaster-announcement-graphic-copy.jpg",
			website: "https://royaldiasporacoffee.com/",
		},
		{
			name: "Small Beanz Coffee Co",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/small-beanz-coffee-co-roaster-announcement-graphic-copy.jpg",
			website: "http://www.smallbeanzcoffeeco.com",
		},
		{
			name: "Tevino Cafe",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/tevino-cafe-roaster-announcement-graphic-copy.jpg",
			website: "http://www.tevinocafe.com",
		},
		{
			name: "Brisk Coffee",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/brisk-roaster-announcement-graphic-copy.jpg",
			website: "http://www.ccmcoffee.com",
		},
		{
			name: "Burundi Coffee and Tea",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/burundi-coffee-and-tea-roaster-announcement-graphic-copy.jpg",
			website: "https://burundicoffeeandtea.com/",
		},
		{
			name: "Good Fruit Roasters",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/good-fruit-roasters-roaster-announcement-graphic-copy.jpg",
		},
		{
			name: "Hogg Batch",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/hogg-batch-roaster-announcement-graphic-copy.jpg",
			website: "http://hoggbatch.com",
		},
		{
			name: "Latitude Coffee",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/latitude-roaster-announcement-graphic-copy.jpg",
			website: "https://latitudecoffee.com/",
		},
		{
			name: "Ragged Coffee",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/ragged-roaster-announcement-graphic-copy.jpg",
			website: "https://www.raggedcoffee.com",
		},
		{
			name: "The Brown Bag Coffee Company",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/brown-bag-coffee-company-roaster-announcement-graphic-copy.jpg",
			website: "http://thebrownbagcoffee.com",
		},
		{
			name: "IMUA Coffee Roasters",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/imua-roaster-announcement-graphic-copy.jpg",
			website: "https://www.imua.coffee",
		},
	];

	const artists: Vendor[] = [
		{
			name: "Kitten Creations",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/kittencreations-2395410.jpg",
		},
		{
			name: "Aaron Apsley Artwork",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/aaronapsleyartwork-2220797.jpg",
		},
		{
			name: "Absolutely Crafty Ann",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/absolutelycraftyann-2185418.jpg",
		},
		{
			name: "A Crafty Little Freak",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/acraftylittlefreak-2266384.jpg",
		},
		{
			name: "Alysia Ariana Harris",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/alysiaarianaharris-2242439.jpg",
		},
		{
			name: "Artist Jody Goldman",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/artistjodygoldman-2245852.jpg",
		},
		{
			name: "Brezz Art",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/brezzart-2297960.jpg",
		},
		{
			name: "Close the Gap Design",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/closethegapdesign-2203211.jpg",
		},
		{
			name: "Darryl Goldman Art",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/darrylgoldmanart-2245997.jpg",
		},
		{
			name: "Diana Rendell",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/dianarendell-2265822.jpg",
		},
		{
			name: "Elliott Prada",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/eliottprada-2225228.jpg",
		},
		{
			name: "Elizabeth Desjardins",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/elizabethdesjardins-2204161.jpg",
		},
		{
			name: "Florida Gourd Craft LLC",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/floridagourdcraftllc-2164904.jpg",
		},
		{
			name: "Fluid Emotion Artworks",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/fluidemotionartworks-2259397.jpg",
		},
		{
			name: "Forests Within",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/forestswithin-2083149.jpg",
		},
		{
			name: "Ghostie Gang Art",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/ghostiegangart-2183403.jpg",
		},
		{
			name: "Jenni Gregory",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/jennigregory-2111854.jpg",
		},
		{
			name: "Karol Art 72",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/karolart72-2122245.jpg",
		},
		{
			name: "Kiara Q Abstract",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/kiaraqabstract-2223207.jpg",
		},
		{
			name: "Night Owl Society",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/nightowlsociety-2247510.jpg",
		},
		{
			name: "Nora Branson",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/norabranson-2187849.jpg",
		},
		{
			name: "Nora Jane Long",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/norajanelong-2295448.jpg",
		},
		{
			name: "Nova Fro Productions",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/novafroproductions-2285436.jpg",
		},
		{
			name: "Painting with Pixels",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/paintingwithpixels-2262663.jpg",
		},
		{
			name: "Peintado Art",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/peintadoart-2292516.jpg",
		},
		{
			name: "Plunder Pottery",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/plunderpottery-2078577.jpg",
		},
		{
			name: "Polk Pottery",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/polkpottery-2204135.jpg",
		},
		{
			name: "Red Mud Pottery",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/redmudpottery-2070565.jpg",
		},
		{
			name: "Sam's Murals",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/samsmurals-2246329.jpg",
		},
		{
			name: "Sketchy Stechy",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/sketchystechy-2266916.jpg",
		},
		{
			name: "Soul Speak Studios",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/soulspeakstudios-2250538.jpg",
		},
		{
			name: "Sunset Henna",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/sunsethenna-2259938.jpg",
		},
		{
			name: "Texture and Tones",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/textureandtones-2123676.jpg",
		},
		{
			name: "The Coastal Palette",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/thecoastalpalette-2262249.jpg",
		},
		{
			name: "The Fleurida Collection",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/thefleuridacollection-2238848.jpg",
		},
		{
			name: "Xclusv Art",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/xclusvart-2276837.jpg",
		},
	];

	const vendors: Vendor[] = [
		{
			name: "Astercroft",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/astercroft-2285289.jpg",
		},
		{
			name: "Graphicschyk Designs",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/graphicschykdesigns-2188603.jpg",
		},
		{
			name: "Year of the Dog T-Shirt Co",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/yearofthedogtshirtco-2150388.jpg",
		},
	];

	const sponsors: Vendor[] = [
		{
			name: "Sumitra Coffee Co",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/sumitra-coffee-co-main-hamsa-250402-113933-copy_orig.png",
		},
		{
			name: "NOM Catering Co",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/editor/nom-round-logo.png",
			website: "https://nomcateringco.com",
		},
		{
			name: "Patio Enclosures",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/new-logo_orig.png",
			website: "https://www.patioenclosures.com",
		},
		{
			name: "Craft Body Scan",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/craft-body-scan-logo-2_orig.png",
			website: "https://craftbodyscan.com",
		},
		{
			name: "Local Coffee Talk",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/lct-black-1200-x-450-t_orig.png",
			website: "https://www.localcoffeetalk.com",
		},
		{
			name: "Lakeland Linder International Airport",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/lia-primary-on-light-copy_orig.png",
			website: "https://www.flylakeland.com/",
		},
		{
			name: "Roastar",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/roastar-the-whole-package_orig.png",
			website: "https://info.roastar.com/tampacoffee",
		},
		{
			name: "Libby Designs",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/logo-libby-designs_orig.png",
			website: "http://libby-designs.com/",
		},
		{
			name: "Blick Art Materials",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/blick-art-materials-black_orig.png",
			website: "http://www.dickblick.com/",
		},
		{
			name: "Diaco Law",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/diaco-law-us-94769_orig.png",
			website:
				"https://diacolaw.com/personal-injury-practice-areas/auto-accident-attorneys/",
		},
		{
			name: "Shark Floor Coatings",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/shark-coatings-industrial-final-01_orig.png",
			website: "https://sharkfloorcoatings.com/",
		},
		{
			name: "Quality Craftsmen",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/quality-craftsmen-b-w-logo-w-no-basic-copy_orig.png",
			website: "https://www.quality-craftsmen.com",
		},
		{
			name: "Relentless Merch",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/relentless-merch-logo-copy_orig.png",
			website: "https://relentlessmerch.com",
		},
		{
			name: "All American Gutter Protection",
			logo: "https://www.tampabaycoffeeandartfestival.com/uploads/2/1/2/5/21250988/logo-3-1-copy_orig.png",
			website: "https://www.allamericangutterprotection.com",
		},
	];

	const getCurrentData = () => {
		switch (activeTab) {
			case "artists":
				return artists;
			case "roasters":
				return roasters;
			case "vendors":
				return vendors;
			case "sponsors":
				return sponsors;
		}
	};

	const getCurrentTitle = () => {
		switch (activeTab) {
			case "artists":
				return "Artists";
			case "roasters":
				return "Coffee Roasters";
			case "vendors":
				return "Vendors";
			case "sponsors":
				return "Sponsors";
		}
	};

	const handleLogoClick = (website?: string) => {
		if (website) {
			window.open(website, "_blank");
		}
	};

	return (
		<div className="p-5 min-h-screen">
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
					TBCAF 2025
				</h1>
				<div className="w-12"></div>
			</motion.div>

			{/* Tabs */}
			<motion.div
				className="flex justify-center mb-6"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<div className="tabs tabs-boxed bg-white/10 backdrop-blur-sm">
					<button
						className={`tab ${activeTab === "artists" ? "tab-active bg-amber-500 text-white" : "text-white/80"}`}
						onClick={() => setActiveTab("artists")}
					>
						Artists
					</button>
					<button
						className={`tab ${activeTab === "roasters" ? "tab-active bg-amber-500 text-white" : "text-white/80"}`}
						onClick={() => setActiveTab("roasters")}
					>
						Roasters
					</button>
					<button
						className={`tab ${activeTab === "vendors" ? "tab-active bg-amber-500 text-white" : "text-white/80"}`}
						onClick={() => setActiveTab("vendors")}
					>
						Vendors
					</button>
					<button
						className={`tab ${activeTab === "sponsors" ? "tab-active bg-amber-500 text-white" : "text-white/80"}`}
						onClick={() => setActiveTab("sponsors")}
					>
						Sponsors
					</button>
				</div>
			</motion.div>

			<div className="max-w-6xl mx-auto">
				<motion.div
					className="text-center mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<h2 className="text-3xl font-bold text-white mb-2">
						{getCurrentTitle()} ({getCurrentData().length})
					</h2>
					<p className="text-white/80 text-lg">
						{activeTab === "artists" &&
							"Discover talented local artists and artisans"}
						{activeTab === "roasters" &&
							"Discover amazing local coffee roasters"}
						{activeTab === "vendors" && "Meet our festival vendors"}
						{activeTab === "sponsors" && "Thank you to our generous sponsors!"}
					</p>
				</motion.div>

				{/* Grid of logos */}
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						{getCurrentData().map((item, index) => (
							<motion.div
								key={index}
								className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 flex items-center justify-center ${
									item.website ? "cursor-pointer" : ""
								}`}
								onClick={() => handleLogoClick(item.website)}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								whileHover={{ scale: 1.05, y: -5 }}
								whileTap={{ scale: 0.95 }}
							>
								<div className="w-full">
									<div className="aspect-square flex items-center justify-center mb-2 bg-white/5 rounded relative">
										<img
											src={item.logo}
											alt={item.name}
											crossOrigin="anonymous"
											className="max-w-full max-h-full object-contain p-2"
											loading="lazy"
											onError={(e) => {
												const target = e.target as HTMLImageElement;
												console.error(
													`Failed to load image for ${item.name}:`,
													item.logo,
												);
												target.style.display = "none";
												const parent = target.parentElement;
												if (parent) {
													parent.innerHTML = `<div class="text-white text-center text-sm p-4">
													<div class="font-semibold">${item.name}</div>
													<div class="text-xs text-red-300 mt-2">Image failed to load</div>
													<div class="text-xs text-gray-400 mt-1 break-all">${item.logo}</div>
												</div>`;
												}
											}}
											onLoad={() => {
												console.log(`✓ Loaded: ${item.name}`);
											}}
										/>
									</div>
									<p className="text-white/80 text-xs text-center mt-2 line-clamp-2">
										{item.name}
									</p>
									{item.website && (
										<p className="text-amber-300 text-xs text-center mt-1">
											Click to visit →
										</p>
									)}
								</div>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>

				{/* More TBA messages */}
				{activeTab === "artists" && (
					<motion.div
						className="text-center mt-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						<p className="text-white/60 text-lg font-semibold">
							More artists to be announced!
						</p>
					</motion.div>
				)}
				{activeTab === "vendors" && (
					<motion.div
						className="text-center mt-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						<p className="text-white/60 text-lg font-semibold">
							More vendors to be announced!
						</p>
					</motion.div>
				)}

				{/* Back button */}
				<motion.div
					className="text-center mt-12"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
						<h3 className="text-xl font-semibold text-white mb-3">
							{activeTab === "artists" && "Love local art?"}
							{activeTab === "roasters" && "Love local coffee?"}
							{activeTab === "vendors" && "Can't make it to the festival?"}
							{activeTab === "sponsors" && "Want to become a sponsor?"}
						</h3>
						<p className="text-white/80 mb-4">
							{activeTab === "artists" &&
								"Support these talented artists and discover unique handcrafted pieces!"}
							{activeTab === "roasters" &&
								"Visit these amazing roasters year-round and support local coffee culture!"}
							{activeTab === "vendors" &&
								"Keep supporting these amazing vendors! Follow them on social media."}
							{activeTab === "sponsors" &&
								"Thank you for making TBCAF 2025 possible. Your support means everything!"}
						</p>
						<motion.button
							className="btn btn-primary"
							onClick={() => onNavigate("home")}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Back to Home
						</motion.button>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default VendorsScreen;
