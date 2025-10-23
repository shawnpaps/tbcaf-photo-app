import React, { useEffect, useState } from "react";
import { SiInstagram } from "react-icons/si";
import { FiChevronLeft, FiExternalLink } from "react-icons/fi";

interface SudoCreateScreenProps {
	onNavigate: (screen: string) => void;
}

/**
 * Tiny interactive DemoToggle:
 * - Simulates a multi-step "automation" workflow with a progress bar and steps.
 * - Purely UI/local — no network calls.
 */
const DemoToggle: React.FC = () => {
	const [running, setRunning] = useState(false);
	const [step, setStep] = useState<number | null>(null);
	const [progress, setProgress] = useState(0);

	const steps = ["Queueing", "Processing images", "Optimizing & publishing"];

	const start = () => {
		setRunning(true);
		setStep(0);
		setProgress(0);
	};

	const stop = () => {
		setRunning(false);
		setStep(null);
		setProgress(0);
	};

	useEffect(() => {
		if (!running || step === null) return;

		let stepProgress = 0;
		const stepDuration = 1200; // ms per step
		const tick = 80; // update interval in ms

		// these are declared here so cleanup can clear them
		let intervalId = 0 as unknown as number;
		let advanceTimeout: number | undefined;
		let finishTimeout: number | undefined;
		let resetTimeout: number | undefined;

		intervalId = window.setInterval(() => {
			stepProgress += (tick / stepDuration) * 100;

			const base = (step / steps.length) * 100;
			const perStep = 100 / steps.length;
			const overall = Math.min(
				base + (stepProgress / 100) * perStep,
				base + perStep,
			);

			setProgress(Math.round(overall));

			if (stepProgress >= 100) {
				window.clearInterval(intervalId);

				if (step + 1 < steps.length) {
					advanceTimeout = window.setTimeout(() => {
						setStep((s) => (s !== null ? s + 1 : null));
					}, 280);
				} else {
					finishTimeout = window.setTimeout(() => {
						setProgress(100);
						setRunning(false);
						setStep(null);
						// show final state briefly, then reset progress
						resetTimeout = window.setTimeout(() => {
							setProgress(0);
						}, 800);
					}, 380);
				}
			}
		}, tick);

		return () => {
			window.clearInterval(intervalId);
			if (advanceTimeout) window.clearTimeout(advanceTimeout);
			if (finishTimeout) window.clearTimeout(finishTimeout);
			if (resetTimeout) window.clearTimeout(resetTimeout);
		};
	}, [running, step, steps.length]);

	return (
		<div className="flex items-center gap-3">
			<div className="flex-1">
				<div className="text-xs text-white/70">
					{running
						? step !== null
							? `${steps[step]} • ${progress}%`
							: "Starting..."
						: "Idle"}
				</div>

				<div className="mt-2 w-full max-w-xs">
					<div className="h-2 bg-white/10 rounded-full overflow-hidden">
						<div
							className="h-full bg-amber-300 transition-all ease-linear"
							style={{ width: `${progress}%` }}
						/>
					</div>
				</div>
			</div>

			<div className="w-28">
				{!running ? (
					<button className="btn btn-sm btn-primary w-full" onClick={start}>
						Start
					</button>
				) : (
					<button className="btn btn-sm btn-ghost w-full" onClick={stop}>
						Stop
					</button>
				)}
			</div>
		</div>
	);
};

