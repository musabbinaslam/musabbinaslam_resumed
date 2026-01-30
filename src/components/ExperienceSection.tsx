import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'MERN Stack Developer Intern',
    company: 'DevGate, Islamabad',
    period: 'Nov 2025 – Present',
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
    highlights: [
      'Clean Flow POS (Current): Developing a standalone, offline desktop POS system for service businesses. Features include double-entry bookkeeping, customer/job management, and automated financial reporting, optimized for environments with limited internet connectivity.',
      'Delivered multiple client projects including mobile apps, automation tools, and blockchain demos.',
      'Created a School Management App using React and Firebase for real-time data handling.',
      'Developed a Blockchain Certificate Verifier using Solidity and React to ensure document authenticity.',
      'Built Python-based data parsing and requirement extraction tools to streamline client workflows.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">// experience</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">History</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building real-world applications and delivering impactful solutions across various domains.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-gradient rounded-xl p-6 md:p-8 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-primary font-mono text-sm">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
