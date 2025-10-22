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
		<div className="card lg:card-side bg-white/20 backdrop-blur-sm shadow-sm">
			<figure className="w-full max-h-64">
				<img
					className="w-full h-full object-cover"
					src={imageUrl}
					alt={title}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary" onClick={onScreenChange}>
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	);
};

export default FeatureCard;
