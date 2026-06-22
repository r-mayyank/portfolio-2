"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { RealTimeClock } from "@/components/RealTimeClock";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopBar } from "@/components/TopBar";
import { TextThemeSwitcher } from "@/components/TextThemeSwitcher";
import { useState, useEffect } from "react";

const socialLinks = [
  {
    label: "email",
    href: "mailto:thelueblue@gmail.com",
    value: "thelueblue@gmail.com",
  },
  {
    label: "x.com",
    href: "https://x.com/r_mayankk",
    value: "@r_mayankk",
  },
  {
    label: "telegram",
    href: "https://t.me/r_mayankk",
    value: "@r_mayankk",
  },
  {
    label: "github",
    href: "https://github.com/r-mayyank",
    value: "@r_mayyank",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/r-mayyank/",
    value: "/in/r-mayyank",
  },
];

// Mail Logo SVG component (Solid)
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a1.75 1.75 0 01-1.844 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3H4.5a3 3 0 00-3 3v.158l9.714 5.978a1 1 0 001.072 0L22.5 6.908z" />
  </svg>
);

// X Logo SVG component (Solid)
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Telegram Logo SVG component (Solid Paper Plane Only)
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.05 2.05L2.34 9.6c-.63.24-.62.59-.1.75l5.06 1.58 11.72-7.39c.55-.33.78-.15.36.22l-9.5 8.56-.37 5.56c.55 0 .79-.25 1.1-.55l2.64-2.57 5.5 4.06c1.01.56 1.74.27 1.99-.94l3.6-17c.37-1.48-.57-2.16-1.54-1.78z" />
  </svg>
);

// Github Logo SVG component (Solid)
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
    />
  </svg>
);

// Linkedin Logo SVG component (Solid)
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    />
  </svg>
);

function getSocialIcon(label: string) {
  switch (label) {
    case "email":
      return MailIcon;
    case "x.com":
      return XIcon;
    case "telegram":
      return TelegramIcon;
    case "github":
      return GithubIcon;
    case "linkedin":
      return LinkedinIcon;
    default:
      return ArrowUpRight;
  }
}

const experiences = [
  {
    company: "turbin3",
    role: "apprenticeship",
    period: "jan 2026 - feb 2026",
    description: [
      "• completed an advanced solana apprenticeship covering solana architecture, the SVM, eBPF execution model, alpenglow, yellowstone gRPC, pinocchio, and the broader solana protocol ecosystem.",
      "• gained hands-on experience building and optimizing solana applications, with a focus on performance, account design, indexing infrastructure, and best practices for scalable on-chain development.",
    ],
    href: "https://turbin3.org/",
    skills: "solana · rust · anchor · typescript",
  },
  {
    company: "ackee blockchain security",
    role: "apprenticeship",
    period: "jul 2025 - sep 2025",
    description: [
      "• trained in solana smart contract development and security, covering rust, anchor, web3.js, typescript, secure program design patterns, and vulnerability awareness.",
      "• built and deployed a full-stack solana project to mainnet, demonstrating proficiency in on-chain program development, testing, and deployment workflows.",
    ],
    href: "https://ackee.xyz/",
    skills: "smart contract · rust · solana ",
  },
  {
    company: "vlsi for all",
    role: "internship",
    period: "jun 2025 - nov 2025",
    description: [
      "• led the complete redesign and redevelopment of the company website, rebuilding both frontend and backend architecture from the ground up.",
      "• developed modular, scalable features and interactive animations, significantly improving user experience and maintainability.",
      "• designed and implemented backend APIs to support website functionality and content management.",
      "• managed deployment, infrastructure setup, and production releases, ensuring reliable performance and smooth delivery.",
    ],

    skills: "next.js · javascript · express.js · gcp",
  },
];

const featuredWorks = [
  {
    title: "update: Updated account page UI",
    repo: "solana-foundation/templates",
    number: "#115",
    href: "https://github.com/solana-foundation/templates/pull/115",
  },
  {
    title:
      "chore: fix transaction toast behind modal, and account page UI update",
    repo: "solana-foundation/templates",
    number: "#113",
    href: "https://github.com/solana-foundation/templates/pull/113",
  },
  {
    title: "add anchor e2e tests to gill templates",
    repo: "solana-foundation/templates",
    number: "#82",
    href: "https://github.com/solana-foundation/templates/pull/82",
  },
];

