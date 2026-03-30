import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'MERN Stack Developer & Automation Engineer',
    company: 'Hardwell Capital, Remote',
    period: 'Feb 2026 – Present',
    badge: 'Current',
    highlights: [
      'Building and maintaining full-stack MERN applications powering Hardwell Capital\'s core business workflows — from client-facing dashboards to internal data pipelines.',
      'Architected and deployed n8n-based automation workflows handling lead capture, email follow-up sequences, and data synchronization across multiple platforms.',
      'Developed bespoke customer portfolio websites for Hardwell Capital clients, featuring dynamic data visualizations and personalized investment dashboards.',
      'Engineered end-to-end automation pipelines integrating CRM systems, email providers (Hostinger/SMTP), Google Sheets, and third-party APIs via n8n nodes and custom HTTP request flows.',
      'Implemented batch email delivery with throttling and loop-based scheduling to comply with SMTP rate limits while maintaining high deliverability at scale.',
    ],
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'DevGate, Islamabad',
    period: 'Nov 2025 – Feb 2026',
    badge: null,
    highlights: [
      'Nasir Absar & Co Website: Designed and developed a comprehensive corporate website for a legal/audit firm. Utilized React.js for a responsive frontend and Node.js/Express for backend services, ensuring high performance and SEO optimization.',
      'DaftarPro (SaaS Platform): Designed and improved LLM-driven automation features, integrating AI components into existing backend services. Implemented prompt engineering, guardrails, and bug fixes to increase output accuracy, system stability, and scalability in a live SaaS environment.',
      'SMEDA (Enterprise Application): Engineered and improved backend functionalities, resolving production issues, optimizing data workflows, and supporting scalable system operations for a government-level platform.',
      'WebRTC Video Calling App: Engineered a real-time video communication platform featuring peer-to-peer video/audio calling. Integrated WebRTC for media streams and Socket.io for signalling and real-time chat functionality, significantly reducing latency.',
      'Collaborated with the backend team to design scalable database schemas in MongoDB and implement secure authentication flows.',
    ],
  },
  {
    title: 'Frontend / Mobile Developer (Intern)',
    company: 'Centangle Interactive, Remote',
    period: 'Jun 2024 – Aug 2024',
    badge: null,
    highlights: [
      'Developed and optimized mobile and web components using React Native and React.js.',
      'Implemented responsive UI elements and reusable components to improve app scalability and maintainability.',
      'Collaborated with cross-functional teams to enhance product performance and user experience.',
    ],
  },
  {
    title: 'Freelance Software Developer',
    company: 'Self-Employed, Islamabad',
    period: 'Jan 2023 – Present',
    badge: null,
    highlights: [
      'Clean Flow POS (Current): Developing a standalone, offline desktop POS system for service businesses. Features include double-entry bookkeeping, customer/job management, and automated financial reporting, optimized for environments with limited internet connectivity.',
      'Delivered multiple client projects including mobile apps, automation tools, and blockchain demos.',
      'Created a School Management App using React and Firebase for real-time data handling.',
      'Developed a Blockchain Certificate Verifier using Solidity and React to ensure document authenticity.',
      'Built Python-based data parsing and requirement extraction tools to streamline client workflows.',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
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
