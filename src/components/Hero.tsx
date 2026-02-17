import Container from "./Container";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center text-primary">
      <HeroBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#F8F8F6]/0 via-white/50 to-[#F8F8F6]"
      />
      <Container className="relative z-10">
        <div className="space-y-0">
          <p className="text-[clamp(40px,11vw,96px)]">2mile.</p>
          <h1 className="text-xl">生活が、そのまま英語になる。</h1>
        </div>
      </Container>
    </section>
  );
}
