import { AppShell } from "@/components/AppShell";
import { MatchHeader } from "@/components/MatchHeader";
import { QuestionCard } from "@/components/QuestionCard";
import { questions } from "@/lib/mockData";

export default function PredictPage() {
  return (
    <AppShell>
      <MatchHeader compact />

      <div className="flex-1 px-4 py-5">
        <div className="mb-5">
          <h1 className="text-lg font-bold text-white">Predict</h1>
          <p className="mt-1 text-xs text-zinc-400">
            Answer match questions across four resolution windows
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
