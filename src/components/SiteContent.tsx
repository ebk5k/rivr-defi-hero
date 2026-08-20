import {
	ArrowRight,
	Check,
	CircleDollarSign,
	Code2,
	Droplets,
	Fingerprint,
	Layers3,
	LockKeyhole,
	Network,
	ShieldCheck,
	Sparkles,
	Waves,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
	{ name: "Drain & Sewer", tag: "Repair", detail1: "Clogs & backups", detail2: "Camera-ready", color: "from-[#d8eee5] to-[#edf4dd]" },
	{ name: "Water Heaters", tag: "Install", detail1: "Tank & tankless", detail2: "Hot water", color: "from-[#dce8f7] to-[#e4e0f5]" },
	{ name: "Pipes & Fixtures", tag: "Service", detail1: "Leaks & repairs", detail2: "Clean finish", color: "from-[#e8e2f2] to-[#f1e7dd]" },
];

const steps = [
	{ n: "01", title: "Request service", copy: "Tell us what is happening and choose the service window that works best for your home.", Icon: Fingerprint },
	{ n: "02", title: "Get a clear diagnosis", copy: "We inspect the issue, explain the options, and give you a straightforward path forward before work begins.", Icon: Layers3 },
	{ n: "03", title: "Get it fixed", copy: "We complete the repair or installation carefully, test the system, and leave the work area clean.", Icon: Droplets },
];

const reasons = [
	{ title: "Straightforward recommendations", copy: "You get a clear explanation of the problem and practical options without unnecessary complexity.", Icon: LockKeyhole },
	{ title: "Work built to last", copy: "Repairs and installations are approached with proper materials, careful workmanship, and attention to detail.", Icon: Code2 },
	{ title: "Respect for your home", copy: "We protect the work area, communicate throughout the job, and clean up before we leave.", Icon: Network },
];

const faqs = [
	["What plumbing services do you handle?", "We handle common residential plumbing needs including leaks, clogged drains, fixture repairs and replacements, water heaters, pipe issues, and troubleshooting."],
	["Do you handle plumbing emergencies?", "Yes. Emergency requests are prioritized so urgent leaks, backups, and loss-of-water situations can be addressed as quickly as scheduling allows."],
	["Will I know the plan before work starts?", "Yes. After diagnosing the issue, the recommended repair path is explained before the work begins so you know what is being done and why."],
	["Can you help with upgrades as well as repairs?", "Yes. In addition to repairs, we can help with fixture replacements, water-heater upgrades, and plumbing improvements for kitchens, bathrooms, and utility areas."],
];

