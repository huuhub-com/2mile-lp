// src/components/VectorSpaceGraph.tsx
type Vec3 = { x: number; y: number; z: number };

type Item = {
    id: "r1" | "r2" | "r3";
    label: string;
    v: Vec3;
};

const DEFAULT_ITEMS: Item[] = [
    { id: "r1", label: "Queue 1", v: { x: -0.3, y: 1.2, z: 0.45 } },
    { id: "r2", label: "Queue 2", v: { x: 0.3, y: 0.8, z: 0.29 } },
    { id: "r3", label: "Queue 3", v: { x: 0.89, y: 0.41, z: 0.2 } },
];

function fmt(v: Vec3) {
    const f = (n: number) =>
        (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, ".0");
    return `[${f(v.x)}, ${f(v.y)}, ${f(v.z)}]`;
}

export default function VectorSpaceGraph({
    items = DEFAULT_ITEMS,
    title = "Vector Space",
    subtitle = "Review Comparison",
    showValues = true,
}: {
    items?: Item[];
    title?: string;
    subtitle?: string;
    showValues?: boolean;
}) {
    const W = 640;
    const H = 420;
    const origin = { x: 190, y: 280 };
    const s = 220;

    const axX = { x: 1.0, y: 0.0 };
    const axY = { x: 0.0, y: -1.0 };
    const axZ = { x: -0.62, y: 0.62 };

    const project = (v: Vec3) => {
        const px =
            origin.x +
            s * (v.x * axX.x + v.y * axY.x + v.z * axZ.x);
        const py =
            origin.y +
            s * (v.x * axX.y + v.y * axY.y + v.z * axZ.y);
        return { x: px, y: py };
    };

    const STROKE = "rgba(0,0,0,0.45)";
    const FILL = "rgba(0,0,0,0.7)";
    const LABEL = "rgba(0,0,0,0.8)";

    return (
        <div className="mx-auto w-full max-w-[640px]">
            <div className="mb-4 space-y-1">
                <div className="text-sm font-semibold tracking-[0.12em] uppercase text-black/60">
                    {title}
                </div>
                <div className="text-sm text-black/60">{subtitle}</div>
            </div>

            <svg
                viewBox={`0 0 ${W} ${H}`}
                className="h-auto w-full"
                role="img"
            >
                <defs>
                    <marker
                        id="arrow"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto"
                    >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill={STROKE} />
                    </marker>
                </defs>

                {/* axes */}
                <g stroke={STROKE} strokeWidth="1.2" fill="none">
                    <path
                        d={`M ${origin.x} ${origin.y} L ${origin.x + 420} ${origin.y}`}
                        markerEnd="url(#arrow)"
                    />
                    <path
                        d={`M ${origin.x} ${origin.y} L ${origin.x} ${origin.y - 250}`}
                        markerEnd="url(#arrow)"
                    />
                    <path
                        d={`M ${origin.x} ${origin.y} L ${origin.x - 120} ${origin.y + 120}`}
                        markerEnd="url(#arrow)"
                    />
                </g>

                {/* origin */}
                <circle cx={origin.x} cy={origin.y} r="3" fill={FILL} />

                {/* vectors */}
                {items.map((it) => {
                    const p = project(it.v);

                    return (
                        <g key={it.id}>
                            <path
                                d={`M ${origin.x} ${origin.y} L ${p.x} ${p.y}`}
                                stroke={STROKE}
                                strokeWidth="1.6"
                                fill="none"
                                markerEnd="url(#arrow)"
                            />
                 

                            <text
                                x={p.x + 10}
                                y={p.y - 8}
                                fontSize="16"
                                fill={LABEL}
                                fontWeight="500"
                            >
                                {it.label}
                                {showValues && (
                                    <tspan
                                        fontSize="14"
                                        fill="rgba(0,0,0,0.5)"
                                        fontFamily="monospace"
                                    >
                                        {" "}
                                        = {fmt(it.v)}
                                    </tspan>
                                )}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
