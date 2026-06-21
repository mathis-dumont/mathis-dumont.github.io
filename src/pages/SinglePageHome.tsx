import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects, currentlyLearning } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

interface TimelineItemProps {
  title: string;
  date: string;
  subtitle: string;
  items?: React.ReactNode[];
}

function TimelineItem({ title, date, subtitle, items = [] }: TimelineItemProps) {
  return (
    <div className="relative pl-6 border-l border-line">
      <div className="flex justify-between items-baseline gap-4 mb-0.5">
        <h4 className="font-display font-normal text-xl text-ink">{title}</h4>
        <span className="font-mono text-[10px] text-faint whitespace-nowrap tracking-[0.1em] shrink-0">
          {date}
        </span>
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-4">
        {subtitle}
      </p>
      {items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="text-[15px] font-body text-muted leading-[1.7]">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 mb-10 font-normal">
      <span className="w-6 h-px bg-accent" />
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        {children}
      </span>
    </h2>
  );
}

export default function SinglePageHome() {
  const featuredProjects = projects.filter(p => p.category === 'featured');
  const academicProjects = projects.filter(p => p.category === 'academic');
  const [showMore, setShowMore] = useState(false);
  const visibleFeatured = showMore ? featuredProjects : featuredProjects.slice(0, 3);
  const hiddenCount = featuredProjects.length - 3 + academicProjects.length;

  return (
    <div>
      <section id="about" className="px-6 sm:px-10 py-16 sm:py-20 border-t border-line">
        <FadeIn>
          <Eyebrow>About</Eyebrow>
          <div className="max-w-2xl space-y-5">
            <p className="font-body text-[16px] text-muted leading-[1.75]">
              Right now I'm a Data Scientist intern at Mirakl, aligning an open-weights LLM with DPO to automate catalog onboarding on a marketplace that handles over 100M events a week. Before that, at ArcelorMittal, I built a multi-agent LLM pipeline to reverse-engineer 200k+ lines of legacy Fortran.
            </p>
            <p className="font-body text-[16px] text-muted leading-[1.75]">
              I'm not only on the technical side. As Head of Sales at a Junior Enterprise I ran client projects for a range of companies, Westinghouse and Iridesense among them, so I'm used to sitting between what a model does and what a business needs.
            </p>
          </div>
        </FadeIn>
      </section>

      <section id="projects" className="px-6 sm:px-10 py-16 sm:py-20 border-t border-line">
        <FadeIn>
          <Eyebrow>Selected Work</Eyebrow>
        </FadeIn>
        <div className="space-y-12">
          {visibleFeatured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt-14 pt-12 border-t border-line">
                <h3 className="font-mono font-normal text-[11px] uppercase tracking-[0.22em] text-muted mb-10">
                  Academic Research
                </h3>
                <div className="space-y-12">
                  {academicProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setShowMore(v => !v)}
          className="mt-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted hover:text-accent transition-colors duration-300"
        >
          <span className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}>
            ↓
          </span>
          <span>{showMore ? 'Show less' : `${hiddenCount} more projects`}</span>
        </button>
      </section>

      <section id="experience" className="px-6 sm:px-10 py-16 sm:py-20 border-t border-line">
        <FadeIn>
          <Eyebrow>CV</Eyebrow>
        </FadeIn>
        <div className="space-y-16 max-w-2xl">
          <FadeIn>
            <div>
              <h3 className="font-mono font-normal text-[10px] uppercase tracking-[0.2em] text-faint mb-8">
                Education
              </h3>
              <div className="space-y-8">
                <TimelineItem
                  title="MSc Data Science"
                  date="2025 – 2026"
                  subtitle="ENSAE Paris"
                  items={['Deep Learning, NLP, Reinforcement Learning, Bayesian Statistics, Statistical Learning.']}
                />
                <TimelineItem
                  title="MSc Industrial Engineering"
                  date="2022 – 2025"
                  subtitle="Arts & Métiers ParisTech"
                  items={['Probability, Statistics, Optimization, and Industrial Systems (top 5% of cohort).']}
                />
                <TimelineItem
                  title="Exchange Semester"
                  date="2024 – 2025"
                  subtitle="Politecnico di Milano"
                  items={['Machine Learning, Dynamic Pricing, Lean Management.']}
                />
                <TimelineItem
                  title="Preparatory Classes"
                  date="2020 – 2022"
                  subtitle="Lycée Jean Baptiste Say, Paris"
                  items={['Intensive Mathematics and Physics.']}
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h3 className="font-mono font-normal text-[10px] uppercase tracking-[0.2em] text-faint mb-8">
                Professional
              </h3>
              <div className="space-y-10">
                <TimelineItem
                  title="Data Scientist Intern"
                  date="Apr. 2026 – present"
                  subtitle="Mirakl, R&D Team, France"
                  items={[
                    'Building a human-in-the-loop feedback system to improve an open-weights LLM that automates seller-product catalog onboarding on a marketplace processing 100M+ events/week.',
                    'Applied Direct Preference Optimization (DPO) to align model outputs with catalog-quality requirements, targeting a 20% reduction in automation errors.',
                    <span key="stack"><span className="text-ink">Stack:</span> Python, PyTorch, Hugging Face, DPO, LLM alignment, large-scale data pipelines.</span>
                  ]}
                />
                <TimelineItem
                  title="Data Scientist Intern"
                  date="Jan. 2025 – Jul. 2025"
                  subtitle="ArcelorMittal, R&D Simulation Dept."
                  items={[
                    'Designed and deployed a multi-agent LLM system (Mistral ReAct + tool orchestration) to reverse-engineer 200k+ lines of legacy Fortran codebases.',
                    'Engineered static analysis and dependency graph synthesis tools in Python.',
                    'Automated documentation generation, reducing onboarding time from weeks to days.',
                    <span key="stack"><span className="text-ink">Stack:</span> Python, Mistral API, ReAct agents, Scikit-learn, Docker, Fortran AST parsing, AWS S3.</span>
                  ]}
                />
                <TimelineItem
                  title="Software Engineer Intern"
                  date="Jun. 2024 – Sept. 2024"
                  subtitle="Utilys, France"
                  items={[
                    'Architected a full-stack ERP replacing legacy tools; improved reporting latency from days to real-time dashboards.',
                    <span key="stack"><span className="text-ink">Stack:</span> Python, SQL, FastAPI.</span>
                  ]}
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h3 className="font-mono font-normal text-[10px] uppercase tracking-[0.2em] text-faint mb-8">
                Volunteering
              </h3>
              <TimelineItem
                title="Head of Sales"
                date="2023 – 2025"
                subtitle="Arts & Métiers Junior Enterprise (AMJE)"
                items={[
                  'Managed client relations for France\'s #1 Junior Enterprise (€250k turnover); led missions for Westinghouse and Iridesense; organized "Reindustrialize France Seminar" (300 participants).'
                ]}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="lab" className="px-6 sm:px-10 py-16 sm:py-20 border-t border-line">
        <FadeIn>
          <Eyebrow>Currently Learning</Eyebrow>
        </FadeIn>
        <div className="space-y-8 max-w-2xl">
          {currentlyLearning.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="relative pl-6 border-l border-line">
                <h3 className="font-display font-normal text-xl text-ink mb-0.5">
                  {item.title}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {item.source}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
