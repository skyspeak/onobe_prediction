export type QuestionWindow = "micro" | "short" | "medium" | "long";

export type QuestionStatus = "open" | "submitted" | "locked";

export interface Question {
  id: string;
  window: QuestionWindow;
  windowLabel: string;
  windowTiming: string;
  text: string;
  options: string[];
  selectedOption?: string;
  status: QuestionStatus;
  points: number;
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  points: number;
  isCurrentUser?: boolean;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  category: string;
}

export const matchInfo = {
  homeTeam: "LAFC",
  awayTeam: "Seattle Sounders",
  venue: "BMO Stadium",
  matchday: "Matchday 12",
  score: { home: 1, away: 0 },
  minute: "34'",
  half: "1st Half",
};

export const demoUser = {
  username: "You",
  points: 1240,
  rank: 4,
};

export const questions: Question[] = [
  {
    id: "q1",
    window: "micro",
    windowLabel: "Micro",
    windowTiming: "1–3 min",
    text: "Who will have more possession in the next 2 minutes?",
    options: ["LAFC", "Seattle", "Even"],
    selectedOption: "LAFC",
    status: "submitted",
    points: 50,
  },
  {
    id: "q2",
    window: "short",
    windowLabel: "Short",
    windowTiming: "5–10 min",
    text: "Will there be a goal in the next 10 minutes?",
    options: ["Yes", "No"],
    status: "open",
    points: 100,
  },
  {
    id: "q3",
    window: "medium",
    windowLabel: "Medium",
    windowTiming: "Rest of half",
    text: "How many total shots on goal by halftime?",
    options: ["0–2", "3–5", "6+"],
    status: "open",
    points: 150,
  },
  {
    id: "q4",
    window: "long",
    windowLabel: "Long",
    windowTiming: "Full match",
    text: "Who wins the match?",
    options: ["LAFC", "Opponent", "Draw"],
    selectedOption: "LAFC",
    status: "submitted",
    points: 250,
  },
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, username: "BlackGoldFan23", points: 2180 },
  { rank: 2, username: "3252Captain", points: 1920 },
  { rank: 3, username: "AngelCityPride", points: 1560 },
  { rank: 4, username: "You", points: 1240, isCurrentUser: true },
  { rank: 5, username: "BMORegular", points: 980 },
  { rank: 6, username: "MLSInsider", points: 870 },
  { rank: 7, username: "GoalLineGuru", points: 740 },
  { rank: 8, username: "SoCalSoccer", points: 620 },
  { rank: 9, username: "MatchdayMike", points: 510 },
  { rank: 10, username: "StadiumSeats", points: 430 },
];

export const rewards: Reward[] = [
  {
    id: "r1",
    title: "LAFC Scarf",
    description: "Official black & gold matchday scarf",
    pointsCost: 500,
    category: "Merchandise",
  },
  {
    id: "r2",
    title: "VIP Lounge Upgrade",
    description: "One-match access to the premium lounge",
    pointsCost: 1500,
    category: "Experience",
  },
  {
    id: "r3",
    title: "Signed Mini Ball",
    description: "Autographed mini soccer ball from a LAFC player",
    pointsCost: 2000,
    category: "Collectible",
  },
  {
    id: "r4",
    title: "$10 Concessions Credit",
    description: "Redeemable at any BMO Stadium concession stand",
    pointsCost: 300,
    category: "Food & Drink",
  },
  {
    id: "r5",
    title: "Player Tunnel Experience",
    description: "Watch the team walk out from the tunnel",
    pointsCost: 2500,
    category: "Experience",
  },
  {
    id: "r6",
    title: "LAFC Cap",
    description: "Limited edition matchday cap",
    pointsCost: 750,
    category: "Merchandise",
  },
];

export const pitchSteps = [
  {
    step: "1",
    title: "Join",
    description:
      "Fans scan a QR code or visit a mobile web link. No app download required.",
  },
  {
    step: "2",
    title: "Predict",
    description:
      "Answer simple match-related prediction questions throughout the event across four resolution windows.",
  },
  {
    step: "3",
    title: "Win & Redeem",
    description:
      "Correct predictions earn points. Fans climb a live leaderboard and redeem rewards.",
  },
];
