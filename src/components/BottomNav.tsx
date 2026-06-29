"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/match", label: "Home", icon: HomeIcon },
  { href: "/predict", label: "Predict", icon: PredictIcon },
  { href: "/leaderboard", label: "Leaderboard", icon: TrophyIcon },
  { href: "/rewards", label: "Rewards", icon: GiftIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="safe-bottom sticky bottom-0 z-10 border-t border-zinc-800 bg-lafc-black/95 backdrop-blur-sm">
      <div className="flex items-stretch">
        {tabs.map(({ href, label, icon: Icon }) => {
          const isActive =
            pathname === href ||
            (href === "/match" && pathname === "/match");

          return (
            <Link
              key={href}
              href={href}
              className={`flex min-h-[56px] flex-1 flex-col items-center justify-center gap-0.5 px-1 py-2 transition-colors ${
                isActive
                  ? "text-lafc-gold"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Icon active={isActive} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" />
      {!active && <path d="M9 21V12h6v9" />}
    </svg>
  );
}

function PredictIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" fill={active ? "currentColor" : "none"} />
      {!active && (
        <>
          <path d="M12 8v4l3 3" />
          <circle cx="12" cy="12" r="10" />
        </>
      )}
    </svg>
  );
}

function TrophyIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function GiftIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C9 3 12 8 12 8" />
      <path d="M16.5 8a2.5 2.5 0 0 0 0-5C15 3 12 8 12 8" />
    </svg>
  );
}
