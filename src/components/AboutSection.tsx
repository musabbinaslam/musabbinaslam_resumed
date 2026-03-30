import { Code2, Smartphone, Link, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'React Native', level: 85 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'MongoDB / MySQL', level: 80 },
  { name: 'n8n Automation', level: 80 },
  { name: 'Solidity / Web3', level: 75 },
  { name: 'WebRTC / Socket.io', level: 70 },
  { name: 'Python / NLP', level: 65 },
];

const highlights = [
  {
    icon: Code2,
    title: 'MERN Stack',
    description: 'Expertise in building full-stack applications with React, Node, and MongoDB.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Dev',
    description: 'Building responsive apps with React Native for iOS and Android.',
  },
  {
    icon: Link,
    title: 'Blockchain',
    description: 'Smart contracts & Web3 integration with Solidity and Ethereum.',
  },
  {
    icon: Zap,
    title: 'n8n Automation',
    description: 'End-to-end workflow automation — email pipelines, CRM sync, API integrations.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const skillsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const skillsInView = useInView(skillsRef, { once: true, margin: '-60px' });

  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-4">// about me</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Passionate About <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Motivated Software Engineer with hands-on experience in the MERN Stack, React Native, blockchain integration, and n8n workflow automation. Passionate about crafting responsive, user-focused applications and engineering smart automation pipelines. Proven track record of building real-time communication tools, corporate web solutions, and scalable automation systems. Known for writing clean, maintainable code and collaborating effectively within agile development teams.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="border-gradient rounded-xl p-6 bg-card/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <item.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          className="border-gradient rounded-2xl p-8 bg-card/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Tech <span className="text-gradient">Stack</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">{skill.name}</span>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.08, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
