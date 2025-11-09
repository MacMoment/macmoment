import { TerminalWindow } from './TerminalWindow';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Github } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export function ContactSection() {
  const handleContact = (type: string) => {
    console.log(`${type} contact triggered`);
    
    if (type === 'discord') {
      window.open('https://discord.com', '_blank');
    } else if (type === 'email') {
      window.location.href = 'mailto:contact@macmoment.dev';
    } else if (type === 'github') {
      window.open('https://github.com', '_blank');
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 scroll-animate" id="contact" data-testid="section-contact">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3" data-testid="heading-contact">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Let's build something amazing together
          </p>
        </div>
        
        <TerminalWindow title="~/contact-methods.txt">
          <div className="space-y-6" data-testid="div-contact-methods">
            <div className="space-y-2">
              <p className="font-mono text-sm text-primary" data-testid="text-prompt-discord">
                $ discord --user @MacMoment
              </p>
              <Button
                variant="outline"
                className="w-full justify-start font-mono gap-2"
                onClick={() => handleContact('discord')}
                data-testid="button-discord"
              >
                <SiDiscord className="w-5 h-5" />
                <span>@MacMoment</span>
              </Button>
            </div>
            
            <div className="space-y-2">
              <p className="font-mono text-sm text-primary" data-testid="text-prompt-email">
                $ email --send contact@macmoment.dev
              </p>
              <Button
                variant="outline"
                className="w-full justify-start font-mono gap-2"
                onClick={() => handleContact('email')}
                data-testid="button-email"
              >
                <Mail className="w-5 h-5" />
                <span>contact@macmoment.dev</span>
              </Button>
            </div>
            
            <div className="space-y-2">
              <p className="font-mono text-sm text-primary" data-testid="text-prompt-github">
                $ github --follow MacMoment
              </p>
              <Button
                variant="outline"
                className="w-full justify-start font-mono gap-2"
                onClick={() => handleContact('github')}
                data-testid="button-github"
              >
                <Github className="w-5 h-5" />
                <span>github.com/MacMoment</span>
              </Button>
            </div>
            
            <div className="pt-4 border-t border-border">
              <p className="font-mono text-xs text-muted-foreground text-center" data-testid="text-availability">
                {'>'} Available for freelance projects and commissions
              </p>
              <p className="font-mono text-xs text-accent text-center mt-1" data-testid="text-response-time">
                {'>'} Typical response time: 24 hours
              </p>
            </div>
          </div>
        </TerminalWindow>
        
        <div className="mt-12 text-center">
          <div className="font-mono text-sm text-muted-foreground" data-testid="div-footer-prompt">
            <span className="text-primary">developer@macmoment:~$</span>
            <span className="cursor-blink ml-2">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}
