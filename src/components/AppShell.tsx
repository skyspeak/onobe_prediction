import { SponsorBar } from "@/components/SponsorBar";
import { BottomNav } from "@/components/BottomNav";
import { PhoneFrame } from "@/components/PhoneFrame";

interface AppShellProps {
  children: React.ReactNode;
  showPitch?: boolean;
}

export function AppShell({ children, showPitch = true }: AppShellProps) {
  return (
    <PhoneFrame showPitch={showPitch}>
      <SponsorBar />
      <div className="flex flex-1 flex-col overflow-y-auto">{children}</div>
      <BottomNav />
    </PhoneFrame>
  );
}
