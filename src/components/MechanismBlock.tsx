import AnimatedSection from "./AnimatedSection";

type MechanismItem = {
  label: string;
  description: string;
};

type MechanismBlockProps = {
  number: string;
  title: string;
  paragraphs: string[];
  items?: MechanismItem[];
  closing?: string;
  delay?: number;
};

export default function MechanismBlock({
  number,
  title,
  paragraphs,
  items = [],
  closing,
  delay = 0,
}: MechanismBlockProps) {
  return (
    <AnimatedSection delay={delay} duration={700} axis="y" distance={16}>
      <div className="space-y-12 border-t border-muted/40 py-20 text-base leading-relaxed">
        <h3 className="text-2xl font-bold tracking-[-0.01em]">
          <AnimatedSection
            axis="x"
            distance={8}
            duration={600}
            delay={delay}
            className="mr-2 inline-block text-muted"
          >
            {number} —
          </AnimatedSection>
          {title}
        </h3>

        <div className="space-y-4">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {items.length > 0 ? (
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={item.label} className="space-y-1">
                <p className="font-semibold tracking-[-0.01em]">{item.label}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        ) : null}

        {closing ? <p>{closing}</p> : null}
      </div>
    </AnimatedSection>
  );
}
