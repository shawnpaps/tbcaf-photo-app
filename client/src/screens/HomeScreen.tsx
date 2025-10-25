import FeatureCard from "../components/FeatureCard";
import { SiFacebook, SiInstagram } from "react-icons/si";
import beanbag from "../assets/beanbag.jpg";
import brownbag from "../assets/brownbagcoffee.jpg";
import coldbrew from "../assets/coffee.jpg";
import sudocoffee from "../assets/sudo_coffee.png";
import { motion } from "motion/react";

interface HomeScreenProps {
	onNavigate: (screen: string) => void;
}

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
	return (
		<div className="flex justify-center flex-col">
			<motion.h1
				className="text-2xl font-semibold text-center"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Tampa Bay Coffee & Art Festival <br />{" "}
				<span className="text-3xl">2025</span>
			</motion.h1>
			<motion.div
				className="flex items-center justify-center gap-2 mt-4"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<motion.a
					href="https://instagram.com/tbcaffl"
					target="_blank"
					referrerPolicy="no-referrer"
					className="btn btn-circle glass btn-lg"
					whileHover={{ scale: 1.1, rotate: 5 }}
					whileTap={{ scale: 0.95 }}
				>
					<SiInstagram />
				</motion.a>
				<motion.a
					href="https://facebook.com/tbcaffl"
					target="_blank"
					referrerPolicy="no-referrer"
					className="btn btn-circle glass btn-lg"
					whileHover={{ scale: 1.1, rotate: -5 }}
					whileTap={{ scale: 0.95 }}
				>
					<SiFacebook />
				</motion.a>
			</motion.div>
			<section className="p-5">
				<div className="mt-4 max-h-[30em] flex flex-col overflow-y-scroll gap-4 pb-16">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<FeatureCard
							imageUrl={beanbag}
							title="Win Free Coffee for a whole YEAR!"
							buttonText="Learn How To Enter"
							description="Who doesn't love free coffee?! That's why TBCAF has teamed up with our vendors to give you the chance to win the ultimate coffee lover's giveaway!"
							onScreenChange={() => onNavigate("contest")}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<FeatureCard
							imageUrl={brownbag}
							title="Relive the Experience with our official Photo Gallery: powered by sudo.create"
							buttonText="Relive the Experience"
							description="TBCAF is proud to partner with sudo.create for coverage of the event. Check out the official photo gallery to relive all of the special moments from TBCAF 2025."
							onScreenChange={() => onNavigate("gallery")}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						<FeatureCard
							imageUrl={coldbrew}
							title="Official Vendors List: TBCAF 2025"
							buttonText="Check out the vendors"
							description="Keep tabs on your favorite vendors after the fest is over. "
							onScreenChange={() => onNavigate("vendors")}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<FeatureCard
							imageUrl={sudocoffee}
							title="Check out the engine behind this content"
							description="sudo.create is a creative technology studio from right here in Tampa. We are proud to partner with them to provide a unique multimedia experience to TBCAF 2025."
							buttonText="Learn more about sudo.create"
							onScreenChange={() => onNavigate("sudocreate")}
						/>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default HomeScreen;
