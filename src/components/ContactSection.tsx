import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
    name: 'Email',
    icon: Mail,
    href: 'mailto:musabbinaslam6@gmail.com',
    color: 'hover:text-primary',
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-primary/10 via-accent/5 to-transparent blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-4">// get in touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-12">
            I'm always open to discussing new opportunities, collaborations,
            or just having a chat about tech, automation, and development.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm 
                         hover:border-primary hover:glow-primary transition-all duration-300 ${link.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.12, rotate: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Email CTA */}
        <motion.a
          href="mailto:musabbinaslam6@gmail.com"
          className="inline-flex items-center gap-2 text-lg font-mono text-primary hover:underline underline-offset-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          musabbinaslam6@gmail.com
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
