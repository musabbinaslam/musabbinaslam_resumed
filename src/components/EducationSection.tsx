import { GraduationCap, Award } from 'lucide-react';

const education = [
    {
        school: 'Capital University of Science and Technology (CUST)',
        degree: 'BS Software Engineering',
        year: '2020 – 2024',
        grade: 'Dean’s Honor Award',
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
    return (
        <section id="education" className="py-24 px-6 relative bg-secondary/5">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <p className="text-primary font-mono text-sm mb-4">// education & certifications</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Academic <span className="text-gradient">Background</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="pl-6 border-l-2 border-primary/20 relative"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                                    <h4 className="font-bold text-lg">{edu.school}</h4>
                                    <p className="text-primary font-medium">{edu.degree}</p>
                                    <p className="text-muted-foreground text-sm font-mono mt-1 mb-2">{edu.year}</p>
                                    {edu.grade && (
                                        <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                                            {edu.grade}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <Award className="w-6 h-6 text-primary" />
                            Certifications
                        </h3>
                        <div className="grid gap-4">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors"
                                >
                                    <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                                        <span>{cert.issuer}</span>
                                        {cert.year && <span className="font-mono text-primary">{cert.year}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
