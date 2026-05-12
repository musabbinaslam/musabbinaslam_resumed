import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'MERN Stack Developer',
    company: 'Amplify Media Technologies, Islamabad',
    period: 'Nov 2025 – Present',
    badge: 'Current',
    highlights: [
      'Built and maintained full-stack features using React.js and Node.js/Express across multiple active client products.',
      'Integrated LLM-powered features (Claude, GPT-4) with advanced prompt engineering and guardrails, improving output accuracy by 35%.',
      'Collaborated on scalable MongoDB schemas and secure JWT/OAuth authentication flows.',
      'Used AI-assisted code review (Cursor, GitHub Copilot) to maintain code quality and flag security vulnerabilities.',
    ],
  },
  {
    title: 'MERN Stack Developer (Contract)',
    company: 'Hardwell Capital, Remote',
    period: 'Feb 2025 – Present',
    badge: null,
    highlights: [
      'Developed and maintained internal tooling and web applications supporting capital management workflows.',
      'Integrated third-party APIs and financial data feeds into existing Node.js backend services.',
      'Implemented responsive React.js frontends with real-time data updates using Socket.io.',
    ],
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'DevGate, Islamabad',
    period: 'Nov 2024 – Feb 2025',
    badge: null,
    highlights: [
      'Nasir Absar & Co Website: Designed a corporate website for a legal/audit firm using React.js and Node.js/Express, optimized for SEO and performance. Leveraged Cursor and Claude for rapid prototyping.',
      'DaftarPro (SaaS Platform): Improved LLM-driven automation features, integrated Claude and GPT-4 APIs, and increased output accuracy by 35% through iterative prompt optimization.',
      'SMEDA (Enterprise App): Engineered backend improvements for a government platform handling 10,000+ daily active users. Resolved critical production issues using AI-assisted code analysis.',
      'WebRTC Video Calling App: Built a real-time video/audio communication platform with peer-to-peer WebRTC and Socket.io signaling. Reduced development time by 40% using AI-powered debugging tools. Achieved sub-200ms latency.',
    ],
  },
  {
    title: 'Frontend / Mobile Developer Intern',
    company: 'Centangle Interactive, Remote',
    period: 'Jun 2024 – Aug 2024',
    badge: null,
    highlights: [
      'Developed React Native and React.js components with AI-assisted workflows (GitHub Copilot, v0.dev).',
      'Improved app scalability through AI-suggested architectural patterns and consistent code quality reviews.',
    ],
  },
  {
    title: 'Freelance Software Developer',
    company: 'Self-Employed, Islamabad',
    period: 'Jan 2023 – Present',
    badge: null,
    highlights: [
      'Clean Flow POS: Developing an offline desktop POS system for service businesses with double-entry bookkeeping, customer management, and automated financial reporting. Built with Claude and Cursor.',
      'Delivered 15+ client projects including mobile apps, automation tools, and blockchain solutions. Reduced development time by 50% through strategic AI tool usage.',
      'Blockchain Certificate Verifier: Built a document authenticity system using Solidity and React. Used AI tools for smart contract security analysis.',
      'Developed Python-based data parsing and requirement extraction tools using SpaCy and LLMs.',
    ],
  },
];

import { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-4">// experience</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">History</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building real-world applications and delivering impactful solutions across fintech, enterprise, and startup domains.
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group border-gradient rounded-xl p-6 md:p-8 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              {/* Animated top-left accent line */}
              <motion.div
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent rounded-l-xl"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ originY: 0 }}
              />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    {exp.badge && (
                      <span className="px-2 py-0.5 text-xs font-mono bg-primary/20 text-primary border border-primary/30 rounded-full animate-pulse">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground font-medium pl-1">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-primary font-mono text-sm shrink-0">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2 pl-1">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.2 }}
                  >
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