export default function SiteContent() {
	return (
		<>
			<section className="px-4 sm:px-6 py-20 sm:py-28 max-w-[1320px] mx-auto">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
					{[["24/7", "Emergency requests"], ["Same-day", "Service options"], ["Upfront", "Clear estimates"], ["Clean", "Respectful workmanship"]].map(([value, label]) => (
						<div key={label} className="rounded-[1.5rem] sm:rounded-[2rem] bg-white p-5 sm:p-7 border border-[#233457]/5">
							<div className="text-2xl sm:text-4xl tracking-[-0.04em]">{value}</div>
							<div className="text-xs sm:text-sm text-[#233457]/55 mt-1">{label}</div>
						</div>
					))}
				</div>
			</section>

			<section id="vaults" className="px-4 sm:px-6 pb-24 sm:pb-32 max-w-[1320px] mx-auto scroll-mt-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
					<div><p className="eyebrow"><Sparkles className="w-4 h-4" /> Plumbing services</p><h2 className="section-title">The right fix for the flow.</h2></div>
					<p className="max-w-md text-[#233457]/58 leading-relaxed">From everyday repairs to bigger plumbing upgrades, the goal is simple: diagnose it clearly, fix it properly, and keep your home moving.</p>
				</div>
				<div className="grid md:grid-cols-3 gap-4">
					{services.map((service, index) => (
						<motion.article key={service.name} whileHover={{ y: -6 }} className={`rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br ${service.color} p-5 sm:p-7 min-h-[330px] flex flex-col border border-white/70`}>
							<div className="flex items-center justify-between"><span className="chip">{service.tag}</span><span className="text-sm opacity-50">0{index + 1}</span></div>
							<div className="mt-auto">
								<div className="w-14 h-14 rounded-full bg-white/55 flex items-center justify-center mb-7"><Waves className="w-6 h-6" /></div>
								<h3 className="text-3xl tracking-[-0.04em]">{service.name}</h3>
								<div className="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-[#233457]/10">
									<div><span className="metric-label">Common needs</span><strong>{service.detail1}</strong></div>
									<div><span className="metric-label">Approach</span><strong>{service.detail2}</strong></div>
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</section>

			<section id="how-it-works" className="bg-[#1f3257] text-white rounded-[2.2rem] sm:rounded-[4rem] mx-2 sm:mx-4 px-5 sm:px-10 lg:px-16 py-20 sm:py-28 scroll-mt-4 overflow-hidden relative">
				<div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#8fcbc5]/20 blur-3xl" />
				<div className="max-w-[1220px] mx-auto relative">
					<p className="eyebrow text-white/65"><Droplets className="w-4 h-4" /> Simple from start to finish</p>
					<h2 className="section-title text-white max-w-3xl">Good plumbing without the runaround.</h2>
					<div className="grid lg:grid-cols-3 gap-3 mt-12 sm:mt-16">
						{steps.map(({ n, title, copy, Icon }) => <article key={n} className="rounded-[1.8rem] bg-white/[0.07] border border-white/10 p-6 min-h-[260px] flex flex-col"><div className="flex justify-between"><span className="text-white/40">{n}</span><Icon className="w-6 h-6 text-[#a7dcd3]" /></div><div className="mt-auto"><h3 className="text-2xl mb-3">{title}</h3><p className="text-white/55 leading-relaxed">{copy}</p></div></article>)}
					</div>
				</div>
			</section>

			<section id="security" className="px-4 sm:px-6 py-24 sm:py-36 max-w-[1320px] mx-auto scroll-mt-8">
				<div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center">
					<div><p className="eyebrow"><ShieldCheck className="w-4 h-4" /> Why homeowners call us</p><h2 className="section-title">Service you can feel good about.</h2><p className="text-[#233457]/58 leading-relaxed max-w-lg mt-5">Plumbing problems are disruptive enough. The service around them should be clear, careful, and easy to understand.</p><a href="#join" className="inline-flex items-center gap-2 mt-7 text-sm border-b border-[#233457]/30 pb-1">Request plumbing service <ArrowRight className="w-4 h-4" /></a></div>
					<div className="rounded-[2rem] sm:rounded-[3rem] bg-[#dfe9e4] p-5 sm:p-8">
						{reasons.map(({ title, copy, Icon }) => <div key={title} className="flex gap-4 py-6 border-b border-[#233457]/10 last:border-0"><div className="w-11 h-11 shrink-0 rounded-full bg-white/60 flex items-center justify-center"><Icon className="w-5 h-5" /></div><div><h3 className="text-lg">{title}</h3><p className="text-sm text-[#233457]/55 mt-1 leading-relaxed">{copy}</p></div></div>)}
					</div>
				</div>
			</section>

			<section id="governance" className="px-4 sm:px-6 pb-24 sm:pb-36 max-w-[1320px] mx-auto scroll-mt-8">
				<div className="rounded-[2.2rem] sm:rounded-[4rem] bg-gradient-to-br from-[#e6e2f4] via-[#e2edf0] to-[#e5f0de] p-6 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
					<div><p className="eyebrow"><CircleDollarSign className="w-4 h-4" /> Our service standard</p><h2 className="section-title">Built around your home, not a sales script.</h2><p className="text-[#233457]/58 leading-relaxed max-w-lg mt-5">Clear communication, careful workmanship, and a clean finish guide every repair and installation from start to finish.</p><a href="#join" className="primary-link mt-7">Schedule service <ArrowRight className="w-4 h-4" /></a></div>
					<div className="relative min-h-[320px] flex items-center justify-center"><div className="absolute w-72 h-72 rounded-full border border-[#233457]/10" /><div className="absolute w-52 h-52 rounded-full border border-[#233457]/15" /><div className="w-36 h-36 rounded-full bg-[#24375c] text-white flex flex-col items-center justify-center shadow-2xl"><span className="text-4xl">3</span><span className="text-xs text-white/55 mt-1">core standards</span></div></div>
				</div>
			</section>

			<section id="faq" className="px-4 sm:px-6 pb-24 max-w-[1000px] mx-auto scroll-mt-8">
				<p className="eyebrow"><Check className="w-4 h-4" /> Questions, answered</p><h2 className="section-title mb-10">Before we get to work.</h2>
				<div>{faqs.map(([question, answer]) => <details key={question} className="group border-t border-[#233457]/15 py-5 sm:py-6"><summary className="flex items-center justify-between gap-5 cursor-pointer list-none text-lg sm:text-xl"><span>{question}</span><span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-open:rotate-45 transition-transform">+</span></summary><p className="text-[#233457]/58 leading-relaxed max-w-2xl mt-4 pr-10">{answer}</p></details>)}</div>
			</section>

			<section id="join" className="mx-2 sm:mx-4 mb-2 rounded-[2.2rem] sm:rounded-[4rem] bg-[#badbd7] px-5 sm:px-10 py-20 sm:py-28 text-center overflow-hidden relative">
				<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/25 blur-3xl" />
				<div className="relative max-w-3xl mx-auto"><p className="eyebrow justify-center"><Waves className="w-4 h-4" /> Ready when you need us</p><h2 className="text-[clamp(2.8rem,9vw,6.6rem)] leading-[0.92] tracking-[-0.06em]">Let’s get the water moving right.</h2><p className="text-[#233457]/60 max-w-lg mx-auto mt-6">Tell us what is going on and we’ll help you take the next step toward a clean, reliable fix.</p><a href="#top" className="inline-flex items-center gap-2 rounded-full bg-[#24375c] text-white px-6 py-4 mt-8">Request service <ArrowRight className="w-4 h-4" /></a></div>
			</section>

			<footer className="px-6 sm:px-10 py-12 sm:py-16 flex flex-col md:flex-row gap-8 md:items-end justify-between max-w-[1320px] mx-auto">
				<div><div className="text-3xl tracking-[-0.08em]">RIVR <span className="tracking-[-0.03em]">Plumbing</span></div><p className="text-sm text-[#233457]/45 mt-2">Reliable plumbing for the places you call home.</p></div>
				<div className="grid grid-cols-2 sm:flex gap-x-10 gap-y-3 text-sm text-[#233457]/65"><a href="#vaults">Services</a><a href="#security">Why us</a><a href="#faq">FAQ</a><a href="#join">Book service</a></div>
				<p className="text-xs text-[#233457]/40">© 2026 RIVR Plumbing</p>
			</footer>
		</>
	);
}
