import { motion } from "motion/react";
import BottomLeftCard from "./BottomLeftCard";
import BottomRightCorner from "./BottomRightCorner";
import HeroBadge from "./HeroBadge";
import SiteNavbar from "./SiteNavbar";

const HERO_IMAGE = `${import.meta.env.BASE_URL}assets/plumbing-hero.webp`;

export default function Hero() {
	return (
		<div
			id="top"
			className="w-full min-h-[100svh] flex items-center justify-center p-2 sm:p-3 md:p-5 bg-[#f0f0f0]"
		>
			<section className="relative w-full max-w-[1536px] min-h-[calc(100svh-1rem)] sm:min-h-[calc(100svh-1.5rem)] md:min-h-[calc(100svh-2.5rem)] rounded-[1.7rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center bg-[#d9e6ea] group">
				<img
					src={HERO_IMAGE}
					alt="Modern plumbing fixtures and exposed copper piping"
					className="absolute inset-0 w-full h-full object-cover object-[78%_center] sm:object-[72%_center] lg:object-center z-0"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-[#1a2b4a]/20 z-[1]" />

				<div className="absolute inset-0 z-10 w-full flex flex-col items-center">
					<SiteNavbar />

					<div className="w-full flex flex-col items-center pt-[5vh] sm:pt-[7vh] md:pt-9 px-5 pb-[13rem] sm:pb-[12rem] md:pb-0 text-center max-w-5xl">
						<HeroBadge />

						<motion.h1
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-[clamp(2.35rem,10.5vw,4.6rem)] lg:text-[80px] font-normal text-[#45536a] mb-3 tracking-[-0.045em] leading-[0.97] max-w-[850px] drop-shadow-[0_1px_12px_rgba(255,255,255,0.35)]"
						>
							Plumbing that flows.<br className="sm:hidden" /> Service that lasts.
						</motion.h1>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-[15px] sm:text-base md:text-lg text-[#35445b] leading-relaxed max-w-[610px] font-normal px-2 drop-shadow-[0_1px_10px_rgba(255,255,255,0.45)]"
						>
							Reliable repairs, installations, and emergency plumbing with clear communication from the first call to the final walkthrough.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.55 }}
							className="flex flex-wrap justify-center items-center gap-2 mt-5 sm:mt-6"
						>
							<a
								href="#join"
								className="rounded-full bg-[#24375c] text-white px-5 py-3 text-sm shadow-lg shadow-[#24375c]/15"
							>
								Book service
							</a>
							<a
								href="#vaults"
								className="rounded-full bg-white/65 backdrop-blur-md text-[#24375c] px-5 py-3 text-sm border border-white/60"
							>
								View services
							</a>
						</motion.div>
					</div>

					<BottomLeftCard />
					<BottomRightCorner />
				</div>
			</section>
		</div>
	);
}
