import { LafcBrand } from "@/components/LafcBrand";
import { pitchSteps } from "@/lib/mockData";

interface PhoneFrameProps {
  children: React.ReactNode;
  showPitch?: boolean;
}

export function PhoneFrame({ children, showPitch = true }: PhoneFrameProps) {
  return (
    <div className="min-h-full bg-lafc-black lg:flex lg:items-center lg:justify-center lg:gap-12 lg:p-8 xl:gap-16 xl:p-12">
      {showPitch && (
        <aside className="hidden lg:flex lg:max-w-sm lg:flex-col lg:justify-center xl:max-w-md">
          <LafcBrand size="sidebar" priority />
          <p className="mb-2 mt-4 text-sm font-medium uppercase tracking-widest text-lafc-gold">
            Onobe × LAFC Pilot
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white xl:text-4xl">
            Matchday Prediction Game
          </h2>
          <p className="mb-8 text-base leading-relaxed text-zinc-400">
            A mobile-first live prediction platform for sports venues. Fans
            engage, compete, and redeem rewards—all through a simple mobile web
            experience.
          </p>
          <ol className="space-y-5">
            {pitchSteps.map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lafc-gold text-sm font-bold text-lafc-black">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-xs text-zinc-600">
            Powered by Onobe · LAFC Pilot Proposal Demo
          </p>
        </aside>
      )}

      <div className="mx-auto flex w-full max-w-[430px] flex-col lg:shrink-0">
        <div className="relative flex min-h-dvh flex-col bg-lafc-black lg:min-h-[780px] lg:overflow-hidden lg:rounded-[2rem] lg:border lg:border-zinc-800 lg:shadow-2xl lg:shadow-black/50">
          {children}
        </div>
      </div>
    </div>
  );
}
