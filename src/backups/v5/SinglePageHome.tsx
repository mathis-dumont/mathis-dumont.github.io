import { motion } from 'framer-motion';
import { projects, skills, currentlyLearning } from '../data/projects';

export default function SinglePageHome() {
  const featuredProjects = projects.filter(p => p.category === 'featured');
  const academicProjects = projects.filter(p => p.category === 'academic');
  
  const skillCategories = [
    { title: "AI & LLMs", items: skills.ai },
    { title: "ML & Data", items: skills.ml },
    { title: "Engineering", items: skills.engineering },
    { title: "Frontend", items: skills.frontend },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-32 pt-40">
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
                className="w-24 h-24 sm:w-32 sm:h-32 border border-gray-900 dark:border-gray-100"
              />
              <div className="flex-1 min-w-0">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-medium text-gray-900 dark:text-gray-100 tracking-tight break-words mb-6">
                  Mathis Dumont
                </h1>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://github.com/mathis-dumont"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors text-sm font-sans"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/mathis-dumont"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors text-sm font-sans"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:mathis.dumont@example.com"
                    className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors text-sm font-sans"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl leading-loose">
              <p className="text-gray-900 dark:text-gray-100 max-w-2xl">
                I'm a dual-degree student at ENSAE Paris and Arts & Métiers, working at the intersection of statistics and industrial engineering. I focus on building AI systems that work in the real world, with particular interest in agentic frameworks and retrieval-augmented generation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-8 border-t border-gray-900 dark:border-gray-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-12 sm:mb-16 text-gray-900 dark:text-gray-100 text-center">
              About
            </h2>
            <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-12 sm:mb-16"></div>
            
            <div className="space-y-6 text-gray-900 dark:text-gray-100 leading-loose text-base sm:text-lg">
              <p>
                I am currently pursuing a dual degree at ENSAE Paris and Arts & Métiers, combining statistical methods with industrial engineering. My academic work brings together the rigor of mathematical foundations with practical implementation challenges.
              </p>
              <p>
                My focus is on building AI systems that can be deployed in real-world settings. I work with agentic frameworks and retrieval-augmented generation architectures, and I'm particularly interested in how theoretical advances can be translated into production-ready solutions. Through internships at ArcelorMittal and other companies, I've worked on applying machine learning to industrial problems, from defect prediction in steel manufacturing to developing enterprise resource planning systems.
              </p>
              <p>
                Beyond technical work, I served as Head of Sales at Arts & Métiers Junior Enterprise, where I led client relationships and managed cross-functional teams. This role helped me develop skills in leadership and project management while delivering engineering solutions to industry partners like Westinghouse and startups like Iridesense.
              </p>
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
                Expertise
              </h3>

              <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <h4 className="text-lg font-serif font-medium mb-6 text-gray-900 dark:text-gray-100 uppercase tracking-wider text-sm">
                      {category.title}
                    </h4>
                    <ul className="space-y-3">
                      {category.items.map((skill) => (
                        <li
                          key={skill}
                          className="text-gray-900 dark:text-gray-100 leading-relaxed"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-8 border-t border-gray-900 dark:border-gray-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-12 sm:mb-16 text-gray-900 dark:text-gray-100 text-center">
              CV
            </h2>
            <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-12 sm:mb-16"></div>

            <div className="space-y-16">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100 uppercase tracking-wider text-sm">
                  Education
                </h3>
                
                <div className="space-y-8">
                  <div className="border-l border-gray-900 dark:border-gray-100 pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-gray-900 dark:text-gray-100">
                        Master's Degree in Data Science
                      </h4>
                      <p className="text-gray-500 dark:text-gray-500 text-sm font-sans ml-4 whitespace-nowrap">
                        2025 - 2026
                      </p>
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 mb-4">
                      ENSAE Paris
                    </p>
                    <ul className="space-y-2 text-gray-900 dark:text-gray-100 leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Main courses: Deep Learning, Natural Language Processing, Reinforcement Learning, Optimal Transport</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l border-gray-900 dark:border-gray-100 pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-gray-900 dark:text-gray-100">
                        Master of Engineering
                      </h4>
                      <p className="text-gray-500 dark:text-gray-500 text-sm font-sans ml-4 whitespace-nowrap">
                        2022 - 2025
                      </p>
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 mb-4">
                      Arts & Métiers ParisTech, Metz
                    </p>
                    <ul className="space-y-2 text-gray-900 dark:text-gray-100 leading-relaxed">
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

                  <div className="border-l border-gray-900 dark:border-gray-100 pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-gray-900 dark:text-gray-100">
                        Exchange Semester
                      </h4>
                      <p className="text-gray-500 dark:text-gray-500 text-sm font-sans ml-4 whitespace-nowrap">
                        2024 - 2025
                      </p>
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 mb-4">
                      Politecnico di Milano, Milan, Italy
                    </p>
                    <ul className="space-y-2 text-gray-900 dark:text-gray-100 leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Main courses: Machine Learning, Optimization, Lean Management</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l border-gray-900 dark:border-gray-100 pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-gray-900 dark:text-gray-100">
                        Preparatory Classes
                      </h4>
                      <p className="text-gray-500 dark:text-gray-500 text-sm font-sans ml-4 whitespace-nowrap">
                        2020 - 2022
                      </p>
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 mb-4">
                      Lycée Jean Baptiste Say, Paris
                    </p>
                    <ul className="space-y-2 text-gray-900 dark:text-gray-100 leading-relaxed">
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
                <h3 className="text-2xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100 uppercase tracking-wider text-sm">
                  Professional
                </h3>

                <div className="space-y-12">
                  <div className="border-l border-gray-900 dark:border-gray-100 pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-gray-900 dark:text-gray-100">
                        Data Scientist Intern
                      </h4>
                      <p className="text-gray-500 dark:text-gray-500 text-sm font-sans ml-4 whitespace-nowrap">
                        Jan. 2025 - Jul. 2025
                      </p>
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 mb-4">
                      ArcelorMittal, Simulation and Modeling Department
                    </p>
                    <ul className="space-y-2 text-gray-900 dark:text-gray-100 leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Developed and evaluated regression and classification models to predict and categorize defects on steel sheets after hot rolling</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Technologies: Python, Numpy, Pandas, Scikit-learn, PyTorch, Seaborn, Git, Docker</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l border-gray-900 dark:border-gray-100 pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-gray-900 dark:text-gray-100">
                        Software Engineer Intern
                      </h4>
                      <p className="text-gray-500 dark:text-gray-500 text-sm font-sans ml-4 whitespace-nowrap">
                        Jun. 2024 - Sept. 2024
                      </p>
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 mb-4">
                      Utilys, Mulhouse
                    </p>
                    <ul className="space-y-2 text-gray-900 dark:text-gray-100 leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Redesigned and developed the production and sales tracking system (ERP) through a web application</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l border-gray-900 dark:border-gray-100 pl-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif text-gray-900 dark:text-gray-100">
                        Analyst Intern
                      </h4>
                      <p className="text-gray-500 dark:text-gray-500 text-sm font-sans ml-4 whitespace-nowrap">
                        Jun. 2023 - Jul. 2023
                      </p>
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 mb-4">
                      EIFFAGE, Fessenheim
                    </p>
                    <ul className="space-y-2 text-gray-900 dark:text-gray-100 leading-relaxed">
                      <li className="flex">
                        <span className="mr-3">-</span>
                        <span>Process optimization and maintenance scheduling for industrial equipment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Volunteering */}
              <div>
                <h3 className="text-2xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100 uppercase tracking-wider text-sm">
                  Volunteering
                </h3>

                <div className="border-l border-gray-900 dark:border-gray-100 pl-8">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-serif text-gray-900 dark:text-gray-100">
                      Head of Sales
                    </h4>
                    <p className="text-gray-500 dark:text-gray-500 text-sm font-sans ml-4 whitespace-nowrap">
                      Feb. 2023 - Jun. 2025
                    </p>
                  </div>
                  <p className="text-gray-900 dark:text-gray-100 mb-4">
                    Arts & Métiers Junior Enterprise (AMJE)
                  </p>
                  <ul className="space-y-2 text-gray-900 dark:text-gray-100 leading-relaxed">
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

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-8 border-t border-gray-900 dark:border-gray-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-12 sm:mb-16 text-gray-900 dark:text-gray-100 text-center">
              Selected Work
            </h2>
            <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-12 sm:mb-16"></div>

            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="border-b border-gray-900 dark:border-gray-100 pb-16 last:border-0"
                >
                  <h3 className="text-2xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100 leading-loose mb-6">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-900 dark:text-gray-100 leading-relaxed flex">
                        <span className="mr-3 text-gray-500 dark:text-gray-500">-</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-sans text-gray-900 dark:text-gray-100 border border-gray-900 dark:border-gray-100 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.github || project.demo) && (
                    <div className="flex gap-6 text-sm font-sans">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                        >
                          View Code →
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  )}
                </motion.article>
              ))}
            </div>

            {/* Academic Projects */}
            <div className="mt-24 pt-24 border-t border-gray-900 dark:border-gray-100">
              <h3 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
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
                    className="border-b border-gray-900 dark:border-gray-100 pb-16 last:border-0"
                  >
                    <h4 className="text-2xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-4">
                      {project.title}
                    </h4>
                    {project.award && (
                      <p className="text-gray-900 dark:text-gray-100 italic mb-4">
                        {project.award}
                      </p>
                    )}
                    <p className="text-gray-900 dark:text-gray-100 leading-loose mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-sans text-gray-900 dark:text-gray-100 border border-gray-900 dark:border-gray-100 px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab Section */}
      <section id="lab" className="py-16 sm:py-20 px-4 sm:px-8 border-t border-gray-900 dark:border-gray-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-12 sm:mb-16 text-gray-900 dark:text-gray-100 text-center">
              Currently Learning
            </h2>
            <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-12 sm:mb-16"></div>

            <div className="space-y-12">
              {currentlyLearning.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="border-l border-gray-900 dark:border-gray-100 pl-8"
                >
                  <h3 className="text-xl font-serif text-gray-900 dark:text-gray-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100 font-sans text-sm">
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
