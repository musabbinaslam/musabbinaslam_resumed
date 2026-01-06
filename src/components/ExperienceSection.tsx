import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'MERN Stack Developer Intern',
    company: 'DevGate, Islamabad',
    period: 'Nov 2025 – Present',
    highlights: [
      'Designed and developed a comprehensive corporate website for a legal/audit firm using React.js and Node.js/Express',
      'Engineered a real-time WebRTC video communication platform with peer-to-peer calling and Socket.io signaling',
      'Collaborated on scalable MongoDB database schemas and secure authentication flows',
    ],
  },
  {
    title: 'Frontend / Mobile Developer Intern',
    company: 'Centangle Interactive, Remote',
    period: 'Jun 2024 – Aug 2024',
    highlights: [
      'Developed and optimized mobile and web components using React Native and React.js',
      'Implemented responsive UI elements and reusable components for improved scalability',
      'Collaborated with cross-functional teams to enhance product performance and UX',
    ],
  },
  {
    title: 'Freelance Software Developer',
    company: 'Self-Employed, Islamabad',
    period: 'Jan 2023 – Present',
    highlights: [
      'Developing Clean Flow POS: offline desktop POS with double-entry bookkeeping and automated reporting',
      'Created a School Management App using React and Firebase for real-time data handling',
      'Built a Blockchain Certificate Verifier using Solidity and React for document authenticity',
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
