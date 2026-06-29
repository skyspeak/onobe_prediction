import { matchInfo } from "@/lib/mockData";

export function MatchHeader({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`bg-lafc-gray ${compact ? "px-4 py-3" : "px-4 py-4"}`}>
      <div className="mb-1 flex items-center justify-between text-[10px] uppercase tracking-wider text-zinc-500">
        <span>{matchInfo.matchday}</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-lafc-red" />
          Live · {matchInfo.minute}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <TeamBlock name={matchInfo.homeTeam} score={matchInfo.score.home} />
        <div className="px-2 text-center">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500">
            {matchInfo.half}
          </p>
        </div>
        <TeamBlock
          name={matchInfo.awayTeam}
          score={matchInfo.score.away}
          align="right"
        />
      </div>

      {!compact && (
        <p className="mt-2 text-center text-[10px] text-zinc-600">
          {matchInfo.venue}
        </p>
      )}
    </div>
  );
}

function TeamBlock({
  name,
  score,
  align = "left",
}: {
  name: string;
  score: number;
  align?: "left" | "right";
}) {
  const isLafc = name === "LAFC";

  return (
    <div
      className={`flex flex-1 flex-col ${align === "right" ? "items-end" : "items-start"}`}
    >
      <span
        className={`text-sm font-bold ${isLafc ? "text-lafc-gold" : "text-white"}`}
      >
        {name}
      </span>
      <span className="text-2xl font-bold tabular-nums text-white">{score}</span>
    </div>
  );
}
