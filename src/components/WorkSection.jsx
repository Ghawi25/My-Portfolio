const Work = [
  {
    id: 1,
    title: "Project Coordinator",
    description: "Coordinated multimillion-dollar construction projects and streamlined subcontractor workflows using Agile-inspired methods to ensure timely, high-quality delivery.",
    date: "May 2024 - August 2024",
    icon: "🏗️",
    color: "hover:bg-orange-500/10",
    borderColor: "hover:border-orange-500/30"
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    description: "Contributed to full-stack ERP development using Clojure and ClojureScript, managing backend data integrity and delivering client-focused software solutions.",
    date: "June 2023 - August 2023",
    icon: "💻",
    color: "hover:bg-blue-500/10",
    borderColor: "hover:border-blue-500/30"
  },
  {
    id: 3,
    title: "Software Team Member",
    description: "Built an image recognition system for UAV object detection using Python, OpenCV, and TensorFlow's Keras API.",
    date: "January 2023 - April 2023",
    icon: "🤖",
    color: "hover:bg-green-500/10",
    borderColor: "hover:border-green-500/30"
  },
  {
    id: 4,
    title: "IT Technician Intern",
    description: "Maintained IPTV server infrastructure for over 30,000 users and implemented encryption protocols to secure content delivery.",
    date: "June 2022 - August 2022",
    icon: "🗄️",
    color: "hover:bg-purple-500/10",
    borderColor: "hover:border-purple-500/30"
  },
];

const WorkCard = ({ work, index }) => {
  return (
    <div 
      className={`
        group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 
        transition-all duration-500 ease-out card-hover
        ${work.color} border border-border/50 ${work.borderColor}
        animate-float hover:shadow-2xl hover:shadow-primary/20
        hover:scale-[1.02] hover:-translate-y-2
      `}
      style={{
        animationDelay: `${index * 0.2}s`,
        animationFillMode: 'both'
      }}
    >
      {/* Icon container */}
      <div className="flex items-start space-x-4 mb-6">
        <div className="relative">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
            <span className="text-2xl filter group-hover:brightness-110 transition-all duration-300">
              {work.icon}
            </span>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
            {work.title}
          </h3>
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium mb-3 group-hover:bg-primary/20 transition-colors duration-300">
            {work.date}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
        {work.description}
      </p>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/40 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 delay-100"></div>
      
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A journey through diverse roles in technology and project management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Work.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};