import Container from "./Container";
import AnimatedSection from "./AnimatedSection";
export default function SecondSection() {
    return (
        <section className="flex h-screen items-center ">
            <Container>
                <div className="grid items-center gap-16 md:grid-cols-2">

                    {/* Left: Text */}
                    <AnimatedSection axis="y" distance={16} duration={700}>
                        <div className="space-y-8 max-w-content">

                            <h2 className="text-lead font-medium text-primary leading-relaxed">
                                あなたの生活シーンを起点にした
                                <br />
                                <span className="text-primary">英語即応トレーニングを行います</span>
                            </h2>

                        </div>
                    </AnimatedSection>

                    {/* Right: Phone placeholder */}
                    <AnimatedSection
                        axis="y"
                        distance={16}
                        duration={700}
                        delay={120}
                    >
                        <div className="flex justify-center md:justify-end">
                            <div className="aspect-[9/16] w-[460px] rounded-2xl border border-primary/10 bg-primary/5 flex items-center justify-center">
                                <span className="text-sm text-muted tracking-wider">
                                    Preview
                                </span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Container>
        </section>
    );
}
