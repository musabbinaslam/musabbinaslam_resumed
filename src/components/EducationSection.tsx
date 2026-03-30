import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const education = [
    {
        school: 'Capital University of Science and Technology (CUST)',
        degree: 'BS Software Engineering',
        year: '2020 – 2024',
        grade: 'Dean\'s Honor Award',
    },
    {
        school: 'OPF Boys College, Islamabad',
        degree: 'Intermediate (Pre-Engineering)',
        year: '2018 – 2020',
        grade: '',
    },
    {
        school: 'Siddeeq Public School, Islamabad',
        degree: 'Matriculation',
        year: '2018',
        grade: '',
    },
];

const certifications = [
    {
        name: 'Google AI Essentials',
        issuer: 'Google',
        year: '2024',
    },
];

const EducationSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="education" className="py-24 px-6 relative bg-secondary/5">
            <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-primary font-mono text-sm mb-4">// education & certifications</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Academic <span className="text-gradient">Background</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="pl-6 border-l-2 border-primary/20 relative"
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                >
                                    <motion.div
                                        className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary"
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ type: 'spring', delay: 0.4 + index * 0.1 }}
                                    />
                                    <h4 className="font-bold text-lg">{edu.school}</h4>
                                    <p className="text-primary font-medium">{edu.degree}</p>
                                    <p className="text-muted-foreground text-sm font-mono mt-1 mb-2">{edu.year}</p>
                                    {edu.grade && (
                                        <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                                            {edu.grade}
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <Award className="w-6 h-6 text-primary" />
                            Certifications
                        </h3>
                        <div className="grid gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                                >
                                    <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                                        <span>{cert.issuer}</span>
                                        {cert.year && <span className="font-mono text-primary">{cert.year}</span>}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
