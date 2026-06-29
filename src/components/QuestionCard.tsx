import type { Question } from "@/lib/mockData";

const windowColors: Record<Question["window"], string> = {
  micro: "bg-lafc-red/20 text-lafc-red border-lafc-red/30",
  short: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  medium: "bg-lafc-gold/20 text-lafc-gold border-lafc-gold/30",
  long: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

export function QuestionCard({ question }: { question: Question }) {
  const statusLabel =
    question.status === "submitted"
      ? "Submitted"
      : question.status === "locked"
        ? "Locked"
        : "Open";

  const statusColor =
    question.status === "submitted"
      ? "text-lafc-gold"
      : question.status === "locked"
        ? "text-zinc-500"
        : "text-green-400";

  return (
    <article className="rounded-xl border border-zinc-800 bg-lafc-gray p-4">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-lafc-gold/30 bg-lafc-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-lafc-gold">
            {question.category}
          </span>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${windowColors[question.window]}`}
          >
            {question.windowLabel}
          </span>
          <span className="text-[10px] text-zinc-500">
            {question.windowTiming}
          </span>
        </div>
        <span className={`text-[10px] font-medium uppercase ${statusColor}`}>
          {statusLabel}
        </span>
      </div>

      <p className="mb-4 text-sm font-medium leading-snug text-white">
        {question.text}
      </p>

      <div className="flex flex-wrap gap-2">
        {question.options.map((option) => {
          const isSelected = question.selectedOption === option;

          return (
            <span
              key={option}
              className={`min-h-[44px] rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                isSelected
                  ? "bg-lafc-gold text-lafc-black"
                  : question.status === "open"
                    ? "border border-zinc-700 bg-lafc-gray-light text-zinc-300"
                    : "border border-zinc-800 bg-lafc-black/50 text-zinc-500"
              }`}
            >
              {option}
            </span>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-zinc-800 pt-3">
        <span className="text-[10px] text-zinc-500">
          {question.status === "submitted"
            ? "Waiting for result"
            : question.status === "locked"
              ? "Resolves at end of window"
              : "Tap to predict"}
        </span>
        <span className="text-xs font-semibold text-lafc-gold">
          +{question.points} pts
        </span>
      </div>
    </article>
  );
}
