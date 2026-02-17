// src/components/ReflexSection.tsx
import Container from "./Container";
import AnimatedSection from "./AnimatedSection";
import ReflexFlow from "./ReflexFlow";

export default function ReflexSection() {
    return (
        <section className="text-primary">
            <Container>
                <div className="space-y-24">
                    {/* Content */}
                    <div className="grid items-center gap-0 md:grid-cols-2">
                        {/* LEFT: SVG Flow */}
                        <AnimatedSection axis="y" distance={16}>
                            <ReflexFlow />
                        </AnimatedSection>
                        <AnimatedSection axis="y" distance={16} delay={120}>
                            <div className="flex justify-center md:justify-end">
                                <div className="aspect-[9/16] w-[460px] rounded-2xl border border-gray-800 bg-primary/5 flex items-center justify-center">
                                    <span className="text-muted tracking-wider text-sm">
                                        PREVIEW
                                    </span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                </div>
            </Container>
        </section>
    );
}
