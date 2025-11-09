import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-background"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="space-y-4">
                <Badge variant="outline" className="font-mono text-xs border-primary/50" data-testid="badge-status">
                  Available for Projects
                </Badge>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="heading-name">
                  MacMoment
                </h1>
                
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium" data-testid="text-role">
                  Expert Minecraft Plugin Developer
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl" data-testid="text-description">
                  Specialized in crafting high-performance Minecraft server plugins, Discord integrations, 
                  and full-stack web applications. From game systems to enterprise solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3" data-testid="div-cta-buttons">
                <Button size="lg" asChild data-testid="button-view-projects">
                  <a href="#projects" className="gap-2">
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild data-testid="button-contact">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t" data-testid="div-social-links">
                <span className="text-sm text-muted-foreground">Connect:</span>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" asChild data-testid="button-discord">
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                      <SiDiscord className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild data-testid="button-github">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild data-testid="button-email">
                    <a href="mailto:contact@macmoment.dev">
                      <Mail className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150" data-testid="div-hero-visual">
              <div className="space-y-6">
                <div className="bg-card border rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/50" />
                      <div className="w-3 h-3 rounded-full bg-chart-4/50" />
                      <div className="w-3 h-3 rounded-full bg-primary/50" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">terminal</span>
                  </div>
                  <div className="font-mono text-sm space-y-2 text-muted-foreground">
                    <div className="flex gap-2">
                      <span className="text-primary">$</span>
                      <span>cat expertise.txt</span>
                    </div>
                    <div className="pl-4 space-y-1 text-foreground">
                      <div>✓ Java & Spigot API</div>
                      <div>✓ Discord JDA Integration</div>
                      <div>✓ Database Design</div>
                      <div>✓ Performance Optimization</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-card border rounded-lg p-4 text-center hover-elevate transition-all duration-200">
                    <div className="text-3xl font-bold text-primary" data-testid="stat-projects">50+</div>
                    <div className="text-xs text-muted-foreground mt-1">Projects</div>
                  </div>
                  <div className="bg-card border rounded-lg p-4 text-center hover-elevate transition-all duration-200">
                    <div className="text-3xl font-bold text-primary" data-testid="stat-years">5+</div>
                    <div className="text-xs text-muted-foreground mt-1">Years</div>
                  </div>
                  <div className="bg-card border rounded-lg p-4 text-center hover-elevate transition-all duration-200">
                    <div className="text-3xl font-bold text-primary" data-testid="stat-clients">50K+</div>
                    <div className="text-xs text-muted-foreground mt-1">Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
