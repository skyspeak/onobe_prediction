import Image from "next/image";
import Link from "next/link";
import { LafcBrand } from "@/components/LafcBrand";
import { PhoneFrame } from "@/components/PhoneFrame";
import { SponsorBar } from "@/components/SponsorBar";

export default function JoinPage() {
  return (
    <PhoneFrame>
      <SponsorBar />

      <main className="safe-top flex flex-1 flex-col items-center justify-center px-6 py-10 text-center">
        <LafcBrand size="hero" priority />

        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-lafc-gold">
          Onobe
        </p>
        <h1 className="mb-1 text-xl font-bold text-white">
          Matchday Prediction Game
        </h1>
        <p className="mb-8 text-sm text-zinc-400">
          Scan to join · No app download
        </p>

        <div className="mb-6 rounded-2xl border border-lafc-gold/20 bg-white p-4 shadow-lg shadow-black/30">
          <Image
            src="/qr-placeholder.svg"
            alt="Scan QR code to join"
            width={160}
            height={160}
            priority
            className="mx-auto"
          />
        </div>

        <p className="mb-2 text-sm text-zinc-400">
          Scan the QR code at the stadium
        </p>
        <p className="mb-8 text-xs text-zinc-600">
          Works on any phone · Mobile web experience
        </p>

        <Link
          href="/match"
          className="flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-xl bg-lafc-gold px-6 py-3 text-sm font-bold text-lafc-black transition-opacity hover:opacity-90"
        >
          Enter Matchday Game
        </Link>

        <p className="mt-8 text-[10px] text-zinc-600">
          LAFC Pilot Proposal Demo · Powered by Onobe
        </p>
      </main>
    </PhoneFrame>
  );
}