const projects = [
  {
    title: "devnet solana dispenser",
    description:
      "a full-stack Solana faucet application for the devnet network. distribute SOL tokens with built-in security features and social authentication.",
    tags: "rust · axum · tokio · next.js · typescript · oAuth · solana",
    href: "https://github.com/r-mayyank/devnet-sol-dispenser",
  },
  {
    title: "nft stalking program",
    description:
      "a solana-based staking protocol built with rust and anchor that allows users to stake NFTs and earn token rewards through automated on-chain reward calculations.",
    tags: "rust · anchor · solana",
    href: "https://github.com/r-mayyank/solana-turbine-nft-staking-program",
  },
  {
    title: "chatterz",
    description:
      "real-time chatting app with temporary rooms that expires after all users exit (demo of socket.io)",
    tags: "nextjs · typescript · socket.io, express.js",
    href: "https://github.com/r-mayyank/chatterz",
    live: "https://chatterz-client-nu.vercel.app/",
  },
  {
    title: "filecord",
    description:
      "backendless file converter that helps you convert multiple files with ease using ffmpeg decoder and encoder.",
    tags: "typescipt · next.js · tailwind · ffmpeg.wasm",
    href: "https://github.com/r-mayyank/filecord",
    live: "https://filecord-9u2r.vercel.app/",
  },
];

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative flex flex-col items-center bg-white dark:bg-neutral-950 min-h-screen font-sans">
      <TopBar />
      <div
        id="main-container"
        className="w-full min-h-screen bg-white dark:bg-neutral-950 z-10 py-6 sm:py-8 mb-[10px] transition-all duration-500 ease-in-out shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        <Card className="border-none bg-transparent mb-8 sm:mb-16 w-full max-w-2xl mx-auto shadow-none px-4 sm:px-6 md:px-8">
          <CardContent className="flex flex-col gap-[19px] sm:gap-[19px] p-0">
            <Header isLoaded={isLoaded} />
            <Description isLoaded={isLoaded} />
            <CTAButtons isLoaded={isLoaded} />
            <Experience isLoaded={isLoaded} experiences={experiences} />
            <FeaturedWork isLoaded={isLoaded} featuredWorks={featuredWorks} />
            <Projects isLoaded={isLoaded} projects={projects} />
            <SocialLinks isLoaded={isLoaded} links={socialLinks} />
            <FooterSection isLoaded={isLoaded} />
            <ClockWrapper isLoaded={isLoaded} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function Header({ isLoaded }: { isLoaded: boolean }) {
  return (
    <header
      id="about"
      className={`scroll-mt-20 flex items-start justify-between gap-4 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "100ms" }}
    >
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 flex items-center gap-2 select-none">
          mayank raja
          <kbd className="inline-flex h-[18px] w-[18px] items-center justify-center rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-[10px] text-neutral-400 dark:text-neutral-500 font-sans shadow-sm">
            H
          </kbd>
        </h1>
        <p className="text-sm font-medium text-[#62748e] dark:text-neutral-400">
          full-stack engineer · solana · 20
        </p>
      </div>
    </header>
  );
}

function Description({ isLoaded }: { isLoaded: boolean }) {
  return (
    <div
      className={`flex flex-col gap-4 sm:gap-6 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "200ms" }}
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        <p className="text-sm text-neutral-900 dark:text-neutral-200">
          hey, i'm mayank a full-stack engineer exploring blockchain
          infrastructure and DeFi.
        </p>
        <p className="text-sm text-neutral-900 dark:text-neutral-200">
          building and contributing to open source projects around solana and as
          a full-stack developer every day I dive deeper into new technologies,
          continuously enhancing my skills across frontend and backend and app
          development.
        </p>
      </div>
    </div>
  );
}

function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
    >
      resume
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className="text-neutral-400 dark:text-neutral-500"
      >
        <title>arrow-up-right</title>
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <line x1="1.75" y1="10.25" x2="10.25" y2="1.75"></line>
          <polyline points="4.25 1.75 10.25 1.75 10.25 7.75"></polyline>
        </g>
      </svg>
    </a>
  );
}

