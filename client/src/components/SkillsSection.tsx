import { TerminalWindow } from './TerminalWindow';
import { SkillBar } from './SkillBar';

export function SkillsSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-muted/30 scroll-animate" id="skills" data-testid="section-skills">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3" data-testid="heading-skills">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-primary mb-4" />
          <p className="text-xl text-muted-foreground max-w-2xl" data-testid="text-skills-subtitle">
            Core technologies and frameworks I work with daily
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <TerminalWindow title="~/languages.log">
            <div className="space-y-4" data-testid="div-languages">
              <SkillBar name="Java" level={95} icon="▪" />
              <SkillBar name="JavaScript/TypeScript" level={90} icon="▪" />
              <SkillBar name="Python" level={85} icon="▪" />
              <SkillBar name="C#" level={80} icon="▪" />
              <SkillBar name="Go" level={75} icon="▪" />
              <SkillBar name="PHP" level={78} icon="▪" />
            </div>
          </TerminalWindow>
          
          <TerminalWindow title="~/frameworks.log">
            <div className="space-y-4" data-testid="div-frameworks">
              <SkillBar name="Spigot/Paper API" level={95} icon="▪" />
              <SkillBar name="Discord JDA" level={92} icon="▪" />
              <SkillBar name="React/Next.js" level={88} icon="▪" />
              <SkillBar name="Node.js/Express" level={85} icon="▪" />
              <SkillBar name=".NET Core" level={80} icon="▪" />
              <SkillBar name="FastAPI/Flask" level={82} icon="▪" />
            </div>
          </TerminalWindow>
          
          <TerminalWindow title="~/databases.log">
            <div className="space-y-4" data-testid="div-databases">
              <SkillBar name="MySQL/PostgreSQL" level={90} icon="▪" />
              <SkillBar name="MongoDB" level={85} icon="▪" />
              <SkillBar name="Redis" level={88} icon="▪" />
              <SkillBar name="SQLite" level={90} icon="▪" />
            </div>
          </TerminalWindow>
          
          <TerminalWindow title="~/specializations.log">
            <div className="space-y-4" data-testid="div-specializations">
              <SkillBar name="Minecraft Plugins" level={95} icon="▪" />
              <SkillBar name="Discord Bots" level={92} icon="▪" />
              <SkillBar name="Full-Stack Web Apps" level={88} icon="▪" />
              <SkillBar name="REST APIs" level={90} icon="▪" />
              <SkillBar name="Real-time Systems" level={87} icon="▪" />
              <SkillBar name="Cloud Architecture" level={83} icon="▪" />
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
