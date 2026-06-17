
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto container-padding max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              Data Engineer
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
              Wilfex Kipchirchir
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Certified Data engineer with a software engineering foundation. Building pipelines, modeling data, and orchestrating systems that turn raw data into reliable business insights.
            </p>
            
            <div className="flex items-center justify-center pt-4">
              <a 
                href="https://www.datacamp.com/certificate/DE0016267508115"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-110"
              >
                <img 
                  src="/project-images/datacamp-certified-badge.png" 
                  alt="DataCamp Certified Data Engineer" 
                  className="h-32 w-32 drop-shadow-lg"
                />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center pt-8">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-30">
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default Hero;
