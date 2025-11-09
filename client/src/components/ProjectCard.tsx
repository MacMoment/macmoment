import { useState } from 'react';
import { TerminalWindow } from './TerminalWindow';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Code2 } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  color: 'primary' | 'accent' | 'chart-2' | 'chart-4';
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  codeSnippet: string;
  status?: string;
  metrics?: Metric[];
}

export function ProjectCard({ title, description, tags, codeSnippet, status = "Active", metrics }: ProjectCardProps) {
  const [showCode, setShowCode] = useState(false);

  const getMetricColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      'primary': 'text-primary',
      'accent': 'text-accent',
      'chart-2': 'text-chart-2',
      'chart-4': 'text-chart-4'
    };
    return colorMap[color] || 'text-primary';
  };

  return (
    <TerminalWindow title={`~/projects/${title.toLowerCase().replace(/\s+/g, '-')}$`} className="h-full hover-elevate transition-all duration-200">
      <div className="space-y-4" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-bold font-mono text-primary" data-testid={`heading-project-${title}`}>
              {title}
            </h3>
            <Badge variant="secondary" className="font-mono text-xs" data-testid={`badge-status-${title}`}>
              {status}
            </Badge>
          </div>
          <div className="p-3 rounded-md bg-secondary/50 border border-border">
            <Code2 className="w-6 h-6 text-primary" data-testid={`icon-code-${title}`} />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-description-${title}`}>
          {description}
        </p>
        
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-4 p-4 rounded-md bg-muted/50 border border-border" data-testid={`div-metrics-${title}`}>
            {metrics.map((metric, index) => (
              <div key={index} className="text-center space-y-1" data-testid={`metric-${title}-${index}`}>
                <div className={`text-xl font-bold font-mono ${getMetricColorClass(metric.color)}`} data-testid={`metric-value-${index}`}>
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground font-mono" data-testid={`metric-label-${index}`}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex flex-wrap gap-2" data-testid={`div-tags-${title}`}>
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono text-xs" data-testid={`badge-tag-${tag}`}>
              {tag}
            </Badge>
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowCode(!showCode)}
          className="font-mono w-full justify-between"
          data-testid={`button-toggle-code-${title}`}
        >
          <span>$ cat source-code.txt</span>
          {showCode ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>
        
        {showCode && (
          <div className="bg-secondary rounded-md p-4 overflow-x-auto animate-in fade-in duration-300" data-testid={`div-code-${title}`}>
            <pre className="font-mono text-xs text-foreground">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        )}
      </div>
    </TerminalWindow>
  );
}
