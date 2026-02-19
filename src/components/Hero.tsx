"use client";
import Container from "./Container";
import HeroBackground from "./HeroBackground";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center text-primary">
      <HeroBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#F8F8F6]/0 via-white/50 to-[#F8F8F6]"
      />

      <Container className="relative z-10">
        <div className="space-y-4 md:space-y-3">
          {/* Logo (replaces "SokRef.") */}
          <motion.img
            src="/logo.png"
            alt="SokRef."
            className="h-[clamp(44px,11vw,140px)] w-auto select-none"
            draggable={false}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          <h1 className="text-[clamp(30px,11vw,40px)] leading-relaxed tracking-[0.02em] text-black/80">
            <span className="font-semibold tabular-nums">0.6秒</span>の英語反射を鍛える。
            <br />
            新しい基準
          </h1>
        </div>
      </Container>
    </section>
  );
}
