import { ProjectCard } from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <ProjectCard
      title="Example Plugin"
      description="A demonstration plugin showcasing advanced features"
      tags={['java', 'spigot-api']}
      codeSnippet="public class ExamplePlugin extends JavaPlugin {\n    @Override\n    public void onEnable() {\n        getLogger().info('Plugin enabled!');\n    }\n}"
      status="Active Development"
      metrics={[
        { label: 'Performance', value: 'A+', color: 'primary' },
        { label: 'Users', value: '1K+', color: 'accent' },
        { label: 'Uptime', value: '99%', color: 'chart-2' }
      ]}
    />
  );
}
