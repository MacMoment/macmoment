import { TestimonialCard } from './TestimonialCard';

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-muted/30" id="testimonials" data-testid="section-testimonials">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2 text-foreground" data-testid="heading-testimonials">
            <span className="text-primary">$</span> cat client-feedback.txt
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground font-mono text-sm" data-testid="text-testimonials-subtitle">
            What clients say about my work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            author="ServerOwner_Mike"
            role="minecraft-network"
            content="MacMoment delivered an outstanding anti-cheat solution that reduced our hacker reports by 85%. The performance impact is negligible and the detection accuracy is impressive. Highly recommended for any serious server."
            rating={5}
            project="MacAC Implementation"
          />
          
          <TestimonialCard
            author="DiscordAdmin_Sarah"
            role="community-manager"
            content="The Discord integration plugin transformed how we handle player reports. The embedded messages with action buttons make moderation so much easier. Professional work and great communication throughout the project."
            rating={5}
            project="Discord Bot Integration"
          />
          
          <TestimonialCard
            author="EventCoordinator_Alex"
            role="event-server"
            content="The lighting show importer is absolutely mind-blowing! We used it for our annual server event and it brought our concert to life in Minecraft. The synchronization was perfect and setup was straightforward."
            rating={5}
            project="Lighting Show System"
          />
          
          <TestimonialCard
            author="DevTeam_Chris"
            role="development-lead"
            content="Working with MacMoment was a breeze. Clean code, excellent documentation, and always responsive to questions. The refund system handles edge cases we didn't even think of. Will definitely hire again."
            rating={5}
            project="MacRefunds Plugin"
          />
        </div>
      </div>
    </section>
  );
}
