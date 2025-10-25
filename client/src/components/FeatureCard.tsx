import { motion } from "motion/react";

interface FeatureCardProps {
	title: string;
	imageUrl: string;
	onScreenChange: () => void;
	description: string;
	buttonText: string;
}

const FeatureCard = ({
	title,
	imageUrl,
	onScreenChange,
	description,
	buttonText,
}: FeatureCardProps) => {
	return (
		<motion.div
			className="card lg:card-side bg-white/20 backdrop-blur-sm shadow-sm"
			whileHover={{ scale: 1.02, y: -4 }}
			transition={{ duration: 0.2 }}
		>
			<figure className="w-full max-h-64 overflow-hidden">
				<motion.img
					className="w-full h-full object-cover"
					src={imageUrl}
					alt={title}
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.3 }}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
				<div className="card-actions justify-end">
					<motion.button
						className="btn btn-primary"
						onClick={onScreenChange}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						{buttonText}
					</motion.button>
				</div>
			</div>
		</motion.div>
	);
};

export default FeatureCard;
