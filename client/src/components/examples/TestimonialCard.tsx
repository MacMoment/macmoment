import { TestimonialCard } from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <TestimonialCard
      author="John Doe"
      role="server-owner"
      content="Excellent work on our custom plugin!"
      rating={5}
      project="Custom Anti-Cheat"
    />
  );
}
