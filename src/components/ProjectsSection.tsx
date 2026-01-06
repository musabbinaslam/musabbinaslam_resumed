import { ExternalLink, Blocks, Gamepad2, LayoutDashboard, Brain } from 'lucide-react';

const projects = [
  {
    icon: Brain,
    title: 'URAME-SDLC Automation Platform',
    year: '2024',
    description: 'NLP-powered platform that converts natural language case studies into structured software requirements using SpaCy and Python. Streamlines the initial phase of SDLC by automating requirement extraction.',
    tags: ['Python', 'SpaCy', 'NLP', 'Automation'],
  },
  {
    icon: Gamepad2,
    title: 'Blockchain-Based Flappy Bird Game',
    year: '2024',
    description: 'Integrated cryptocurrency mechanics into a React-based game, enabling token-based scoring and blockchain reward logic using Ethereum smart contracts.',
    tags: ['React', 'Solidity', 'Ethereum', 'Web3.js'],
  },
  {
    icon: LayoutDashboard,
    title: 'CleanFlow POS System',
    year: '2026',
    description: 'Offline desktop Point of Sale system for small businesses featuring customer management, job tracking, payment processing, expense management, and double-entry bookkeeping with role-based access control.',
    tags: ['Desktop App', 'POS', 'Offline-First', 'Windows'],
  },
  {
    icon: Blocks,
    title: 'Blockchain Certificate Verifier',
    year: '2023',
    description: 'Built using Solidity and React to ensure document authenticity through blockchain verification, preventing fraudulent certificates.',
    tags: ['React', 'Solidity', 'Smart Contracts'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">// projects</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my skills in web development, mobile apps, and blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border-gradient rounded-xl p-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-mono text-sm">{project.year}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
