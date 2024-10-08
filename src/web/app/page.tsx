"use client";

import { Verify } from "../components/Verify";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{ backgroundImage: "url('/img/bg.png')" }}
    >
      <Verify />
    </main>
  );
}
