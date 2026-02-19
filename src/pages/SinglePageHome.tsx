import { motion } from 'framer-motion';
import { projects, currentlyLearning } from '../data/projects';

export default function SinglePageHome() {
  const featuredProjects = projects.filter(p => p.category === 'featured');
  const academicProjects = projects.filter(p => p.category === 'academic');

// Helper to extract the ID and create an embed link
const getEmbedUrl = (url: string) => {
  if (!url) return '';
  // Regex to find the video ID from standard YouTube URLs
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[2].length === 11)
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
};

  return (
    <div>
      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 sm:px-8 pb-4 pt-40">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 mb-12">
              <img
                src="/images/profile.jpg"
                alt="Mathis Dumont"
                className="w-24 h-24 sm:w-32 sm:h-32 border border-light-border dark:border-dark-border"
              />
              <div className="flex-1 min-w-0">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-medium text-light-text dark:text-dark-text tracking-tight break-words mb-6">
                  Mathis Dumont
                </h1>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://github.com/mathis-dumont"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors text-sm font-sans"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/mathis-dumont"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors text-sm font-sans"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:contact[dot]mathisdumont@gmail.com"
                    className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors text-sm font-sans"
                  >
                    contact[dot]mathisdumont@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-8 border-t border-light-border dark:border-dark-border scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-12 sm:mb-16 text-light-text dark:text-dark-text text-center">
              About
            </h2>
            <div className="w-16 h-px bg-light-text dark:bg-dark-text mx-auto mb-12 sm:mb-16"></div>
            
            <div className="space-y-6 text-light-text dark:text-dark-text leading-loose text-base sm:text-lg">
              <p>
                Welcome! I'm Mathis, I build AI systems designed for production.
              </p>
              <p>
                My focus is on applied GenAI and software engineering. At ArcelorMittal, I developed an agentic LLM pipeline to reverse-engineer legacy Fortran code and worked on defect prediction models. Before that, I shipped full-stack ERP tools that cut operational reporting times from days to seconds.
              </p>
              <p>
                I also understand the business side. As Head of Sales at a Junior Enterprise, I managed client projects for partners like Westinghouse and Iridesense. I know how to align complex technical work with actual business requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 border-t border-light-border dark:border-dark-border scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-12 sm:mb-16 text-light-text dark:text-dark-text text-center">
              Selected Work
            </h2>
            <div className="w-16 h-px bg-light-text dark:bg-dark-text mx-auto mb-12 sm:mb-16"></div>

            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="border-b border-light-border dark:border-dark-border pb-16 last:border-0"
                >
                  <h3 className="text-2xl font-serif font-medium text-light-text dark:text-dark-text mb-4">
                    {project.title}
                  </h3>

                  <p className="text-light-text dark:text-dark-text leading-loose mb-6">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-light-text dark:text-dark-text leading-relaxed flex">
                        <span className="mr-3 text-light-muted dark:text-dark-muted">-</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {(project.github || project.demo || project.pdf || project.video) && (
                    <div className="flex gap-6 text-sm font-sans mb-6">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors"
                        >
                          View Code →
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors"
                        >
                          Live Demo →
                        </a>
                      )}
                      {project.pdf && (
                        <a
                          href={project.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors"
                        >
                          Read Paper →
                        </a>
                      )}
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors"
                        >
                          Watch Demo →
                        </a>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-sans text-light-text dark:text-dark-text border border-light-border dark:border-dark-border px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.video && (
                    <div className="mb-12 mt-8 w-full aspect-video bg-light-surface dark:bg-dark-surface rounded-none overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={getEmbedUrl(project.video)}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </motion.article>
              ))}
            </div>

            {/* Academic Projects */}
            <div className="mt-24 pt-24 border-t border-light-border dark:border-dark-border">
              <h3 className="text-3xl font-serif font-medium mb-12 text-light-text dark:text-dark-text">
                Academic Research
              </h3>

              <div className="space-y-16">
                {academicProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="border-b border-light-border dark:border-dark-border pb-16 last:border-0"
                  >
                    <h4 className="text-2xl font-serif font-medium text-light-text dark:text-dark-text mb-4">
                      {project.title}
                    </h4>
                    {project.award && (
                      <p className="text-light-text dark:text-dark-text italic mb-4">
                        {project.award}
                      </p>
                    )}
                    <p className="text-light-text dark:text-dark-text leading-loose mb-6">
                      {project.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-light-text dark:text-dark-text leading-relaxed flex">
                          <span className="mr-3 text-light-muted dark:text-dark-muted">-</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {(project.github || project.pdf) && (
                      <div className="flex gap-6 text-sm font-sans mb-6">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors"
                          >
                            View Code →
                          </a>
                        )}
                        {project.pdf && (
                          <a
                            href={project.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors"
                          >
                            Read Paper →
                          </a>
                        )}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-sans text-light-text dark:text-dark-text border border-light-border dark:border-dark-border px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.id === 6 && (
                      <img
                        src="/images/rod.png"
                        alt="Engine Connecting Rod FEA"
                        className="w-64 mt-6 mx-auto block border border-light-border dark:border-dark-border"
                      />
                    )}
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV / Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-8 border-t border-light-border dark:border-dark-border scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-12 sm:mb-16 text-light-text dark:text-dark-text text-center">
              CV
            </h2>
            <div className="w-16 h-px bg-light-text dark:bg-dark-text mx-auto mb-12 sm:mb-16"></div>

            <div className="space-y-16">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-serif font-medium mb-8 text-light-text dark:text-dark-text uppercase tracking-wider text-sm">
                  Education
                </h3>
                
                <div className="space-y-8">
                  <div className="border-l border-light-border dark:border-dark-border pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-light-text dark:text-dark-text">
                        MSc Data Science
                      </h4>
                      <p className="text-light-muted dark:text-dark-muted text-sm font-sans ml-4 whitespace-nowrap">
                        2025 - 2026
                      </p>
                    </div>
                    <p className="text-light-text dark:text-dark-text mb-4">
                      ENSAE Paris
                    </p>
                    <ul className="space-y-2 text-light-text dark:text-dark-text leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Main courses: Deep Learning, Natural Language Processing, Reinforcement Learning, Optimal Transport</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l border-light-border dark:border-dark-border pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-light-text dark:text-dark-text">
                        MSc Mechanical Engineering
                      </h4>
                      <p className="text-light-muted dark:text-dark-muted text-sm font-sans ml-4 whitespace-nowrap">
                        2022 - 2025
                      </p>
                    </div>
                    <p className="text-light-text dark:text-dark-text mb-4">
                      Arts & Métiers ParisTech, Metz
                    </p>
                    <ul className="space-y-2 text-light-text dark:text-dark-text leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Main courses: Probability, Statistics, Computer Science, Optimization, Mechanics, Energy Systems, Manufacturing</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Ranked 50th/1202</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l border-light-border dark:border-dark-border pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-light-text dark:text-dark-text">
                        Exchange Semester
                      </h4>
                      <p className="text-light-muted dark:text-dark-muted text-sm font-sans ml-4 whitespace-nowrap">
                        2024 - 2025
                      </p>
                    </div>
                    <p className="text-light-text dark:text-dark-text mb-4">
                      Politecnico di Milano, Milan, Italy
                    </p>
                    <ul className="space-y-2 text-light-text dark:text-dark-text leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Main courses: Machine Learning, Optimization, Lean Management</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l border-light-border dark:border-dark-border pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-light-text dark:text-dark-text">
                        Preparatory Classes
                      </h4>
                      <p className="text-light-muted dark:text-dark-muted text-sm font-sans ml-4 whitespace-nowrap">
                        2020 - 2022
                      </p>
                    </div>
                    <p className="text-light-text dark:text-dark-text mb-4">
                      Lycée Jean Baptiste Say, Paris
                    </p>
                    <ul className="space-y-2 text-light-text dark:text-dark-text leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Two-year intensive program in Mathematics, Physics, and Engineering Sciences, preparing for national competitive entrance exams to top engineering schools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div>
                <h3 className="text-2xl font-serif font-medium mb-8 text-light-text dark:text-dark-text uppercase tracking-wider text-sm">
                  Professional
                </h3>

                <div className="space-y-12">
                  <div className="border-l border-light-border dark:border-dark-border pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-light-text dark:text-dark-text">
                        Data Scientist Intern
                      </h4>
                      <p className="text-light-muted dark:text-dark-muted text-sm font-sans ml-4 whitespace-nowrap">
                        Jan. 2025 - Jul. 2025
                      </p>
                    </div>
                    <p className="text-light-text dark:text-dark-text mb-4">
                      ArcelorMittal, Simulation and Modeling Department
                    </p>
                    <ul className="space-y-2 text-light-text dark:text-dark-text leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Developed and evaluated regression and classification models to predict and categorize defects on steel sheets after hot rolling.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Designed and deployed a multi-agent ML pipeline using Mistral API to analyze and structure Fortran legacy simulation codebases (200k+ lines of code) used in industrial modeling.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Engineered static analysis and dependency graph synthesis tools in Python.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Automated documentation generation, reducing onboarding time from weeks to days.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Technologies: Python, Mistral API, ReAct agents, Scikit-learn, Docker, Fortran AST parsing, S3 AWS.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l border-light-border dark:border-dark-border pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-light-text dark:text-dark-text">
                        Software Engineer Intern
                      </h4>
                      <p className="text-light-muted dark:text-dark-muted text-sm font-sans ml-4 whitespace-nowrap">
                        Jun. 2024 - Sept. 2024
                      </p>
                    </div>
                    <p className="text-light-text dark:text-dark-text mb-4">
                      Utilys, Mulhouse
                    </p>
                    <ul className="space-y-2 text-light-text dark:text-dark-text leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Architected and shipped a full-stack ERP web application replacing legacy tools and centralizing production and sales data for cross-team visibility.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Improved reporting latency from days to real-time dashboards, enabling faster operational decision-making.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Technologies: Python, SQL, FastAPI, Flask.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l border-light-border dark:border-dark-border pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-light-text dark:text-dark-text">
                        Analyst Intern
                      </h4>
                      <p className="text-light-muted dark:text-dark-muted text-sm font-sans ml-4 whitespace-nowrap">
                        Jun. 2023 - Jul. 2023
                      </p>
                    </div>
                    <p className="text-light-text dark:text-dark-text mb-4">
                      EIFFAGE, Fessenheim
                    </p>
                    <ul className="space-y-2 text-light-text dark:text-dark-text leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Process optimization and maintenance scheduling for industrial equipment.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Volunteering */}
              <div>
                <h3 className="text-2xl font-serif font-medium mb-8 text-light-text dark:text-dark-text uppercase tracking-wider text-sm">
                  Volunteering
                </h3>

                <div className="border-l border-light-border dark:border-dark-border pl-8">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-serif text-light-text dark:text-dark-text">
                      Head of Sales
                    </h4>
                    <p className="text-light-muted dark:text-dark-muted text-sm font-sans ml-4 whitespace-nowrap">
                      Feb. 2023 - Jun. 2025
                    </p>
                  </div>
                  <p className="text-light-text dark:text-dark-text mb-4">
                    Arts & Métiers Junior Enterprise (AMJE)
                  </p>
                  <ul className="space-y-2 text-light-text dark:text-dark-text leading-relaxed">
                    <li className="flex">
                      <span className="mr-3">-</span>
                      <span>Developed maintenance solutions for steam generators for Westinghouse France</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">-</span>
                      <span>Designed a graphical interface for a LiDAR system for the startup Iridesense</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">-</span>
                      <span>Co-organized the event "Reindustrialize France": 4 conferences, 1 hackathon, 300 participants</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">-</span>
                      <span>Achievements: awarded Best Junior Enterprise in France (2024), €250,000 turnover, 60 projects completed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab / Currently Learning Section */}
      <section id="lab" className="py-16 sm:py-20 px-4 sm:px-8 border-t border-light-border dark:border-dark-border scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-12 sm:mb-16 text-light-text dark:text-dark-text text-center">
              Currently Learning
            </h2>
            <div className="w-16 h-px bg-light-text dark:bg-dark-text mx-auto mb-12 sm:mb-16"></div>

            <div className="space-y-12">
              {currentlyLearning.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="border-l border-light-border dark:border-dark-border pl-8"
                >
                  <h3 className="text-xl font-serif text-light-text dark:text-dark-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-light-text dark:text-dark-text font-sans text-sm">
                    {item.source}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
