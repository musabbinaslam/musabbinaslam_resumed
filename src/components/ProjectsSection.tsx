import { Blocks, Gamepad2, LayoutDashboard, Brain, Workflow, UserSquare2, GitBranch, Phone } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    icon: Phone,
    title: 'CallsFlow.io',
    year: '2025',
    description: 'Specialized calling platform for insurance agents handling lead routing and call workflows. Architected and developed the full-stack platform solo. Currently generates $100K+ per quarter in revenue.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'WebRTC', 'Telephony APIs'],
    featured: true,
  },
  {
    icon: Brain,
    title: 'URAME — SDLC Automation Platform',
    year: '2024',
    description: 'NLP-powered tool that converts natural language case studies into structured software requirements using SpaCy and GPT-4. Reduced documentation time by 60% and streamlined the initial SDLC phase.',
    tags: ['Python', 'SpaCy', 'GPT-4', 'NLP'],
    featured: true,
  },
  {
    icon: Workflow,
    title: 'AI-Powered Workflow Automation',
    year: '2024',
    description: 'Custom AI development workflows using Cursor, Claude API, and GitHub Copilot — automated code review, documentation generation, and test case creation pipelines. Achieved 40% faster feature delivery.',
    tags: ['Claude API', 'GitHub Copilot', 'Cursor', 'Automation'],
    featured: true,
  },
  {
    icon: Gamepad2,
    title: 'Blockchain-Based Flappy Bird Game',
    year: '2024',
    description: 'Integrated Ethereum smart contracts into a React game for token-based scoring and crypto reward logic. Used AI tools for smart contract security analysis and game balance optimization.',
    tags: ['React', 'Solidity', 'Ethereum', 'Web3.js'],
    featured: false,
  },
  {
    icon: UserSquare2,
    title: 'Customer Portfolio Websites',
    year: '2025',
    description: 'Designed and developed personalised portfolio/investment dashboard websites for Hardwell Capital clients. Each site features dynamic data visualisations and responsive layouts built with the MERN stack.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    featured: false,
  },
  {
    icon: GitBranch,
    title: 'n8n Automation Pipelines',
    year: '2025',
    description: 'Engineered end-to-end automation pipelines for Hardwell Capital using n8n: lead capture → CRM sync → throttled SMTP email sequences → Google Sheets logging.',
    tags: ['n8n', 'SMTP', 'Google Sheets API', 'REST APIs'],
    featured: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-4">// projects</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my skills in web development, automation engineering, and blockchain.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group border-gradient rounded-xl p-6 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
            >

              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
              />

              <div className="flex items-start justify-between mb-4 relative">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <project.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="text-primary font-mono text-sm">{project.year}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors relative">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed relative">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 relative">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/10 hover:border-primary/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
