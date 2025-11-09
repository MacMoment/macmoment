import { TerminalWindow } from "./TerminalWindow";
import { Code2, Server, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-16 bg-muted/30 scroll-animate"
      id="about"
      data-testid="section-about"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            data-testid="heading-about"
          >
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <TerminalWindow title="~/bio.txt">
            <div
              className="space-y-4 font-mono text-sm"
              data-testid="div-bio-content"
            >
              <p className="text-primary" data-testid="text-greeting">
                {">"} Hello, I'm MacMoment
              </p>
              <p
                className="text-foreground leading-relaxed"
                data-testid="text-bio"
              >
                A passionate plugin developer and web engineer specializing in
                creating robust, high-performance systems for Minecraft servers
                and Discord communities. I focus on building professional,
                user-friendly interfaces and cross-platform integrations that
                enhance the gaming and community experience.
              </p>
              <p className="text-muted-foreground" data-testid="text-approach">
                {">"} My approach emphasizes performance, ease of setup, and
                clear aesthetic design.
              </p>
            </div>
          </TerminalWindow>

          <div className="grid gap-4">
            <TerminalWindow title="~/stats.sh">
              <div
                className="space-y-3 font-mono text-sm"
                data-testid="div-stats"
              >
                <div
                  className="flex items-center gap-3"
                  data-testid="stat-projects"
                >
                  <Code2
                    className="w-5 h-5 text-primary"
                    data-testid="icon-projects"
                  />
                  <span className="text-muted-foreground">
                    Projects Completed:
                  </span>
                  <span className="text-primary font-bold">50+</span>
                </div>
                <div
                  className="flex items-center gap-3"
                  data-testid="stat-plugins"
                >
                  <Server
                    className="w-5 h-5 text-accent"
                    data-testid="icon-plugins"
                  />
                  <span className="text-muted-foreground">Active Plugins:</span>
                  <span className="text-accent font-bold">8</span>
                </div>
                <div
                  className="flex items-center gap-3"
                  data-testid="stat-experience"
                >
                  <Zap
                    className="w-5 h-5 text-chart-4"
                    data-testid="icon-experience"
                  />
                  <span className="text-muted-foreground">
                    Years Experience:
                  </span>
                  <span className="text-chart-4 font-bold">5+</span>
                </div>
              </div>
            </TerminalWindow>

            <TerminalWindow title="~/focus.log">
              <div
                className="space-y-2 font-mono text-xs"
                data-testid="div-focus"
              >
                <p className="text-primary" data-testid="focus-gui">
                  [✓] Professional GUI-based systems
                </p>
                <p className="text-accent" data-testid="focus-integration">
                  [✓] Discord & Minecraft Integration
                </p>
                <p className="text-chart-2" data-testid="focus-automation">
                  [✓] Staff management & automation
                </p>
                <p className="text-chart-4" data-testid="focus-performance">
                  [✓] Performance optimization
                </p>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
}
