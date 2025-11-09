import { Card } from "@/components/ui/card";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function TerminalWindow({ title = "terminal", children, className = "", animate = false }: TerminalWindowProps) {
  return (
    <Card className={`overflow-visible ${className}`} data-testid="card-terminal">
      <div className="flex items-center gap-2 bg-secondary px-4 py-2 border-b" data-testid="div-terminal-header">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/50" data-testid="div-close-dot" />
          <div className="w-3 h-3 rounded-full bg-chart-4/50" data-testid="div-minimize-dot" />
          <div className="w-3 h-3 rounded-full bg-primary/50" data-testid="div-maximize-dot" />
        </div>
        <span className="text-xs font-mono text-muted-foreground ml-2" data-testid="text-terminal-title">{title}</span>
      </div>
      <div className="p-6" data-testid="div-terminal-content">
        {children}
      </div>
    </Card>
  );
}
