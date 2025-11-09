import { useState, useEffect } from 'react';
import { Check, Loader2 } from 'lucide-react';

interface BootLine {
  text: string;
  delay: number;
  status?: 'loading' | 'success' | 'info';
}

const bootSequence: BootLine[] = [
  { text: 'Initializing portfolio system...', delay: 100, status: 'loading' },
  { text: 'Loading core modules...', delay: 300, status: 'loading' },
  { text: '> Loading React framework... OK', delay: 400, status: 'success' },
  { text: '> Initializing component tree... OK', delay: 500, status: 'success' },
  { text: '> Mounting UI elements... OK', delay: 600, status: 'success' },
  { text: 'Establishing connections...', delay: 700, status: 'loading' },
  { text: '> Database connection... OK', delay: 800, status: 'success' },
  { text: '> API endpoints... OK', delay: 900, status: 'success' },
  { text: 'System ready. Welcome to MacMoment\'s Portfolio', delay: 1100, status: 'info' },
];

interface TerminalBootSequenceProps {
  onComplete?: () => void;
}

export function TerminalBootSequence({ onComplete }: TerminalBootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (visibleLines < bootSequence.length) {
      const timeout = setTimeout(() => {
        setVisibleLines(visibleLines + 1);
      }, bootSequence[visibleLines]?.delay || 100);
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      setTimeout(() => {
        onComplete?.();
      }, 500);
    }
  }, [visibleLines, isComplete, onComplete]);

  if (isComplete) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      data-testid="div-boot-sequence"
    >
      <div className="w-full max-w-2xl p-8 space-y-2 font-mono text-sm">
        {bootSequence.slice(0, visibleLines).map((line, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-200"
            data-testid={`boot-line-${index}`}
          >
            {line.status === 'loading' && (
              <Loader2 className="w-4 h-4 text-primary animate-spin" data-testid="icon-loading" />
            )}
            {line.status === 'success' && (
              <Check className="w-4 h-4 text-primary" data-testid="icon-success" />
            )}
            {line.status === 'info' && (
              <span className="text-primary" data-testid="icon-info">$</span>
            )}
            <span 
              className={`${
                line.status === 'info' ? 'text-primary font-bold' : 'text-muted-foreground'
              }`}
              data-testid={`boot-text-${index}`}
            >
              {line.text}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-4">
          <span className="text-primary animate-pulse" data-testid="cursor">▊</span>
        </div>
      </div>
    </div>
  );
}
