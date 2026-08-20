import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const MENU_ITEMS = [
	{ label: "Services", href: "#vaults" },
	{ label: "How it works", href: "#how-it-works" },
	{ label: "Why us", href: "#security" },
	{ label: "FAQ", href: "#faq" },
];

export default function SiteNavbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="flex items-center justify-between py-5 px-5 md:px-10 w-full relative z-30">
			<a href="#top" className="flex-1 text-xl font-medium tracking-[-0.08em] text-[#24375c]" aria-label="RIVR Plumbing home">RIVR <span className="tracking-[-0.03em] font-normal">Plumbing</span></a>
			<ul className="hidden lg:flex items-center gap-8 text-[#273653] text-sm">
				{MENU_ITEMS.map((item) => <li key={item.label}><a href={item.href} className="hover:opacity-55 transition-opacity">{item.label}</a></li>)}
			</ul>
			<div className="flex-1 flex justify-end items-center gap-2">
				<motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#join" className="hidden sm:flex items-center bg-[#24375c] text-white rounded-full pl-2 pr-5 py-2 gap-2 hover:bg-[#172744] transition-colors">
					<span className="bg-white/20 p-1.5 rounded-full"><ArrowUpRight className="w-4 h-4" /></span>
					<span className="text-sm">Book service</span>
				</motion.a>
				<button type="button" onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white/55 backdrop-blur-md text-[#24375c] flex items-center justify-center border border-white/50" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
					{open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
				</button>
			</div>
			{open && (
				<motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="absolute top-[4.5rem] left-4 right-4 rounded-[1.5rem] bg-[#f7f9f5]/95 backdrop-blur-xl border border-white p-3 shadow-xl lg:hidden">
					{MENU_ITEMS.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between px-4 py-3.5 text-[#24375c] border-b border-[#24375c]/10 last:border-0">{item.label}<ArrowUpRight className="w-4 h-4 opacity-50" /></a>)}
					<a href="#join" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center rounded-full bg-[#24375c] text-white py-3.5">Book service</a>
				</motion.div>
			)}
		</nav>
	);
}