function CTAButtons({ isLoaded }: { isLoaded: boolean }) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-2.5 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "300ms" }}
    >
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <Button
          variant="ghost"
          className="w-full sm:w-auto gap-2 justify-center sm:justify-start p-0 text-neutral-900 dark:text-neutral-200"
        >
          <span className="h-[13px] w-[13px] rounded-full bg-[#05df7233] flex items-center justify-center overflow-hidden">
            <span className="h-1.5 w-1.5 rounded-full bg-[#05df72] animate-scale-in" />
          </span>
          <span className="text-[13px] leading-5">Available for hire</span>
        </Button>
        <ResumeButton />
        <a
          href="mailto:thelueblue@gmail.com"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
        >
          email
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            className="text-neutral-400 dark:text-neutral-500"
          >
            <title>arrow-up-right</title>
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <line x1="1.75" y1="10.25" x2="10.25" y2="1.75"></line>
              <polyline points="4.25 1.75 10.25 1.75 10.25 7.75"></polyline>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string | string[];
  href?: string;
  skills: string;
}

function Experience({
  isLoaded,
  experiences,
}: {
  isLoaded: boolean;
  experiences: ExperienceItem[];
}) {
  return (
    <div
      id="experience"
      className={`scroll-mt-20 mt-8 sm:mt-12 flex flex-col gap-6 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "400ms" }}
    >
      <h2 className="text-sm text-neutral-400 dark:text-neutral-500 uppercase flex items-center gap-2 select-none tracking-wider">
        EXPERIENCE
        <kbd className="inline-flex h-[18px] w-[18px] items-center justify-center rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-[10px] text-neutral-400 dark:text-neutral-500 font-sans shadow-sm">
          E
        </kbd>
      </h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex flex-col gap-1">
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                {exp.role} at{" "}
                {exp.href ? (
                  <a
                    href={exp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors inline-flex underline italic items-center gap-0.5 text-neutral-900 dark:text-neutral-100 font-medium group/exp"
                  >
                    {exp.company}
                    <ArrowUpRight className="h-3 w-3 text-neutral-400 dark:text-neutral-500 transition-transform group-hover/exp:translate-x-0.5 group-hover/exp:-translate-y-0.5 inline-block" />
                  </a>
                ) : (
                  <span className="underline italic">{exp.company}</span>
                )}
              </span>
              <span className="text-neutral-500 dark:text-neutral-400 shrink-0">
                {exp.period}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-light">
                {exp.skills}
              </span>
            </div>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">
              {Array.isArray(exp.description) ? (
                <ul className="list-disc pl-4 flex flex-col gap-1">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>
                      {point.replace(/^[·\-\s\u2022]+/, "").trim()}
                    </li>
                  ))}
                </ul>
              ) : exp.description.includes("\n") ? (
                <ul className="list-disc pl-4 flex flex-col gap-1">
                  {exp.description.split("\n").map((line, idx) => {
                    const cleaned = line
                      .trim()
                      .replace(/^[·\-\s\u2022]+/, "")
                      .trim();
                    if (!cleaned) return null;
                    return <li key={idx}>{cleaned}</li>;
                  })}
                </ul>
              ) : exp.description.trim().startsWith("·") ||
                exp.description.trim().startsWith("-") ? (
                <ul className="list-disc pl-4 flex flex-col gap-1">
                  <li>
                    {exp.description
                      .trim()
                      .replace(/^[·\-\s\u2022]+/, "")
                      .trim()}
                  </li>
                </ul>
              ) : (
                <p>{exp.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FeaturedWorkItem {
  title: string;
  repo: string;
  number: string;
  href: string;
}

function FeaturedWork({
  isLoaded,
  featuredWorks,
}: {
  isLoaded: boolean;
  featuredWorks: FeaturedWorkItem[];
}) {
  return (
    <div
      id="featured-work"
      className={`scroll-mt-20 mt-8 sm:mt-12 flex flex-col gap-6 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "450ms" }}
    >
      <h2 className="text-sm text-neutral-400 dark:text-neutral-500 uppercase flex items-center gap-2 select-none tracking-wider">
        contributions
        <kbd className="inline-flex h-[18px] w-[18px] items-center justify-center rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-[10px] text-neutral-400 dark:text-neutral-500 font-sans shadow-sm">
          F
        </kbd>
      </h2>
      <div className="flex flex-col gap-6">
        {featuredWorks.map((pr) => (
          <div key={pr.href} className="flex flex-col gap-1">
            <div className="flex items-baseline justify-between text-sm">
              <a
                href={pr.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors text-neutral-900 dark:text-neutral-100 font-medium group/fw flex items-center justify-between w-full"
              >
                <span className="pr-4">{pr.title}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500 transition-transform group-hover/fw:translate-x-0.5 group-hover/fw:-translate-y-0.5 shrink-0" />
              </a>
            </div>
            <div className="text-xs text-neutral-400 dark:text-neutral-500 font-light">
              {pr.repo} · {pr.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ProjectItem {
  title: string;
  description: string;
  tags: string;
  href?: string;
  live?: string;
}

function Projects({
  isLoaded,
  projects,
}: {
  isLoaded: boolean;
  projects: ProjectItem[];
}) {
  return (
    <div
      id="projects"
      className={`scroll-mt-20 mt-8 sm:mt-12 flex flex-col gap-6 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "500ms" }}
    >
      <h2 className="text-sm text-neutral-400 dark:text-neutral-500 uppercase flex items-center gap-2 select-none tracking-wider">
        PROJECTS
        <kbd className="inline-flex h-[18px] w-[18px] items-center justify-center rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-[10px] text-neutral-400 dark:text-neutral-500 font-sans shadow-sm">
          P
        </kbd>
      </h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col gap-1">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1.5">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors inline-flex items-center gap-1.5 group/proj"
                  >
                    {project.title}
                    <GithubIcon className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500 transition-colors group-hover/proj:text-neutral-600 dark:group-hover/proj:text-neutral-300" />
                  </a>
                ) : (
                  <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </span>
                )}
              </div>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors inline-flex items-center gap-0.5 group/live"
                >
                  <span>live</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500 transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                </a>
              )}
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-light">
                {project.tags}
              </span>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialLinks({
  isLoaded,
  links,
}: {
  isLoaded: boolean;
  links: typeof socialLinks;
}) {
  return (
    <div
      id="contact"
      className={`scroll-mt-20 mt-8 sm:mt-12 flex flex-col gap-5 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "550ms" }}
    >
      <h2 className="text-sm text-neutral-400 dark:text-neutral-500 uppercase flex items-center gap-2 select-none tracking-wider">
        CONTACT
        <kbd className="inline-flex h-[18px] w-[18px] items-center justify-center rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-[10px] text-neutral-400 dark:text-neutral-500 font-sans shadow-sm">
          C
        </kbd>
      </h2>
      <div className="flex flex-col gap-2">
        {links.map((link) => {
          const Icon = getSocialIcon(link.label);
          const isEmail = link.label === "email";
          const content = (
            <div className="w-full flex items-center justify-between text-neutral-900 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors py-1.5">
              <div className="flex items-center gap-3.5">
                <Icon className="h-[18px] w-[18px] text-neutral-500 dark:text-neutral-400" />
                <span className="text-sm font-normal">{link.label}</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-sm">
                <span>{link.value}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          );

          return (
            <div key={link.label} className="group">
              <a
                href={isEmail ? `mailto:${link.value}` : link.href}
                className="block w-full"
                rel={isEmail ? undefined : "noopener noreferrer"}
                target={isEmail ? undefined : "_blank"}
              >
                {content}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FooterSection({ isLoaded }: { isLoaded: boolean }) {
  return (
    <div
      className={`flex flex-col items-center gap-2 pt-8 pb-4 transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "600ms" }}
    >
      <div className="flex items-center gap-1.5 text-[13px] font-light tracking-wide text-neutral-400 dark:text-neutral-500">
        <span>built with next.js</span>
        <span className="text-neutral-300 dark:text-neutral-700 select-none">
          ·
        </span>
        <span>rss</span>
        <span className="text-neutral-300 dark:text-neutral-700 select-none">
          ·
        </span>
        <span>sitemap</span>
      </div>
      <div className="text-[13px] font-light tracking-wide text-neutral-400 dark:text-neutral-500">
        © 2026 r-mayyank
      </div>
    </div>
  );
}

function ClockWrapper({ isLoaded }: { isLoaded: boolean }) {
  return (
    <div
      className={`flex justify-between items-center w-full transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "650ms" }}
    >
      <RealTimeClock />
      <TextThemeSwitcher />
    </div>
  );
}
