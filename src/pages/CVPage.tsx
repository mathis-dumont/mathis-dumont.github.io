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
                MSc Data Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                ENSAE Paris
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                2025 - 2026
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Deep Learning, NLP, Reinforcement Learning, Bayesian Statistics, Statistical Learning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                MSc Industrial Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Arts & Métiers ParisTech
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                2022 - 2025
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Probability, Statistics, Optimization, and Industrial Systems (top 5% of cohort).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Exchange Semester
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Politecnico di Milano
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                2024 - 2025
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Machine Learning, Dynamic Pricing, Lean Management.
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
                Intensive Mathematics and Physics.
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
                Mirakl, R&D Team, France
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                Apr. 2026 - present
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li className="flex">
                  <span className="mr-3">-</span>
                  <span>Building a human-in-the-loop feedback system to improve an open-weights LLM that automates seller-product catalog onboarding on a marketplace processing 100M+ events/week.</span>
                </li>
                <li className="flex">
                  <span className="mr-3">-</span>
                  <span>Designed a human feedback collection and evaluation pipeline, applying Direct Preference Optimization (DPO) to align model outputs with catalog-quality requirements, targeting a 20% reduction in automation errors.</span>
                </li>
                <li className="flex">
                  <span className="mr-3">-</span>
                  <span><strong>Stack:</strong> Python, PyTorch, Hugging Face, DPO, LLM alignment, large-scale data pipelines.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Data Scientist Intern
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                ArcelorMittal, R&D Simulation Dept., France
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                Jan. 2025 - Jul. 2025
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li className="flex">
                  <span className="mr-3">-</span>
                  <span>Designed and deployed a multi-agent LLM system (Mistral ReAct + tool orchestration) to reverse-engineer big (200k+ lines of code) legacy Fortran codebases.</span>
                </li>
                <li className="flex">
                  <span className="mr-3">-</span>
                  <span>Engineered static analysis and dependency graph synthesis tools in Python.</span>
                </li>
                <li className="flex">
                  <span className="mr-3">-</span>
                  <span>Automated documentation generation, reducing onboarding time from weeks to days and presented results directly to David Glijer (CDO).</span>
                </li>
                <li className="flex">
                  <span className="mr-3">-</span>
                  <span><strong>Stack:</strong> Python, Mistral API, ReAct agents, Scikit-learn, Docker, Fortran AST parsing, AWS S3.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Software Engineer Intern
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Utilys, France
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans mb-4">
                Jun. 2024 - Sept. 2024
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
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
                  <span><strong>Stack:</strong> Python, SQL, FastAPI.</span>
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
                <span>Managed client relations for France's #1 Junior Enterprise (<strong>€250k turnover</strong>); led missions for <strong>Westinghouse</strong> (Steam generators) and <strong>Iridesense</strong> (LiDAR UI) and organized "Reindustrialize France Seminar" (300 participants).</span>
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
          <h2 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Skills & Interests
          </h2>

          <div className="space-y-8 text-gray-600 dark:text-gray-400">
            <div className="flex flex-col md:flex-row md:gap-4">
              <span className="font-medium text-gray-900 dark:text-gray-100 md:w-32 shrink-0">Tech Stack</span>
              <span>Python, SQL (PostgreSQL), Docker, FastAPI, Git, GitHub Actions, Linux, Supabase.</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:gap-4">
              <span className="font-medium text-gray-900 dark:text-gray-100 md:w-32 shrink-0">Languages</span>
              <span>French (Native), English (C1), Italian (A2), German (A2).</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:gap-4">
              <span className="font-medium text-gray-900 dark:text-gray-100 md:w-32 shrink-0">Interests</span>
              <span>Flute (14 years), Badminton, Entrepreneurship (2nd Prize at Freiburg Science Congress).</span>
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
          <h2 className="text-3xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100">
            Contact
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              <a 
                href="mailto:contact.mathisdumont@gmail.com"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                contact.mathisdumont@gmail.com
              </a>
            </p>
            <p>
              <a 
                href="tel:+33769811080"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors font-sans"
              >
                +33 7 69 81 10 80
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
