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

const vaults = [
	{ name: "Flow USD", tag: "Stable", apy: "8.4%", tvl: "$42.8M", color: "from-[#d8eee5] to-[#edf4dd]" },
	{ name: "Liquid ETH", tag: "Growth", apy: "6.9%", tvl: "$31.2M", color: "from-[#dce8f7] to-[#e4e0f5]" },
	{ name: "RIVR Prime", tag: "Balanced", apy: "11.2%", tvl: "$18.6M", color: "from-[#e8e2f2] to-[#f1e7dd]" },
];

const steps = [
	{ n: "01", title: "Connect", copy: "Use the wallet you already trust. RIVR is non-custodial from the first click.", Icon: Fingerprint },
	{ n: "02", title: "Choose a flow", copy: "Compare vault strategies, risk profiles and projected yield in plain language.", Icon: Layers3 },
	{ n: "03", title: "Stay liquid", copy: "Deposit, monitor and withdraw without navigating a maze of protocols.", Icon: Droplets },
];

const security = [
	{ title: "Non-custodial by design", copy: "Your wallet remains the authority for every movement.", Icon: LockKeyhole },
	{ title: "Open contracts", copy: "Strategy logic and parameters can be independently reviewed.", Icon: Code2 },
	{ title: "Layered safeguards", copy: "Caps, monitoring and emergency controls limit exposure.", Icon: Network },
];

const faqs = [
	["What is a RIVR vault?", "A vault is an onchain strategy that routes deposited assets through a defined set of yield sources. Every vault shows its objective and risk profile before you deposit."],
	["Do I give up custody of my assets?", "No. RIVR is designed as a non-custodial interface: you approve each transaction from your connected wallet."],
	["Can I withdraw at any time?", "Vault liquidity varies by strategy. The interface surfaces withdrawal conditions clearly before you enter a position."],
	["How does governance work?", "RIVR holders can review proposals, delegate voting power and participate in protocol decisions through onchain governance."],
];

