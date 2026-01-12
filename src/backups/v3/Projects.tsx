import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const featuredProjects = projects.filter(p => p.category === 'featured');
  const academicProjects = projects.filter(p => p.category === 'academic');

  return (
    <section className="py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl font-serif font-medium mb-6 text-gray-900 dark:text-gray-100">
            Selected Work
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-loose max-w-2xl">
            A collection of projects exploring AI systems, MLOps, and production-ready solutions.
          </p>
        </motion.div>

        <div className="mb-32">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl font-serif font-medium mb-6 text-gray-900 dark:text-gray-100">
            Academic Research
          </h2>
        </motion.div>

        <div>
          {academicProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
