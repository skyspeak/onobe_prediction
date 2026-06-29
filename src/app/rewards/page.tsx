import { AppShell } from "@/components/AppShell";
import { RewardCard } from "@/components/RewardCard";
import { demoUser, rewards } from "@/lib/mockData";

export default function RewardsPage() {
  return (
    <AppShell>
      <div className="flex-1 px-4 py-5">
        <div className="mb-5">
          <h1 className="text-lg font-bold text-white">Rewards</h1>
          <p className="mt-1 text-xs text-zinc-400">
            Redeem your points for matchday experiences
          </p>
        </div>

        <div className="mb-5 flex items-center justify-between rounded-xl border border-lafc-gold/30 bg-lafc-gold/10 px-4 py-3">
          <span className="text-sm text-zinc-300">Available balance</span>
          <span className="text-lg font-bold text-lafc-gold">
            {demoUser.points.toLocaleString()} pts
          </span>
        </div>

        <div className="space-y-3">
          {rewards.map((reward) => (
            <RewardCard key={reward.id} reward={reward} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
