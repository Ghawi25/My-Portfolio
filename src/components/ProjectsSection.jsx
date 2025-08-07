import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Mini Chess AI Implementation",
    description: "Developed a Python-based Mini Chess engine with a minimalistic UI using minimax with alpha–beta pruning and iterative deepening, achieving a ~60% win rate through refined heuristics and AI-vs-AI testing.",
    image: "/projects/Chess.png",
    tags: ["Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ghawi25/MiniChessAI",
  },
  {
    id: 2,
    title: "Risk Game Implementation",
    description:
      "Built a fully object-oriented command-line Risk game in C++ featuring modular game phases, a connected map system, and a dynamic round-robin engine with card draws and win logic.",
    image: "/projects/Risk.png",
    tags: ["C++"],
    demoUrl: "#",
    githubUrl: "https://github.com/daliabtnj/warzone",
  },
  {
    id: 3,
    title: "Condo Rental and Management Application",
    description:
      "Developed a full-stack condo management platform using React and Django with dynamic dashboards, a backend system including automated condo fee calculations, property listings, and integrated communication tools.",
    image: "/projects/CondoManagement.png",
    tags: ["React", "Django", "Testing"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ghawi25/THE-390",
  },
  {
    id: 4,
    title: "Face Recognition using a LightweightCNN",
    description:
      "Implemented and trained a lightweight convolutional neural network for face verification using contrastive loss, achieving efficient one-shot learning with high accuracy on facial embedding comparisons.",
    image: "/projects/FaceVeri.png",
    tags: ["Python", "Pytorch", "MatplotLib"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ghawi25/Face-Verification-CNN",
  },
  {
    id: 5,
    title: "Financial Data Management System",
    description:
      "Designed and implemented a scalable financial data pipeline by migrating from PostgreSQL to MongoDB and building validation scripts to unify datasets from multiple APIs.",
    image: "/projects/Finance.png",
    tags: ["Python", "PostgreSQL"],
    
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description:
      "Designed and built a responsive portfolio website using React and TailwindCSS to showcase projects, skills, and personal branding with clean animations and dark mode support.",
    image: "/projects/Portfolio.png",
    tags: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/Ghawi25/My-Portfolio",
    
  },
];

const certificates = [
  {
    id: 1,
    title: "Data Science: Foundation using R - Specialization",
    description:
      "Completed comprehensive specialization covering data collection, cleansing techniques, and processing datasets from various sources. Developed expertise in R programming for data manipulation and analysis.",
    image: "/projects/DataScience.png",
    tags: ["Data Science", "R Programming"],
    organization: "Johns Hopkins University",
    completionDate: "April 2023",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Projects Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group relative bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-primary"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="absolute bottom-4 left-4 text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Ghawi25"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

                {/* Certifications Section */}
<div className="container mx-auto max-w-5xl mt-20">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
    Professional <span className="text-primary"> Certifications </span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {certificates.map((cert, key) => (
      <div
        key={key}
        className="group relative bg-card rounded-lg overflow-hidden shadow-xs card-hover w-100"
      >
        <div className="h-48 overflow-hidden ">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {cert.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-1 text-primary">
            {cert.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-2">
            {cert.organization}
          </p>

          <p className="text-muted-foreground text-sm mb-4">
            {cert.description}
          </p>

          <div className="flex justify-between items-center">
            <span className="absolute bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Completed: {cert.completionDate}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
};
