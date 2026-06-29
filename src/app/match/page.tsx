import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { MatchHeader } from "@/components/MatchHeader";
import { demoUser, questions } from "@/lib/mockData";

export default function MatchHubPage() {
  const openQuestions = questions.filter((q) => q.status === "open").length;
  const submittedQuestions = questions.filter(
    (q) => q.status === "submitted",
  ).length;

  return (
    <AppShell>
      <MatchHeader />

      <div className="flex-1 px-4 py-5">
        <div className="mb-6 rounded-xl border border-lafc-gold/30 bg-gradient-to-br from-lafc-gold/10 to-transparent p-4">
          <p className="mb-1 text-[10px] uppercase tracking-wider text-zinc-500">
            Your stats
          </p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold tabular-nums text-lafc-gold">
                {demoUser.points.toLocaleString()}
              </p>
              <p className="text-xs text-zinc-400">points earned</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">#{demoUser.rank}</p>
              <p className="text-xs text-zinc-400">leaderboard rank</p>
            </div>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Quick actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <QuickActionCard
              href="/predict"
              label="Predict"
              detail={`${openQuestions} open`}
              accent
            />
            <QuickActionCard
              href="/leaderboard"
              label="Leaderboard"
              detail={`Rank #${demoUser.rank}`}
            />
            <QuickActionCard
              href="/rewards"
              label="Rewards"
              detail="6 available"
            />
            <QuickActionCard
              href="/predict"
              label="Submitted"
              detail={`${submittedQuestions} pending`}
            />
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Active predictions
            </h2>
            <Link
              href="/predict"
              className="text-xs font-medium text-lafc-gold"
            >
              View all
            </Link>
          </div>
          <div className="space-y-2">
            {questions.map((q) => (
              <div
                key={q.id}
                className="rounded-lg border border-zinc-800 bg-lafc-gray px-3 py-2.5"
              >
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase text-lafc-gold">
                    {q.category}
                  </span>
                  <span className="text-[10px] text-zinc-600">·</span>
                  <span className="text-[10px] capitalize text-zinc-500">
                    {q.status}
                  </span>
                </div>
                <p className="line-clamp-1 text-xs text-zinc-300">{q.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function QuickActionCard({
  href,
  label,
  detail,
  accent = false,
}: {
  href: string;
  label: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex min-h-[72px] flex-col justify-center rounded-xl border px-4 py-3 transition-colors ${
        accent
          ? "border-lafc-gold/40 bg-lafc-gold/10 hover:bg-lafc-gold/15"
          : "border-zinc-800 bg-lafc-gray hover:border-zinc-700"
      }`}
    >
      <span
        className={`text-sm font-semibold ${accent ? "text-lafc-gold" : "text-white"}`}
      >
        {label}
      </span>
      <span className="text-[10px] text-zinc-500">{detail}</span>
    </Link>
  );
}
