
import React from 'react';
import { useInView } from 'react-intersection-observer';
import SkillBadge from './SkillBadge';
import LineIllustration from './LineIllustration';
import { cn } from '../lib/utils';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const skills = [
    "Python",
    "Apache Airflow",
    "dbt",
    "PostgreSQL",
    "SQLAlchemy",
    "Pandas",
    "Star Schema Design",
    "Data Modeling",
    "Fact & Dimension Tables",
    "Metabase",
    "Docker",
    "Git",
    "SQL",
    "ETL/ELT",
    "Data Quality Testing",
  ];
  
  const experiences = [
    {
      role: "Co-founder & Team Lead / Software Developer",
      company: "SongaBiz Holdings, Nairobi, KE",
      period: "May 2024 – Jan 2026",
      description:
        "Built data-intensive backend systems and APIs with Python/Django, managed PostgreSQL data models and query performance, and delivered cloud-ready analytics workflows on AWS with cross-functional teams."
    },
    {
      role: "Team Lead / Software Developer",
      company: "Dowell Research, Singapore (Remote)",
      period: "Jun 2022 – May 2024",
      description:
        "Led cross-functional delivery across multiple products, developed Python/Django/PostgreSQL solutions, and improved data reliability and reporting readiness through testing, code reviews, and process optimization."
    }
  ];
  
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Background & Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Data pipeline architecture, orchestration, and systems thinking - backed by a software engineering foundation in clean code, testing, and scalable design.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-medium mb-8 tracking-tight">
              Data Tools & Methods
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className={cn(
                    "opacity-0 transform translate-y-4 transition-all duration-500", 
                    inView && "opacity-100 translate-y-0"
                  )} 
                  style={{ transitionDelay: `${index * 0.03}s` }}
                >
                  <span className="text-xs font-medium px-3 py-1.5 bg-secondary/50 border border-border/50 text-secondary-foreground rounded-md hover:bg-secondary hover:border-border transition-colors cursor-default">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            
            <div 
              className={cn(
                "bg-card rounded-xl border border-border/40 p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 opacity-0 transform translate-y-4", 
                inView && "opacity-100 translate-y-0"
              )} 
              style={{ transitionDelay: "0.6s" }}
            >
              <h4 className="text-xl font-semibold mb-4 tracking-tight">
                Engineering Mindset
              </h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I build systems, not queries. My SWE background in Django, APIs, Git workflows, and testing brings rigor and scalability to data architecture - designing pipelines that are reliable, testable, and maintainable at scale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I approach data problems end-to-end: raw ingestion → transformation → modeling → orchestration → consumption. Every component is intentional and designed for correctness and performance.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 tracking-tight">
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.company + exp.period}
                  className={cn(
                    "relative pl-8 opacity-0 transform translate-y-4 transition-all duration-500", 
                    inView && "opacity-100 translate-y-0"
                  )} 
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute left-0 top-1.5 w-3 h-3 border-2 border-primary rounded-full bg-background z-10"></div>
                  {index < experiences.length - 1 && (
                    <div className="absolute left-1.5 top-4 w-0.5 h-full -ml-px bg-border/60"></div>
                  )}
                  
                  <div className="mb-1 text-xs text-primary/80 font-mono font-medium">{exp.period}</div>
                  <h4 className="font-semibold text-lg">{exp.role}</h4>
                  <div className="text-sm text-foreground/70 mb-2 font-medium">{exp.company}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
            
            <div 
              className={cn(
                "bg-card rounded-xl border border-border/40 p-8 mt-10 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 opacity-0 transform translate-y-4", 
                inView && "opacity-100 translate-y-0"
              )} 
              style={{ transitionDelay: "0.8s" }}
            >
              <h4 className="text-xl font-semibold mb-4 tracking-tight">
                SWE → Data Engineer
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                My transition from backend development to data engineering is a strength, not a detour. I bring software engineering fundamentals-clean code, version control, testing, CI/CD-into data pipeline development, resulting in production-grade systems that scale reliably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
