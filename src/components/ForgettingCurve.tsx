// src/components/ForgettingCurve.tsx

export default function ForgettingCurve() {
    const STROKE = "rgba(0,0,0,0.45)";
    const FILL = "rgba(0,0,0,0.7)";
    const LABEL = "rgba(0,0,0,0.8)";

    return (
        <div className="mx-auto w-full max-w-[640px]">
            <div className="mb-4 space-y-1">
                <div className="text-sm font-semibold tracking-[0.12em] uppercase text-black/60">
                    Memory Decay Over Time
                </div>
                <div className="text-sm text-black/60">
                    Review Comparison
                </div>
            </div>

            <svg
                viewBox="0 0 640 420"
                className="w-full h-auto"
                role="img"
                aria-label="Forgetting curve with review points"
            >
                {/* Axes */}
                <g stroke={STROKE} strokeWidth="1.2" fill="none">
                    <line x1="80" y1="40" x2="80" y2="360" />
                    <line x1="80" y1="360" x2="600" y2="360" />
                </g>

                {/* Axis labels */}
                <text x="40" y="24" fontSize="16" fill={LABEL}>
                    Savings
                </text>
                <text x="560" y="395" fontSize="16" fill={LABEL}>
                    Time
                </text>

                {/* Decay curve */}
                <path
                    d="
                        M 80 60
                        C 160 140,
                          260 210,
                          400 270
                        S 560 320,
                          600 330
                    "
                    fill="none"
                    stroke={STROKE}
                    strokeWidth="1.6"
                />

                {/* Review 1 */}
                <circle cx="200" cy="160" r="4" fill={FILL} />
                <line
                    x1="200"
                    y1="170"
                    x2="200"
                    y2="360"
                    stroke={STROKE}
                    strokeWidth="1"
                    strokeDasharray="4 4"
                />
                <text x="170" y="135" fontSize="14" fill={LABEL}>
                    Review 1
                </text>

                {/* Review 2 */}
                <circle cx="350" cy="249" r="4" fill={FILL} />
                <line
                    x1="350"
                    y1="260"
                    x2="350"
                    y2="360"
                    stroke={STROKE}
                    strokeWidth="1"
                    strokeDasharray="4 4"
                />
                <text x="320" y="225" fontSize="14" fill={LABEL}>
                    Review 2
                </text>

                {/* Review 3 */}
                <circle cx="480" cy="300" r="4" fill={FILL} />
                <line
                    x1="480"
                    y1="300"
                    x2="480"
                    y2="360"
                    stroke={STROKE}
                    strokeWidth="1"
                    strokeDasharray="4 4"
                />
                <text x="450" y="275" fontSize="14" fill={LABEL}>
                    Review 3
                </text>
            </svg>
        </div>
    );
}
