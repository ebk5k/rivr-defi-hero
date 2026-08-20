import { motion } from "motion/react";
import BottomLeftCard from "./BottomLeftCard";
import BottomRightCorner from "./BottomRightCorner";
import HeroBadge from "./HeroBadge";
import SiteNavbar from "./SiteNavbar";

const VIDEO_URL = `${import.meta.env.BASE_URL}assets/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4`;

export default function Hero() {
	return (
		<div
			id="top"
			className="w-full min-h-[100svh] flex items-center justify-center p-2 sm:p-3 md:p-5 bg-[#f0f0f0]"
		>
			<section className="relative w-full max-w-[1536px] min-h-[calc(100svh-1rem)] sm:min-h-[calc(100svh-1.5rem)] md:min-h-[calc(100svh-2.5rem)] rounded-[1.7rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center bg-[#d9e6ea] group">
				<video
					autoPlay
					muted
					loop
					playsInline
					src={VIDEO_URL}
					className="absolute inset-0 w-full h-full object-cover object-[58%_center] sm:object-[64%_center] lg:object-center z-0"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-[#1a2b4a]/15 z-[1]" />

				<div className="absolute inset-0 z-10 w-full flex flex-col items-center">
					<SiteNavbar />

					<div className="w-full flex-1 flex flex-col items-center pt-[4.5svh] sm:pt-[8vh] md:pt-9 px-5 pb-[9rem] sm:pb-[10rem] text-center max-w-5xl">
						<HeroBadge />

						<motion.h1
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-[clamp(2.45rem,11.5vw,4.6rem)] lg:text-[80px] font-normal text-[#5E6470] mb-3 tracking-[-0.045em] leading-[0.97] max-w-[850px]"
						>
							Fluid assets.<br className="sm:hidden" /> Limitless flow.
						</motion.h1>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-[15px] sm:text-base md:text-lg text-[#4f5868] leading-relaxed max-w-[590px] font-normal px-2"
						>
							Put idle assets to work across intelligent vaults designed for clear,
							liquid, onchain yield.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.55 }}
							className="flex flex-wrap items-center justify-center gap-2 mt-5 sm:mt-6"
						>
							<a
								href="#vaults"
								className="rounded-full bg-[#24375c] text-white px-5 py-3 text-sm shadow-lg shadow-[#24375c]/15"
							>
								Explore vaults
							</a>
							<a
								href="#how-it-works"
								className="rounded-full bg-white/55 backdrop-blur-md text-[#24375c] px-5 py-3 text-sm border border-white/50"
							>
								How it works
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
