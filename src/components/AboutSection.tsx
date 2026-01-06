import { Code2, Smartphone, Link, Zap } from 'lucide-react';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'React Native', level: 85 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Node.js / Express', level: 75 },
  { name: 'Solidity / Web3', level: 70 },
  { name: 'Firebase', level: 80 },
  { name: 'Python / NLP', level: 65 },
];

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code in agile teams.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web',
    description: 'Building responsive apps with React & React Native.',
  },
  {
    icon: Link,
    title: 'Blockchain',
    description: 'Smart contracts & Web3 integration with Solidity.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'NLP-powered tools & workflow automation.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">// about me</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Passionate About <span className="text-gradient">Frontend</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Motivated Software Engineer with hands-on experience in React Native, React.js, and blockchain integration. 
            Passionate about crafting responsive, user-focused applications and automating workflows.
            BS Software Engineering from CUST, Islamabad with Dean's Honor Award.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className="border-gradient rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="border-gradient rounded-2xl p-8 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Tech <span className="text-gradient">Stack</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">{skill.name}</span>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
