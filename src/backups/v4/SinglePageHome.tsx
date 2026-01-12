import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, skills, currentlyLearning } from '../data/projects';
import { getProjectSlug } from '../data/projectSlugs';

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
      <section className="min-h-screen flex items-center justify-center px-8 py-32 pt-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-start gap-12 mb-12">
              <img
                src="/mathis-dumont/images/profile.jpg"
                alt="Mathis Dumont"
                className="w-32 h-32 border border-gray-900 dark:border-gray-100"
              />
              <div className="flex-1">
                <h1 className="text-6xl md:text-8xl font-serif font-medium text-gray-900 dark:text-gray-100 tracking-tight">
                  Mathis Dumont
                </h1>
              </div>
            </div>
            
            <div className="space-y-8 text-lg md:text-xl leading-loose">
              <p className="text-gray-900 dark:text-gray-100">
                Bridging the gap between statistical rigor and industrial engineering.
              </p>

              <p className="text-gray-900 dark:text-gray-100 max-w-2xl">
                Dual-degree student at ENSAE Paris and Arts & Métiers, exploring agentic 
                frameworks, advanced RAG architectures, and production-ready machine learning systems.
              </p>
            </div>

            <div className="flex gap-8 mt-16 pt-12 border-t border-gray-900 dark:border-gray-100">
              <a
                href="https://github.com/mathisdumont"
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
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 border-t border-gray-900 dark:border-gray-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-medium mb-16 text-gray-900 dark:text-gray-100 text-center">
              About
            </h2>
            <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-16"></div>
            
            <div className="space-y-6 text-gray-900 dark:text-gray-100 leading-loose text-lg">
              <p>
                I'm a dual-degree student pursuing studies at ENSAE Paris and Arts & Métiers, 
                bridging the gap between statistical rigor and industrial engineering.
              </p>
              <p>
                My work focuses on building production-ready AI systems, exploring agentic frameworks, 
                and advancing retrieval-augmented generation architectures. I'm particularly interested 
                in the intersection of theoretical foundations and practical implementation.
              </p>
              <p>
                Beyond technical work, I served as Head of Sales at a Junior Enterprise, developing 
                skills in leadership, client relations, and project management.
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
      <section id="experience" className="py-32 px-8 border-t border-gray-900 dark:border-gray-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-medium mb-16 text-gray-900 dark:text-gray-100 text-center">
              Experience
            </h2>
            <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-16"></div>

            <div className="space-y-16">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100 uppercase tracking-wider text-sm">
                  Education
                </h3>
                
                <div className="space-y-8">
                  <div className="border-l border-gray-900 dark:border-gray-100 pl-8">
                    <h4 className="text-xl font-serif text-gray-900 dark:text-gray-100 mb-2">
                      ENSAE Paris
                    </h4>
                    <p className="text-gray-900 dark:text-gray-100 mb-2">
                      Master's in Data Science & Statistics
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm font-sans">
                      2023 — Present
                    </p>
                  </div>

                  <div className="border-l border-gray-900 dark:border-gray-100 pl-8">
                    <h4 className="text-xl font-serif text-gray-900 dark:text-gray-100 mb-2">
                      Arts & Métiers
                    </h4>
                    <p className="text-gray-900 dark:text-gray-100 mb-2">
                      Engineering Degree — Industrial Engineering
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm font-sans">
                      2022 — Present
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div>
                <h3 className="text-2xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100 uppercase tracking-wider text-sm">
                  Professional
                </h3>

                <div className="border-l border-gray-900 dark:border-gray-100 pl-8">
                  <h4 className="text-xl font-serif text-gray-900 dark:text-gray-100 mb-2">
                    Head of Sales
                  </h4>
                  <p className="text-gray-900 dark:text-gray-100 mb-4">
                    Junior Enterprise
                  </p>
                  <ul className="space-y-2 text-gray-900 dark:text-gray-100 leading-relaxed">
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Led sales operations and client relationship management</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Managed project proposals and business development</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Coordinated cross-functional teams for project delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 border-t border-gray-900 dark:border-gray-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-medium mb-16 text-gray-900 dark:text-gray-100 text-center">
              Selected Work
            </h2>
            <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-16"></div>

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
                        <span className="mr-3 text-gray-500 dark:text-gray-500">—</span>
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
      <section id="lab" className="py-32 px-8 border-t border-gray-900 dark:border-gray-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-medium mb-16 text-gray-900 dark:text-gray-100 text-center">
              Currently Learning
            </h2>
            <div className="w-16 h-px bg-gray-900 dark:bg-gray-100 mx-auto mb-16"></div>

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
