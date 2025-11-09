import { useEffect, useState, useRef } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  icon?: string;
}

export function SkillBar({ name, level, icon = "▪" }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(level), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level]);

  const filledBlocks = Math.floor((width / 100) * 20);
  const emptyBlocks = 20 - filledBlocks;

  return (
    <div ref={skillRef} className="space-y-1" data-testid={`skill-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex justify-between items-center font-mono text-sm">
        <span className="text-foreground" data-testid={`text-skill-name-${name}`}>
          {icon} {name}
        </span>
        <span className="text-primary font-bold" data-testid={`text-skill-level-${name}`}>
          {Math.round(width)}%
        </span>
      </div>
      <div className="font-mono text-xs text-primary" data-testid={`bar-skill-${name}`}>
        {'█'.repeat(filledBlocks)}
        <span className="text-muted-foreground">
          {'░'.repeat(emptyBlocks)}
        </span>
      </div>
    </div>
  );
}
