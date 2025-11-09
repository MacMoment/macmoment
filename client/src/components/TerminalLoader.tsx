import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface TerminalLoaderProps {
  tasks: string[];
  duration?: number;
  onComplete?: () => void;
}

export function TerminalLoader({ tasks, duration = 3000, onComplete }: TerminalLoaderProps) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const taskDuration = duration / tasks.length;
    const progressIncrement = 100 / tasks.length;

    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + (progressIncrement / 20);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 200);
          return 100;
        }
        return next;
      });
    }, taskDuration / 20);

    const taskInterval = setInterval(() => {
      setCurrentTaskIndex(prev => {
        if (prev >= tasks.length - 1) {
          clearInterval(taskInterval);
          return prev;
        }
        return prev + 1;
      });
    }, taskDuration);

    return () => {
      clearInterval(interval);
      clearInterval(taskInterval);
    };
  }, [tasks, duration, onComplete]);

  return (
    <div className="space-y-4 font-mono" data-testid="terminal-loader">
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 text-sm transition-opacity duration-200 ${
              index <= currentTaskIndex ? 'opacity-100' : 'opacity-30'
            }`}
            data-testid={`loader-task-${index}`}
          >
            <span className={index === currentTaskIndex ? 'text-primary' : 'text-muted-foreground'}>
              {index < currentTaskIndex ? '✓' : index === currentTaskIndex ? '⟳' : '○'}
            </span>
            <span className={index === currentTaskIndex ? 'text-foreground' : 'text-muted-foreground'}>
              {task}
            </span>
          </div>
        ))}
      </div>
      <Progress value={progress} className="h-2" data-testid="progress-bar" />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span data-testid="progress-percentage">{Math.round(progress)}%</span>
        <span data-testid="task-counter">{currentTaskIndex + 1} / {tasks.length}</span>
      </div>
    </div>
  );
}

interface CompileAnimationProps {
  files: string[];
  onComplete?: () => void;
}

export function CompileAnimation({ files, onComplete }: CompileAnimationProps) {
  const [currentFileIndex, setCurrentFileIndex] = useState(0);

  useEffect(() => {
    if (currentFileIndex < files.length) {
      const timeout = setTimeout(() => {
        setCurrentFileIndex(currentFileIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => onComplete?.(), 300);
    }
  }, [currentFileIndex, files.length, onComplete]);

  return (
    <div className="space-y-1 font-mono text-sm" data-testid="compile-animation">
      {files.slice(0, currentFileIndex + 1).map((file, index) => (
        <div
          key={index}
          className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-100"
          data-testid={`compile-file-${index}`}
        >
          <span className="text-primary" data-testid="compile-icon">→</span>
          <span className="text-muted-foreground">Compiling</span>
          <span className="text-foreground">{file}</span>
          {index === currentFileIndex && (
            <span className="text-primary animate-pulse" data-testid="compile-loading">...</span>
          )}
        </div>
      ))}
      {currentFileIndex >= files.length && (
        <div className="flex items-center gap-2 text-primary font-bold pt-2 animate-in fade-in duration-200" data-testid="compile-complete">
          <span>✓</span>
          <span>Build successful!</span>
        </div>
      )}
    </div>
  );
}
