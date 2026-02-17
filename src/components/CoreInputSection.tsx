import Container from "./Container";
import AnimatedSection from "./AnimatedSection";
import PatternRow from "./MechanismHeader";
import ReflexSection from "./ReflexSection";
import OptimizationFlow from "./OptimizationFlow";
import ForgettingCurve from "./ForgettingCurve";
import VectorSpaceGraph from "./VectorSpaceGraph";
export default function CoreInputSection() {
    return (
        <section className="py-32 text-primary">
            <Container>
                <div className="space-y-24">
                    <AnimatedSection axis="y" distance={16}>
                        <div className="text-center space-y-0 pt-20">
                            <div className="text-[clamp(56px,8vw,92px)] font-extrabold tracking-[-0.04em] text-primary/20">
                                01
                            </div>
                            <h3 className="text-[clamp(18px,2.4vw,28px)] font-semibold tracking-[-0.01em] mb-10 mt-[-10px]">
                                Input
                            </h3>
                            <p className="mx-auto text-primary/60 leading-relaxed">
                                生活シーンからネイティブが自然に使うフレーズを生成し、自動登録します。
                            </p>
                        </div>
                    </AnimatedSection>
                    <PatternRow />

                    <AnimatedSection axis="y" distance={16}>
                        <div className="text-center space-y-0 pt-60 pb-40">
                            <div className="text-[clamp(56px,8vw,92px)] font-extrabold tracking-[-0.04em] text-primary/20">
                                02
                            </div>
                            <h3 className="text-[clamp(18px,2.4vw,28px)] font-semibold tracking-[-0.01em] mb-10 mt-[-10px]">
                                Reflex
                            </h3>
                            <p className="mx-auto text-primary/60 leading-relaxed">
                                アプリから通知が届きます。01に基づいたAI会話で即応トレーニングをします。
                            </p>
                        </div>
                    </AnimatedSection>
                    <ReflexSection />
                    <AnimatedSection axis="y" distance={16}>
                        <div className="text-center space-y-0 pt-60">
                            <div className="text-[clamp(56px,8vw,92px)] font-extrabold tracking-[-0.04em] text-primary/20">
                                03
                            </div>
                            <h3 className="text-[clamp(18px,2.4vw,28px)] font-semibold tracking-[-0.01em] mb-10 mt-[-10px]">
                                Optimization
                            </h3>
                            <p className="mx-auto text-primary/60 leading-relaxed">
                                反応スコアを基に、
                                記憶時間減衰と意味空間構造の統合モデルで出題を最適化します。
                            </p>
                        </div>
                    </AnimatedSection>
                    <ForgettingCurve />
                    <VectorSpaceGraph/>
                </div>
            </Container>
        </section>
    );
}
