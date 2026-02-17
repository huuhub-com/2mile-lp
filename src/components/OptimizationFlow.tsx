// src/components/OptimizationFlow.tsx
export default function OptimizationFlow() {
    return (
        <div className="mx-auto w-full max-w-[720px]">
            <div className="mb-4 space-y-1">
                <div className="text-sm font-semibold tracking-[0.12em] uppercase text-black/60">
                    Memory Decay Over Time
                </div>
                <div className="text-sm text-black/60">Review Comparison</div>
            </div>
            <svg
                viewBox="0 0 720 360"
                className="h-auto w-full"
                role="img"
                aria-label="Forgetting curve optimization flow"
            >
                <defs>
                    <marker
                        id="arrowOpt"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto"
                    >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                    </marker>
                </defs>

                {/* Axes */}
                <g
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="text-primary/20"
                    fill="none"
                >
                    <path d="M 60 40 L 60 300" />
                    <path d="M 60 300 L 380 300" />
                </g>

                {/* Forgetting Curve */}
                <path
                    d="M 60 90 Q 200 140 360 260"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-primary/60"
                />

                {/* Reinforcement Points */}
                <circle cx="160" cy="150" r="5" className="fill-primary" />
                <circle cx="260" cy="210" r="5" className="fill-primary" />

                {/* Reinforcement Arrows */}
                <g
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="text-primary/30"
                    fill="none"
                >
                    <path d="M 160 120 L 160 150" markerEnd="url(#arrowOpt)" />
                    <path d="M 260 170 L 260 210" markerEnd="url(#arrowOpt)" />
                </g>

                {/* Flow to DB */}
                <path
                    d="M 380 300 L 470 300"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    markerEnd="url(#arrowOpt)"
                    className="text-primary/40"
                />

                {/* Database Cylinder */}
                <g transform="translate(470,180)">
                    <ellipse
                        cx="100"
                        cy="0"
                        rx="70"
                        ry="18"
                        className="fill-primary/5 stroke-primary/30"
                        strokeWidth="1.2"
                    />
                    <rect
                        x="30"
                        y="0"
                        width="140"
                        height="100"
                        className="fill-primary/5 stroke-primary/30"
                        strokeWidth="1.2"
                    />
                    <ellipse
                        cx="100"
                        cy="100"
                        rx="70"
                        ry="18"
                        className="fill-primary/5 stroke-primary/30"
                        strokeWidth="1.2"
                    />
                </g>

                {/* Labels */}
                <g className="fill-primary text-primary">
                    <text x="70" y="30" fontSize="16" className="fill-primary/60">
                        Memory
                    </text>

                    <text x="340" y="330" fontSize="14" className="fill-primary/60">
                        Time
                    </text>

                    <text x="520" y="160" fontSize="16" className="fill-primary/80">
                        Optimized DB
                    </text>

                    <text x="150" y="110" fontSize="14" className="fill-primary/70">
                        Review
                    </text>

                    <text x="250" y="160" fontSize="14" className="fill-primary/70">
                        Review
                    </text>
                </g>
            </svg>
        </div>
    );
}
