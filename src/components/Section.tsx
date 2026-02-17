import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ label, children, className = "" }: SectionProps) {
  return (
    <section
      className={`py-20 text-primary md:py-28 ${className}`.trim()}
    >
      <Container>
        <div className="space-y-10 md:space-y-14">
          <p className="text-sectionLabel font-medium uppercase tracking-[0.2em] text-muted text-center border-b border-t border-gray-400 py-50">
            {label}
          </p>
          {children}
        </div>
      </Container>
    </section>
  );
}
