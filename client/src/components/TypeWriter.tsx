import { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
  cursorChar?: string;
}

export function TypeWriter({ 
  text, 
  delay = 50, 
  className = '', 
  onComplete,
  showCursor = true,
  cursorChar = '▊'
}: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, delay, isComplete, onComplete]);

  return (
    <span className={className} data-testid="typewriter-text">
      {displayedText}
      {showCursor && !isComplete && (
        <span className="animate-pulse ml-1" data-testid="typewriter-cursor">{cursorChar}</span>
      )}
    </span>
  );
}

interface CommandSequence {
  command: string;
  output?: string;
  delay?: number;
}

interface TerminalCommandsProps {
  commands: CommandSequence[];
  onComplete?: () => void;
  className?: string;
}

export function TerminalCommands({ commands, onComplete, className = '' }: TerminalCommandsProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  const handleCommandComplete = () => {
    const currentCommand = commands[currentCommandIndex];
    if (currentCommand?.output) {
      setTimeout(() => {
        setShowOutput(true);
        setTimeout(() => {
          moveToNextCommand();
        }, currentCommand.delay || 500);
      }, 200);
    } else {
      moveToNextCommand();
    }
  };

  const moveToNextCommand = () => {
    setShowOutput(false);
    if (currentCommandIndex < commands.length - 1) {
      setCurrentCommandIndex(currentCommandIndex + 1);
    } else {
      onComplete?.();
    }
  };

  if (currentCommandIndex >= commands.length) return null;

  const currentCommand = commands[currentCommandIndex];

  return (
    <div className={`space-y-2 font-mono ${className}`} data-testid="terminal-commands">
      {commands.slice(0, currentCommandIndex).map((cmd, index) => (
        <div key={index} className="space-y-1" data-testid={`command-${index}`}>
          <div className="flex items-center gap-2 text-primary">
            <span data-testid="prompt">$</span>
            <span data-testid="command-text">{cmd.command}</span>
          </div>
          {cmd.output && (
            <div className="text-muted-foreground pl-4" data-testid="command-output">
              {cmd.output}
            </div>
          )}
        </div>
      ))}
      
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-primary">
          <span data-testid="current-prompt">$</span>
          <TypeWriter 
            text={currentCommand.command} 
            delay={30}
            onComplete={handleCommandComplete}
            data-testid="current-command"
          />
        </div>
        {showOutput && currentCommand.output && (
          <div 
            className="text-muted-foreground pl-4 animate-in fade-in duration-200"
            data-testid="current-output"
          >
            {currentCommand.output}
          </div>
        )}
      </div>
    </div>
  );
}
