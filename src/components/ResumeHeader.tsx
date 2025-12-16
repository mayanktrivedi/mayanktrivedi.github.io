import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const ResumeHeader = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const scrollToId = (e: React.MouseEvent, id: string) => {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
		setMenuOpen(false);
	};
	return (
		<header className="relative overflow-hidden bg-gradient-primary py-20 px-6 text-center">
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20 animate-float"></div>

			{/* Top navigation (brand left, menu right) */}
			<div className="absolute inset-x-0 top-6 z-20">
				<div className="container mx-auto max-w-4xl px-6 relative">
					<div className="flex items-center justify-between">
						{/* Brand on the left */}
						<div className="flex items-center gap-3">
							<a
								href="#"
								onClick={(e) => scrollToId(e, "about")}
								className="text-lg font-bold text-primary-foreground tracking-tight"
							>
								<span className="uppercase">Mayank@Dev</span>
							</a>
						</div>

						{/* Right: desktop links + download + mobile hamburger */}
						<div className="flex items-center gap-4">
							{/* Desktop menu (right aligned) */}
							<div className="hidden md:flex items-center gap-6 text-sm text-primary-foreground/90 uppercase tracking-wider">
								<a
									href="#about"
									onClick={(e) => scrollToId(e, "about")}
									className="hover:text-primary-foreground transition"
								>
									ABOUT
								</a>
								<a
									href="#experience"
									onClick={(e) => scrollToId(e, "experience")}
									className="hover:text-primary-foreground transition"
								>
									EXPERIENCE
								</a>
								<a
									href="#skills"
									onClick={(e) => scrollToId(e, "skills")}
									className="hover:text-primary-foreground transition"
								>
									SKILLS
								</a>
								<a
									href="#projects"
									onClick={(e) => scrollToId(e, "projects")}
									className="hover:text-primary-foreground transition"
								>
									PROJECTS
								</a>
								<a
									href="#contacts"
									onClick={(e) => scrollToId(e, "contacts")}
									className="hover:text-primary-foreground transition"
								>
									CONTACTS
								</a>
							</div>

							{/* desktop: removed separate Download button; DOWNLOAD is now a menu item */}

							{/* Mobile hamburger */}
							<div className="md:hidden">
								<button
									aria-label="Toggle menu"
									onClick={() => setMenuOpen(!menuOpen)}
									className="p-2 rounded-md bg-primary-foreground/6 text-primary-foreground hover:bg-primary-foreground/10 transition"
								>
									{/* simple hamburger icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d={
												menuOpen
													? "M6 18L18 6M6 6l12 12"
													: "M4 6h16M4 12h16M4 18h16"
											}
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>

					{/* Mobile dropdown */}
					{menuOpen && (
						<div className="mt-3 md:hidden bg-primary-foreground/6 rounded-md p-3 text-left">
							<a
								href="#about"
								onClick={(e) => scrollToId(e, "about")}
								className="block py-2 px-2 rounded hover:bg-primary-foreground/10 uppercase"
							>
								ABOUT
							</a>
							<a
								href="#experience"
								onClick={(e) => scrollToId(e, "experience")}
								className="block py-2 px-2 rounded hover:bg-primary-foreground/10 uppercase"
							>
								EXPERIENCE
							</a>
							<a
								href="#skills"
								onClick={(e) => scrollToId(e, "skills")}
								className="block py-2 px-2 rounded hover:bg-primary-foreground/10 uppercase"
							>
								SKILLS
							</a>
							<a
								href="#projects"
								onClick={(e) => scrollToId(e, "projects")}
								className="block py-2 px-2 rounded hover:bg-primary-foreground/10 uppercase"
							>
								PROJECTS
							</a>
							<a
								href="#contacts"
								onClick={(e) => scrollToId(e, "contacts")}
								className="block py-2 px-2 rounded hover:bg-primary-foreground/10 uppercase"
							>
								CONTACTS
							</a>
							{/* DOWNLOAD removed from mobile menu */}
						</div>
					)}
				</div>
			</div>

			<div className="container mx-auto max-w-4xl relative z-10">
				{/* Avatar above the name. Put an image at /avatar.jpg in the public folder to show your photo. */}
				<div className="flex justify-center mb-6 animate-fade-in stagger-0">
					<Avatar className="h-28 w-28 ring-4 ring-primary-foreground/20 shadow-lg">
						<AvatarImage src="/avatar.svg" alt="Mayank Trivedi" />
						<AvatarFallback>MT</AvatarFallback>
					</Avatar>
				</div>

				<h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">
					Mayank Trivedi
				</h1>
				<p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light animate-fade-in stagger-1">
					Staff Software Engineer - GenAI
				</p>

				<div className="flex flex-wrap justify-center gap-4 text-primary-foreground/90 mb-8 animate-fade-in stagger-2">
					<a
						href="mailto:mayank.trivedi58@gmail.com"
						className="flex items-center gap-2 hover:text-primary-foreground hover:scale-110 transition-all duration-300"
					>
						<Mail className="w-4 h-4" />
						<span className="text-sm">mayank.trivedi58@gmail.com</span>
					</a>
					<a
						href="tel:+1234567890"
						className="flex items-center gap-2 hover:text-primary-foreground hover:scale-110 transition-all duration-300"
					>
						<Phone className="w-4 h-4" />
						<span className="text-sm">+91 8826334458</span>
					</a>
					<div className="flex items-center gap-2">
						<MapPin className="w-4 h-4" />
						<span className="text-sm">Banglore, India</span>
					</div>
				</div>

				<div className="flex justify-center gap-3 mb-8 animate-scale-in stagger-3">
					<Button
						variant="outline"
						size="sm"
						asChild
						className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
					>
						<a
							href="https://www.linkedin.com/in/mayank-trivedi-6956487a/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="w-4 h-4 mr-2" />
							LinkedIn
						</a>
					</Button>
					<Button
						variant="outline"
						size="sm"
						asChild
						className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
					>
						<a
							href="https://github.com/mayanktrivedi"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="w-4 h-4 mr-2" />
							GitHub
						</a>
					</Button>
					<Button
						variant="outline"
						size="sm"
						asChild
						className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300"
					>
						<a
							href="https://mayanktrivedi.github.io/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Globe className="w-4 h-4 mr-2" />
							Website
						</a>
					</Button>
				</div>

				{/* Download button moved to top-right (small). Removed the large centered button */}
			</div>
		</header>
	);
};

export default ResumeHeader;
