import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects, currentlyLearning } from '../data/projects';
import MobileHero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

interface TimelineItemProps {
  title: string;
  date: string;
  subtitle: string;
  items?: React.ReactNode[];
}

function TimelineItem({ title, date, subtitle, items = [] }: TimelineItemProps) {
  return (
    <div className="border-l border-light-border dark:border-dark-border pl-6">
      <div className="flex justify-between items-baseline gap-4 mb-1">
        <h4 className="font-display font-light text-xl text-light-text dark:text-dark-text">{title}</h4>
        <span className="font-mono text-[10px] text-light-muted dark:text-dark-muted whitespace-nowrap tracking-widest shrink-0">
          {date}
        </span>
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted mb-4">
        {subtitle}
      </p>
      {items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm font-body text-light-muted dark:text-dark-muted leading-relaxed">
              <span className="mt-[0.55em] w-3 h-px bg-light-border dark:bg-dark-border flex-shrink-0" />
              <span>{item}</span>
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-light text-[2.5rem] sm:text-[3.5rem] leading-[1] text-light-text dark:text-dark-text mb-10">
      {children}
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
      <MobileHero />

      <section id="about" className="px-8 sm:px-14 py-16 sm:py-24 border-b border-light-border dark:border-dark-border scroll-mt-0">
        <FadeIn>
          <SectionTitle>About</SectionTitle>
          <div className="max-w-xl space-y-5 font-body text-[15px] text-light-text dark:text-dark-text leading-[1.85]">
            <p>I'm Mathis. I work on applied GenAI and machine learning.</p>
            <p>
              Right now I'm a Data Scientist intern at Mirakl, aligning an open-weights LLM with DPO to automate catalog onboarding on a marketplace that handles over 100M events a week. Before that, at ArcelorMittal, I built a multi-agent LLM pipeline to reverse-engineer 200k+ lines of legacy Fortran.
            </p>
            <p>
              I'm not only on the technical side. As Head of Sales at a Junior Enterprise I ran client projects for a range of companies, Westinghouse and Iridesense among them, so I'm used to sitting between what a model does and what a business needs.
            </p>
          </div>
        </FadeIn>
      </section>

      <section id="projects" className="px-8 sm:px-14 py-16 sm:py-24 border-b border-light-border dark:border-dark-border scroll-mt-0">
        <FadeIn>
          <SectionTitle>Selected Work</SectionTitle>
        </FadeIn>
        <div className="space-y-14">
          {visibleFeatured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <button
          onClick={() => setShowMore(v => !v)}
          className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-light-muted dark:text-dark-muted hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300 group"
        >
          <span
            className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
          >
            ↓
          </span>
          <span>{showMore ? 'Show less' : `${hiddenCount} more projects`}</span>
        </button>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt-20 pt-14 border-t border-light-border dark:border-dark-border">
                <h3 className="font-display font-light text-2xl text-light-text dark:text-dark-text mb-10">
                  Academic Research
                </h3>
                <div className="space-y-14">
                  {academicProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section id="experience" className="px-8 sm:px-14 py-16 sm:py-24 border-b border-light-border dark:border-dark-border scroll-mt-0">
        <FadeIn>
          <SectionTitle>CV</SectionTitle>
        </FadeIn>
        <div className="space-y-16">

          <FadeIn>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-light-muted dark:text-dark-muted mb-8">
                Education
              </p>
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
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-light-muted dark:text-dark-muted mb-8">
                Professional
              </p>
              <div className="space-y-10">
                <TimelineItem
                  title="Data Scientist Intern"
                  date="Apr. 2026 – present"
                  subtitle="Mirakl, R&D Team, France"
                  items={[
                    'Building a human-in-the-loop feedback system to improve an open-weights LLM that automates seller-product catalog onboarding on a marketplace processing 100M+ events/week.',
                    'Applied Direct Preference Optimization (DPO) to align model outputs with catalog-quality requirements, targeting a 20% reduction in automation errors.',
                    <span key="stack"><span className="text-light-text dark:text-dark-text">Stack:</span> Python, PyTorch, Hugging Face, DPO, LLM alignment, large-scale data pipelines.</span>
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
                    <span key="stack"><span className="text-light-text dark:text-dark-text">Stack:</span> Python, Mistral API, ReAct agents, Scikit-learn, Docker, Fortran AST parsing, AWS S3.</span>
                  ]}
                />
                <TimelineItem
                  title="Software Engineer Intern"
                  date="Jun. 2024 – Sept. 2024"
                  subtitle="Utilys, France"
                  items={[
                    'Architected a full-stack ERP replacing legacy tools; improved reporting latency from days to real-time dashboards.',
                    <span key="stack"><span className="text-light-text dark:text-dark-text">Stack:</span> Python, SQL, FastAPI.</span>
                  ]}
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-light-muted dark:text-dark-muted mb-8">
                Volunteering
              </p>
              <TimelineItem
                title="Head of Sales"
                date="2023 – 2025"
                subtitle="Arts & Métiers Junior Enterprise (AMJE)"
                items={[
                  <span key="amje">Managed client relations for France's #1 Junior Enterprise (<span className="text-light-text dark:text-dark-text">€250k turnover</span>); led missions for <span className="text-light-text dark:text-dark-text">Westinghouse</span> and <span className="text-light-text dark:text-dark-text">Iridesense</span>; organized "Reindustrialize France Seminar" (300 participants).</span>
                ]}
              />
            </div>
          </FadeIn>

        </div>
      </section>

      <section id="lab" className="px-8 sm:px-14 py-16 sm:py-24 scroll-mt-0">
        <FadeIn>
          <SectionTitle>Currently Learning</SectionTitle>
        </FadeIn>
        <div className="space-y-8">
          {currentlyLearning.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="border-l border-light-border dark:border-dark-border pl-6">
                <h3 className="font-display font-light text-xl text-light-text dark:text-dark-text mb-1">
                  {item.title}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted">
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