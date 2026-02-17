import AnimatedSection from "./AnimatedSection";

type Pattern = {
    key: string;
    title: string;
    description: string;
    caption: string;
    align: "right" | "left";
    delay: number;
};

const patterns: Pattern[] = [
    {
        key: "photo",
        title: "Photo",
        description:
            "スマートグラスやスマートフォンで撮影した画像から、状況に即した英語表現を生成。",
        caption: "PHOTO INPUT",
        align: "right",
        delay: 0,
    },
    {
        key: "voice",
        title: "Voice",
        description:
            "英語で言えなかった内容を入力。文脈を保持したまま構文化。",
        caption: "VOICE INPUT",
        align: "left",
        delay: 120,
    },
    {
        key: "text",
        title: "Text",
        description: "スクリーンショットや作業中のフレーズを即時登録。",
        caption: "TEXT INPUT",
        align: "right",
        delay: 240,
    },
];

export default function PatternRow() {
    return (<>
        <div className="space-y-28">
            {patterns.map((p) => {
                const text = (
                    <AnimatedSection axis="y" distance={16} delay={p.delay}>
                        <div className="space-y-3 max-w-content">
                            <p className="text-sm font-semibold tracking-[0.12em] uppercase text-primary">
                                {p.title}
                            </p>
                            <p className="text-primary/80 leading-relaxed">
                                {p.description}
                            </p>
                        </div>
                    </AnimatedSection>
                );

                const visual = (
                    <AnimatedSection axis="y" distance={16} delay={p.delay + 80}>
                        <div
                            className={[
                                "flex justify-center",
                                p.align === "left"
                                    ? "md:justify-start"
                                    : "md:justify-end",
                            ].join(" ")}
                        >
                            <div className="aspect-square w-[320px] rounded-xl border border-gray-200 bg-primary/5 flex items-center justify-center">
                                <span className="text-muted tracking-wider text-sm">
                                    {p.caption}
                                </span>
                            </div>
                        </div>
                    </AnimatedSection>
                );

                return (
                    <div
                        key={p.key}
                        className="grid items-center gap-12 md:grid-cols-2"
                    >
                        {/* mobile */}
                        <div className="md:hidden space-y-10">
                            {text}
                            {visual}
                        </div>

                        {/* desktop */}
                        <div className="hidden md:block">
                            {p.align === "left" ? visual : text}
                        </div>
                        <div className="hidden md:block">
                            {p.align === "left" ? text : visual}
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="py-20">
            目的別フレーズプリセットも用意
            ・TOEIC800以上5000千フレーズ
            ・海外
        </div>
    </>
    );
}
