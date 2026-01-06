import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    color: 'hover:text-foreground',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/musab-bin-aslam-a12915271',
    color: 'hover:text-[hsl(201,100%,50%)]',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
    color: 'hover:text-[hsl(203,89%,53%)]',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:musabbinaslam6@gmail.com',
    color: 'hover:text-primary',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-primary/10 via-accent/5 to-transparent blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <p className="text-primary font-mono text-sm mb-4">// get in touch</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-12">
          I'm always open to discussing new opportunities, collaborations, 
          or just having a chat about tech and development.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm 
                         hover:border-primary hover:glow-primary transition-all duration-300 ${link.color}`}
            >
              <link.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Email CTA */}
        <a 
          href="mailto:musabbinaslam6@gmail.com"
          className="inline-flex items-center gap-2 text-lg font-mono text-primary hover:underline underline-offset-4"
        >
          musabbinaslam6@gmail.com
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
