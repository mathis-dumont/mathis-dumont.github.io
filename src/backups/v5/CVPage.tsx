import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function CVPage() {
  const academicProjects = projects.filter(p => p.category === 'academic');

  return (
    <div className="pt-32 pb-32 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-6xl font-serif font-medium mb-6 text-gray-900 dark:text-gray-100">
            Curriculum Vitae
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-loose max-w-2xl">
            Mathis Dumont - AI Engineer & Researcher
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 pb-24 border-b border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Education
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Master's Degree in Data Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                ENSAE Paris
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                2025 - 2026
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Main courses: Deep Learning, Natural Language Processing, Reinforcement Learning, Optimal Transport
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Master of Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Arts & Métiers ParisTech, Metz
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                2022 - 2025
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
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

            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Exchange Semester
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Politecnico di Milano, Milan, Italy
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                2024 - 2025
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Main courses: Machine Learning, Optimization, Lean Management
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Preparatory Classes
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Lycée Jean Baptiste Say, Paris
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                2020 - 2022
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Two-year intensive program in Mathematics, Physics, and Engineering Sciences, preparing for national competitive entrance exams to top engineering schools
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 pb-24 border-b border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Experience
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Data Scientist Intern
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                ArcelorMittal, Simulation and Modeling Department
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                Jan. 2025 - Jul. 2025
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
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

            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Software Engineer Intern
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Utilys, Mulhouse
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                Jun. 2024 - Sept. 2024
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li className="flex">
                  <span className="mr-3">-</span>
                  <span>Redesigned and developed the production and sales tracking system (ERP) through a web application</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Analyst Intern
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                EIFFAGE, Fessenheim
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                Jun. 2023 - Jul. 2023
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li className="flex">
                  <span className="mr-3">-</span>
                  <span>Process optimization and maintenance scheduling for industrial equipment</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 pb-24 border-b border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Research & Academic Projects
          </h2>

          <div className="space-y-12">
            {academicProjects.map((project, _index) => (
              <div key={project.id}>
                <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                {project.award && (
                  <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                    {project.award}
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-sans text-gray-500 dark:text-gray-500 border border-gray-300 dark:border-gray-700 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Volunteering
          </h2>

          <div>
            <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
              Head of Sales
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Arts & Métiers Junior Enterprise (AMJE)
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
              Feb. 2023 - Jun. 2025
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
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
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 pb-24 border-b border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100">
            Contact
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              <a 
                href="mailto:mathis.dumont@example.com"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                mathis.dumont@example.com
              </a>
            </p>
            <div className="flex gap-8 pt-4">
              <a
                href="https://github.com/mathisdumont"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                GitHub →
              </a>
              <a
                href="https://linkedin.com/in/mathis-dumont"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