export default function SiteContent() {
	return (
		<>
			<section className="px-4 sm:px-6 py-20 sm:py-28 max-w-[1320px] mx-auto">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
					{[["$92.6M", "Assets flowing"], ["14", "Live strategies"], ["7", "Integrated networks"], ["99.97%", "Protocol uptime"]].map(([value, label]) => (
						<div key={label} className="rounded-[1.5rem] sm:rounded-[2rem] bg-white p-5 sm:p-7 border border-[#233457]/5">
							<div className="text-2xl sm:text-4xl tracking-[-0.04em]">{value}</div>
							<div className="text-xs sm:text-sm text-[#233457]/55 mt-1">{label}</div>
						</div>
					))}
				</div>
			</section>

			<section id="vaults" className="px-4 sm:px-6 pb-24 sm:pb-32 max-w-[1320px] mx-auto scroll-mt-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
					<div><p className="eyebrow"><Sparkles className="w-4 h-4" /> Live strategies</p><h2 className="section-title">Find your flow.</h2></div>
					<p className="max-w-md text-[#233457]/58 leading-relaxed">Curated vaults make complex yield strategies easier to understand, enter and manage.</p>
				</div>
				<div className="grid md:grid-cols-3 gap-4">
					{vaults.map((vault, index) => (
						<motion.article key={vault.name} whileHover={{ y: -6 }} className={`rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br ${vault.color} p-5 sm:p-7 min-h-[330px] flex flex-col border border-white/70`}>
							<div className="flex items-center justify-between"><span className="chip">{vault.tag}</span><span className="text-sm opacity-50">0{index + 1}</span></div>
							<div className="mt-auto">
								<div className="w-14 h-14 rounded-full bg-white/55 flex items-center justify-center mb-7"><Waves className="w-6 h-6" /></div>
								<h3 className="text-3xl tracking-[-0.04em]">{vault.name}</h3>
								<div className="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-[#233457]/10">
									<div><span className="metric-label">Projected APY</span><strong>{vault.apy}</strong></div>
									<div><span className="metric-label">Vault TVL</span><strong>{vault.tvl}</strong></div>
								</div>
							</div>
						</motion.article>
					))}
				</div>
				<p className="text-xs text-[#233457]/45 mt-4 px-2">Projected yields are illustrative and variable. They are not guaranteed.</p>
			</section>

			<section id="how-it-works" className="bg-[#1f3257] text-white rounded-[2.2rem] sm:rounded-[4rem] mx-2 sm:mx-4 px-5 sm:px-10 lg:px-16 py-20 sm:py-28 scroll-mt-4 overflow-hidden relative">
				<div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#8fcbc5]/20 blur-3xl" />
				<div className="max-w-[1220px] mx-auto relative">
					<p className="eyebrow text-white/65"><Droplets className="w-4 h-4" /> One current, three steps</p>
					<h2 className="section-title text-white max-w-3xl">Onchain yield without the undertow.</h2>
					<div className="grid lg:grid-cols-3 gap-3 mt-12 sm:mt-16">
						{steps.map(({ n, title, copy, Icon }) => <article key={n} className="rounded-[1.8rem] bg-white/[0.07] border border-white/10 p-6 min-h-[260px] flex flex-col"><div className="flex justify-between"><span className="text-white/40">{n}</span><Icon className="w-6 h-6 text-[#a7dcd3]" /></div><div className="mt-auto"><h3 className="text-2xl mb-3">{title}</h3><p className="text-white/55 leading-relaxed">{copy}</p></div></article>)}
					</div>
				</div>
			</section>

			<section id="security" className="px-4 sm:px-6 py-24 sm:py-36 max-w-[1320px] mx-auto scroll-mt-8">
				<div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center">
					<div><p className="eyebrow"><ShieldCheck className="w-4 h-4" /> Built to be verified</p><h2 className="section-title">Security you can inspect.</h2><p className="text-[#233457]/58 leading-relaxed max-w-lg mt-5">Every strategy is designed around transparent contracts, visible risk parameters and controls that remain in your hands.</p><a href="#join" className="inline-flex items-center gap-2 mt-7 text-sm border-b border-[#233457]/30 pb-1">Explore the security model <ArrowRight className="w-4 h-4" /></a></div>
					<div className="rounded-[2rem] sm:rounded-[3rem] bg-[#dfe9e4] p-5 sm:p-8">
						{security.map(({ title, copy, Icon }) => <div key={title} className="flex gap-4 py-6 border-b border-[#233457]/10 last:border-0"><div className="w-11 h-11 shrink-0 rounded-full bg-white/60 flex items-center justify-center"><Icon className="w-5 h-5" /></div><div><h3 className="text-lg">{title}</h3><p className="text-sm text-[#233457]/55 mt-1 leading-relaxed">{copy}</p></div></div>)}
					</div>
				</div>
			</section>

			<section id="governance" className="px-4 sm:px-6 pb-24 sm:pb-36 max-w-[1320px] mx-auto scroll-mt-8">
				<div className="rounded-[2.2rem] sm:rounded-[4rem] bg-gradient-to-br from-[#e6e2f4] via-[#e2edf0] to-[#e5f0de] p-6 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
					<div><p className="eyebrow"><CircleDollarSign className="w-4 h-4" /> Community current</p><h2 className="section-title">Shape where RIVR flows next.</h2><p className="text-[#233457]/58 leading-relaxed max-w-lg mt-5">Delegate, propose and vote on the risk standards, incentives and integrations that define the network.</p><a href="#join" className="primary-link mt-7">Enter governance <ArrowRight className="w-4 h-4" /></a></div>
					<div className="relative min-h-[320px] flex items-center justify-center"><div className="absolute w-72 h-72 rounded-full border border-[#233457]/10" /><div className="absolute w-52 h-52 rounded-full border border-[#233457]/15" /><div className="w-36 h-36 rounded-full bg-[#24375c] text-white flex flex-col items-center justify-center shadow-2xl"><span className="text-4xl">68%</span><span className="text-xs text-white/55 mt-1">participation</span></div></div>
				</div>
			</section>

			<section className="px-4 sm:px-6 pb-24 max-w-[1000px] mx-auto">
				<p className="eyebrow"><Check className="w-4 h-4" /> Questions, answered</p><h2 className="section-title mb-10">Know before you flow.</h2>
				<div>{faqs.map(([question, answer]) => <details key={question} className="group border-t border-[#233457]/15 py-5 sm:py-6"><summary className="flex items-center justify-between gap-5 cursor-pointer list-none text-lg sm:text-xl"><span>{question}</span><span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-open:rotate-45 transition-transform">+</span></summary><p className="text-[#233457]/58 leading-relaxed max-w-2xl mt-4 pr-10">{answer}</p></details>)}</div>
			</section>

			<section id="join" className="mx-2 sm:mx-4 mb-2 rounded-[2.2rem] sm:rounded-[4rem] bg-[#badbd7] px-5 sm:px-10 py-20 sm:py-28 text-center overflow-hidden relative">
				<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/25 blur-3xl" />
				<div className="relative max-w-3xl mx-auto"><p className="eyebrow justify-center"><Waves className="w-4 h-4" /> The water is open</p><h2 className="text-[clamp(2.8rem,9vw,6.6rem)] leading-[0.92] tracking-[-0.06em]">Let your assets move.</h2><p className="text-[#233457]/60 max-w-lg mx-auto mt-6">Connect a wallet, compare strategies and find the vault built for your next move.</p><a href="#top" className="inline-flex items-center gap-2 rounded-full bg-[#24375c] text-white px-6 py-4 mt-8">Launch RIVR <ArrowRight className="w-4 h-4" /></a></div>
			</section>

			<footer className="px-6 sm:px-10 py-12 sm:py-16 flex flex-col md:flex-row gap-8 md:items-end justify-between max-w-[1320px] mx-auto">
				<div><div className="text-3xl tracking-[-0.08em]">RIVR</div><p className="text-sm text-[#233457]/45 mt-2">Fluid infrastructure for onchain assets.</p></div>
				<div className="grid grid-cols-2 sm:flex gap-x-10 gap-y-3 text-sm text-[#233457]/65"><a href="#vaults">Vaults</a><a href="#security">Security</a><a href="#governance">Governance</a><a href="#top">Documentation</a></div>
				<p className="text-xs text-[#233457]/40">© 2026 RIVR Protocol</p>
			</footer>
		</>
	);
}
