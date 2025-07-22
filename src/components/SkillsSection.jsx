
const programmingLanguages = [
  { 
    name: "Java", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "hover:bg-orange-500/10"
  },
  { 
    name: "Python", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "hover:bg-blue-500/10"
  },
  { 
    name: "C++", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    color: "hover:bg-blue-600/10"
  },
  { 
    name: "C", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    color: "hover:bg-blue-700/10"
  },
  { 
    name: "JavaScript", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "hover:bg-yellow-500/10"
  },
  { 
    name: "Tailwind CSS", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "hover:bg-orange-600/10"
  },
  { 
    name: "SQL", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "hover:bg-orange-500/10"
  },
  { 
    name: "PostgreSQL", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "hover:bg-blue-600/10"
  },
  { 
    name: "R", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    color: "hover:bg-blue-500/10"
  },
  { 
    name: "Clojure", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg",
    color: "hover:bg-green-600/10"
  }
];

const frameworksAndSoftware = [
  { 
    name: "Django", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    color: "hover:bg-green-600/10"
  },
  { 
    name: "React", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "hover:bg-cyan-500/10"
  },
  { 
    name: "PyTorch", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    color: "hover:bg-orange-500/10"
  },
  { 
    name: "NumPy", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    color: "hover:bg-blue-500/10"
  },
  { 
    name: "OpenCV", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    color: "hover:bg-lime-500/10"
  },
  { 
    name: "Figma", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "hover:bg-pink-500/10"
  },
  { 
    name: "GitHub", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "hover:bg-gray-500/10"
  }
];

const SkillCard = ({ skill, index }) => {
  return (
    <div 
      className={`
        group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 
        transition-all duration-500 ease-out card-hover
        ${skill.color} border border-border/50
        animate-float hover:shadow-2xl hover:shadow-primary/20
      `}
      style={{
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'both'
      }}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img 
              src={skill.logo} 
              alt={`${skill.name} logo`}
              className="w-10 h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
              onError={(e) => {
                // Fallback for missing images
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div 
              className="hidden w-10 h-10 bg-primary/20 rounded-lg items-center justify-center"
            >
              <span className="text-primary font-bold text-sm">
                {skill.name.charAt(0)}
              </span>
            </div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
        </div>
        
        <div className="text-center">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {skill.name}
          </h3>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400/40 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 delay-100"></div>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
        </div>

        {/* Programming Languages Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-foreground">
              <span className="text-primary">Programming</span> Languages
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
            {programmingLanguages.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Frameworks and Software Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-foreground">
              <span className="text-primary">Frameworks</span> & Software
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {frameworksAndSoftware.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};