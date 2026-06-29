import { AppShell } from "@/components/AppShell";
import { LeaderboardRow } from "@/components/LeaderboardRow";
import { demoUser, leaderboard } from "@/lib/mockData";

export default function LeaderboardPage() {
  return (
    <AppShell>
      <div className="flex-1 px-4 py-5">
        <div className="mb-5">
          <h1 className="text-lg font-bold text-white">Leaderboard</h1>
          <p className="mt-1 text-xs text-zinc-400">
            Live rankings · {leaderboard.length} players
          </p>
        </div>

        <div className="mb-4 rounded-xl border border-zinc-800 bg-lafc-gray p-4 text-center">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500">
            Your position
          </p>
          <p className="text-3xl font-bold text-lafc-gold">#{demoUser.rank}</p>
          <p className="text-sm text-zinc-400">
            {demoUser.points.toLocaleString()} points
          </p>
        </div>

        <div className="space-y-2">
          {leaderboard.map((entry) => (
            <LeaderboardRow key={entry.rank} entry={entry} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
