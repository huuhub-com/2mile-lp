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
        <Section label="WHAT 2mile IS">
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
                <li>出題管理が効率を最大化</li>
                <li>AIドリブンのシンプルなUIでトレーニングに集中</li>
              </ul>
              <div className="my-10 mx-auto h-px w-24 bg-black/10" />
              <div className="mb-3 text-[20px] font-semibold tracking-[0.18em] text-black/50">
                0.6秒の英語反射を鍛える「Same Phrase, Different Situations」アルゴリズム
              </div>
              <div className="space-y-4 text-sm leading-6 text-gray-600 md:text-base md:leading-7">
                <div className="">
                  SPDS（Same Phrase, Different Situations）は、フレーズを「暗記対象（再現すべき文字列）」としてではなく、「意味空間を定義するSeed（種）」として扱う反射トレーニングモデルです。ここでの学習単位は“フレーズ”そのものではありません。Seedが指し示す意味空間が与えられた瞬間に、文法的に破綻せず、ネイティブが自然に受け取る表現として英語が立ち上がるかどうか——すなわちReflex（反射）の成否を学習単位としています。
                </div>
                <div className="">
                  SPDSの出題は、時間軸と反射難易度の統合最適化として設計されています。意味空間への反射状態を、stability、difficulty、回答時刻によって評価します。記憶減衰モデル retrievability = e^(-t / stability) に従い、出題エンジンは復習タイミングに到達したSeed群の中から対象となるSeedを選択します。
                </div>
                <div className="">
                  選択されたSeedは、そのまま提示されるわけではありません。SPDSが「Same Phrase, Different Situations」と呼ばれる理由はここにあります。Seedの意味空間を引き出す状況（situation）と、それに続く相手役の発話はLLM（Large Language Models）によって動的に生成されます。ただし、これは自由会話ではなく制御生成です。状況文はSeedの意味空間を自然に要求する会話圧を形成するよう設計されています。これにより、同一のSeedに対しても異なる文脈が継続的に供給されます。単一の型を暗記するのではなく、意味空間への到達経路を多様化させながら、反射回路を強化していきます。
                </div>
                <div className="">
                  評価の中心は一致ではなく、適合です。AIの発話が終了した瞬間から反応時間（reaction latency）の計測が開始され、ユーザーの返答発話は音声認識および添削パイプラインによって解析されます。評価は、(1) 反応速度、(2) 流暢性（無音区間・言い直し・詰まりなどの指標）、(3) 文法自然度、(4) 文脈適合性（その状況に対して意味的に成立しているか）といった複数の観測量を統合して行われます。ユーザーが別の表現を選択した場合でも、その状況に対して自然かつ即応的であればReflexは成立していると判断され、当該Seedのトレーニングは前進したと判定されます。   すなわち、SPDSは「意味空間に対する即応性能」を最適化するモデルです。成功時にはstabilityが増加し、失敗時にはstabilityが低下して再出題のタイミングが早まります。
                </div>
                <div>
                  さらに、Seedごとの状態更新とは独立して、ユーザー全体のReflex指標も更新されます。具体的には、平均反応時間、流暢性の推移、成功率などが継続的に記録・分析されます。これにより、個別のSeedに対する学習の進捗と、ユーザー全体としての反射能力の成長が並行して可視化されます。
                </div>
                <div>
                  SPDSは英語を「覚える」ための学習ではなく、英語が「立ち上がる」状態を鍛えるトレーニングです。すなわち、フレーズの記憶はあくまで通過点にすぎず、訓練によって強化されるのは、意味空間が与えられたときに即座に到達できる反射回路です。SPDSの特異な点は、反射の想起を記憶減衰モデルによって時間軸上で最適化しつつ、意味空間上の多様なインスタンスを動的に生成することで、特定表現への依存を回避し、意味空間への到達経路の汎化を促進している点にあります。
                </div>
              </div>
            </div>
          </div>
        </div>
        <Price />
        <Footer />
      </div>
    </main>
  );
}
