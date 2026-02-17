import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import MechanismBlock from "@/components/MechanismBlock";
import Price from "@/components/Price";
import Section from "@/components/Section";
import SecondSection from "@/components/SecondSection";
import CoreInputSection from "@/components/CoreInputSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10 bg-background text-primary">
        <Section label="WHAT IT IS">
          <AnimatedSection duration={700} axis="y" distance={16}>
            <SecondSection />
          </AnimatedSection>
        </Section>

        <Section label="CORE MECHANISM">
          <CoreInputSection />
        </Section>


        <div className="min-h-screen">
          <div className="mx-auto w-full max-w-[960px] px-6 py-[120px] min-h-screen flex items-center justify-center">
            <div className="max-w-[560px] text-center">
              {/* WHAT YOU GET */}
              <div className="mb-3 text-[20px] font-semibold tracking-[0.18em] uppercase text-black/50">
                WHAT YOU GET
              </div>

              <h2 className="text-4xl font-bold tracking-[-0.02em] md:text-6xl">
                英語思考の加速
              </h2>

              <ul className="mt-6 space-y-2 text-sm leading-6 text-black/75 md:text-base md:leading-7">
                <li>日本語を介さない</li>
                <li>理論を挟まない</li>
                <li>量を積む</li>
              </ul>

              {/* divider */}
              <div className="my-10 mx-auto h-px w-24 bg-black/10" />

              {/* WHY IT WORKS */}
              <div className="mb-3 text-[20px] font-semibold tracking-[0.18em] uppercase text-black/50">
                WHY IT WORKS
              </div>

              <ul className="space-y-2 text-sm leading-6 text-black/75 md:text-base md:leading-7">
                <li>生活文脈の記憶定着</li>
                <li>通知による習慣化</li>
                <li>出題管理が学習効率を最大化</li>
                <li>AIドリブンのシンプルなUIでトレーニングに集中</li>
              </ul>
            </div>
          </div>
        </div>
        <Price/>
        <Footer/>
      </div>
    </main>
  );
}
