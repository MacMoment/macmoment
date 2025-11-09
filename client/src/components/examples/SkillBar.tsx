import { SkillBar } from '../SkillBar';

export default function SkillBarExample() {
  return (
    <div className="space-y-4 p-4">
      <SkillBar name="Java" level={95} icon="☕" />
      <SkillBar name="JavaScript" level={85} icon="⚡" />
    </div>
  );
}