const SudoCreateScreen: React.FC<SudoCreateScreenProps> = ({ onNavigate }) => {
	return (
		<div className="min-h-screen bg-neutral-900 text-white text-sm antialiased">
			{/* Top bar */}
			<header className="px-4 pt-5 pb-3 flex items-center gap-3">
				<button
					aria-label="Back to Home"
					className="btn btn-ghost btn-circle p-2 text-white"
					onClick={() => onNavigate("home")}
				>
					<FiChevronLeft size={18} />
				</button>

				<div className="flex-1 text-center">
					<div className="text-base font-semibold">
						☕ sudo.create × Tampa Bay Coffee &amp; Art Festival
					</div>
				</div>

				<div className="w-10" />
			</header>

			<main className="px-4 pb-28">
				{/* Hero */}
				<section className="mt-2 mb-4">
					<h2 className="text-xl font-bold">Craft. Code. Creativity.</h2>

					<p className="mt-3 text-white/90 leading-relaxed">
						At <strong>sudo.create</strong>, we help coffee roasters, creative
						brands, and small studios build beautiful, high-performance digital
						experiences — designed to feel as handcrafted as the work you pour
						into every cup, canvas, or creation.
					</p>

					<hr className="my-4 border-t border-white/10" />
				</section>

				{/* Who We Are */}
				<section className="mb-4">
					<h3 className="text-lg font-bold">🌱 Who We Are</h3>
					<p className="mt-2 text-white/90 leading-relaxed">
						We’re a <strong>creative technology studio</strong> that bridges{" "}
						<strong>art, engineering, and automation</strong>.<br />
						Our team blends design intuition with technical mastery to help
						creative entrepreneurs scale their craft without losing their soul.
					</p>

					<p className="mt-2 text-white/90 leading-relaxed">
						We believe technology should{" "}
						<strong>amplify your creativity</strong>, not complicate it.
					</p>

					<hr className="my-4 border-t border-white/10" />
				</section>

				{/* What We Do */}
				<section className="mb-4">
					<h3 className="text-lg font-bold">💡 What We Do</h3>

					<div className="mt-3 space-y-3">
						<div>
							<h4 className="font-semibold">1. Creative Business Launch</h4>
							<p className="text-white/85 mt-1">
								Launch your craft online with purpose-built digital systems:
							</p>
							<ul className="list-disc list-inside mt-2 text-white/80">
								<li>Brand websites &amp; online stores</li>
								<li>Booking, ordering, or subscription systems</li>
								<li>
									Workflow automation that saves time &amp; keeps you focused on
									the craft
								</li>
							</ul>
							<p className="mt-2 text-white/80 italic">
								Perfect for coffee roasters, artists, photographers, and makers.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mt-3">2. Studio Partner Program</h4>
							<p className="text-white/85 mt-1">
								For agencies, collectives, and studios who need a technical
								co-creator:
							</p>
							<ul className="list-disc list-inside mt-2 text-white/80">
								<li>Frontend &amp; backend development</li>
								<li>Integrations, APIs, and custom tools</li>
								<li>AI &amp; automation to streamline production</li>
							</ul>
							<p className="mt-2 text-white/80 italic">
								Think of us as your engineering partner — not just a vendor.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mt-3">3. Innovation Lab</h4>
							<p className="text-white/85 mt-1">
								Exploring new intersections of creativity and tech:
							</p>
							<ul className="list-disc list-inside mt-2 text-white/80">
								<li>Interactive experiences</li>
								<li>AI-driven storytelling</li>
								<li>Immersive brand activations</li>
								<li>Creative tech prototypes</li>
							</ul>
							<p className="mt-2 text-white/80 italic">
								Where experimentation meets execution.
							</p>
						</div>
					</div>

					<hr className="my-4 border-t border-white/10" />
				</section>

				{/* Why It Matters */}
				<section className="mb-6">
					<h3 className="text-lg font-bold">☕ Why It Matters</h3>
					<p className="mt-2 text-white/90 leading-relaxed">
						Like a perfect roast or a hand-thrown mug,
						<br />
						<strong>digital craftsmanship</strong> takes care, iteration, and
						artistry.
					</p>

					<p className="mt-2 text-white/90 leading-relaxed">
						We bring that same approach to every project — balancing creativity,
						technology, and authenticity to help you build something truly
						special.
					</p>

					<hr className="my-4 border-t border-white/10" />
				</section>

				{/* Let’s Brew Something Together */}
				<section className="mb-6">
					<h3 className="text-lg font-bold">
						🔗 Let’s Brew Something Together
					</h3>

					<div className="mt-3 space-y-2 text-white/90">
						<div>
							<strong>Website:</strong>{" "}
							<a
								href="https://sudocreate.studio"
								className="text-amber-300 hover:underline inline-flex items-center gap-1"
								target="_blank"
								rel="noopener noreferrer"
							>
								sudo.create <FiExternalLink size={14} />
							</a>
						</div>

						<div>
							<strong>Instagram:</strong>{" "}
							<a
								href="https://instagram.com/sudo.create"
								className="text-amber-300 hover:underline inline-flex items-center gap-1"
								target="_blank"
								rel="noopener noreferrer"
							>
								<SiInstagram /> @sudo.create
							</a>
						</div>

						<blockquote className="mt-3 text-white/80 italic border-l-2 border-white/10 pl-3">
							Whether you’re roasting coffee, painting murals, or building a
							brand — let’s blend your craft with code.
						</blockquote>
					</div>

					<hr className="my-4 border-t border-white/10" />
				</section>

				{/* Demo Automation card (reintroduced) */}
				<section className="mb-6">
					<div className="bg-white/6 rounded-xl p-3 flex items-center justify-between">
						<div>
							<div className="text-xs text-white/70">Demo Automation</div>
							<div className="text-sm font-medium">Publishing Workflow</div>
						</div>
						<DemoToggle />
					</div>
				</section>

				{/* Footer */}
				<section className="mb-8">
					<p className="text-white/80">
						🖤 Made for Creators. Built by sudo.create.
					</p>
				</section>
			</main>

			{/* Bottom nav (mobile friendly) */}
			<nav className="fixed bottom-0 left-0 right-0 bg-neutral-800/70 backdrop-blur-sm border-t border-white/6 p-3">
				<div className="max-w-md mx-auto flex items-center justify-between">
					<a
						href="mailto:spapineau@spaptechnology.com"
						className="text-amber-300 font-medium"
						rel="noopener noreferrer"
					>
						Start a project
					</a>

					<a
						href="https://instagram.com/sudo.create"
						className="text-white/90 font-medium inline-flex items-center gap-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiInstagram /> Instagram
					</a>

					<a
						href="https://sudocreate.studio"
						className="text-white/90 font-medium"
						target="_blank"
						rel="noopener noreferrer"
					>
						Website
					</a>
				</div>
			</nav>
		</div>
	);
};

export default SudoCreateScreen;
