// src/components/ReflexFlow.tsx
export default function ReflexFlow() {
    return (
        <div className="mx-auto w-full max-w-[520px]">
            <svg
                viewBox="0 0 520 420"
                className="h-auto w-full"
                role="img"
                aria-label="Reflex flow: Trigger → Respond → Score → Register → Loop"
            >
                {/* style tokens */}
                <defs>
                    <marker
                        id="arrow"
                        viewBox="0 0 10 10"
                        refX="7.5"
                        refY="5"
                        markerWidth="7"
                        markerHeight="7"
                        orient="auto-start-reverse"
                    >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" className="text-primary/30" />
                    </marker>
                </defs>

                {/* main stroke color */}
                <g className="text-primary/30" stroke="currentColor" strokeWidth="1.25" fill="none">
                    {/* vertical line segments with arrows */}
                    <path d="M 110 92 L 110 128" markerEnd="url(#arrow)" />
                    <path d="M 110 172 L 110 208" markerEnd="url(#arrow)" />
                    <path d="M 110 252 L 110 288" markerEnd="url(#arrow)" />
                    <path d="M 110 332 L 110 356" />

                    {/* loop corner */}
                    <path d="M 110 356 L 200 356" />
                    <path d="M 200 356 L 200 388" markerEnd="url(#arrow)" />
                </g>

                {/* trigger dot */}
                <circle cx="110" cy="70" r="4" className="fill-primary/60" />

                {/* labels */}
                <g className="fill-primary text-primary">
                    {/* small labels */}
                    <text x="50" y="76" className="fill-primary/60" fontSize="16">
                        Notify
                    </text>

                    <text x="30" y="158" fontSize="16" className="fill-primary/90">
                        Respond & Shadow
                    </text>
                    <text x="85" y="238" fontSize="16" className="fill-primary/90">
                        Score
                    </text>
                    <text x="80" y="318" fontSize="16" className="fill-primary/90">
                        Record
                    </text>

                    {/* loop label */}
                    <text x="188" y="408" fontSize="14" className="fill-primary/60">
                        Loop
                    </text>
                </g>
            </svg>
        </div>
    );
}
