import { TerminalWindow } from './TerminalWindow';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  author: string;
  role: string;
  content: string;
  rating: number;
  project?: string;
}

export function TestimonialCard({ author, role, content, rating, project }: TestimonialCardProps) {
  return (
    <TerminalWindow title={`~/testimonials/${author.toLowerCase().replace(/\s+/g, '-')}.log`}>
      <div className="space-y-3 font-mono text-sm" data-testid={`testimonial-${author.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="flex items-center gap-2 text-primary" data-testid={`div-author-${author}`}>
          <span className="text-muted-foreground">{'>'}</span>
          <span className="font-bold">{author}</span>
          <span className="text-muted-foreground text-xs">@{role}</span>
        </div>
        
        <div className="flex gap-1" data-testid={`div-rating-${author}`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'fill-chart-4 text-chart-4' : 'text-muted-foreground'}`}
              data-testid={`star-${i}`}
            />
          ))}
        </div>
        
        <p className="text-foreground leading-relaxed border-l-2 border-primary pl-3" data-testid={`text-content-${author}`}>
          "{content}"
        </p>
        
        {project && (
          <div className="text-xs text-muted-foreground" data-testid={`text-project-${author}`}>
            <span className="text-accent">Project:</span> {project}
          </div>
        )}
      </div>
    </TerminalWindow>
  );
}
