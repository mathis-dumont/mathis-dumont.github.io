import { motion } from 'framer-motion';
import { projects, currentlyLearning } from '../data/projects';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

interface TimelineItemProps {
  title: string;
  date: string;
  subtitle: string;
  items?: React.ReactNode[];
}

function TimelineItem({ title, date, subtitle, items = [] }: TimelineItemProps) {
  return (
    <div className="border-l border-light-border dark:border-dark-border pl-8">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-xl font-serif text-light-text dark:text-dark-text">{title}</h4>
        <p className="text-light-muted dark:text-dark-muted text-sm font-sans ml-4 whitespace-nowrap">{date}</p>
      </div>
      <p className="text-light-text dark:text-dark-text mb-4">{subtitle}</p>
      {items.length > 0 && (
        <ul className="space-y-2 text-light-text dark:text-dark-text leading-relaxed">
          {items.map((item, i) => (
            <li key={i} className="flex">
              <span className="mr-3">-</span>
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
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-12 sm:mb-16 text-light-text dark:text-dark-text text-center">
        {title}
      </h2>
      <div className="w-16 h-px bg-light-text dark:bg-dark-text mx-auto mb-12 sm:mb-16" />
    </>
  );
}

export default function SinglePageHome() {
  const featuredProjects = projects.filter(p => p.category === 'featured');
  const academicProjects = projects.filter(p => p.category === 'academic');

  return (
    <div>
      <Hero />

      <section id="about" className="py-16 sm:py-20 px-4 sm:px-8 border-t border-light-border dark:border-dark-border scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionHeader title="About" />
            <div className="space-y-6 text-light-text dark:text-dark-text leading-loose text-base sm:text-lg">
              <p>I'm Mathis. I work on applied GenAI and machine learning.</p>
              <p>
                Right now I'm a Data Scientist intern at Mirakl, aligning an open-weights LLM with DPO to automate catalog onboarding on a marketplace that handles over 100M events a week. Before that, at ArcelorMittal, I built a multi-agent LLM pipeline to reverse-engineer 200k+ lines of legacy Fortran.
              </p>
              <p>
                I'm not only on the technical side. As Head of Sales at a Junior Enterprise I ran client projects for a range of companies, Westinghouse and Iridesense among them, so I'm used to sitting between what a model does and what a business needs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="projects" className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 border-t border-light-border dark:border-dark-border scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionHeader title="Selected Work" />
          </FadeIn>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-24 pt-24 border-t border-light-border dark:border-dark-border">
            <FadeIn>
              <h3 className="text-3xl font-serif font-medium mb-12 text-light-text dark:text-dark-text">
                Academic Research
              </h3>
            </FadeIn>
            <div className="space-y-16">
              {academicProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-8 border-t border-light-border dark:border-dark-border scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionHeader title="CV" />
          </FadeIn>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-8 text-light-text dark:text-dark-text uppercase tracking-wider text-sm">
                Education
              </h3>
              <div className="space-y-8">
                <TimelineItem
                  title="MSc Data Science"
                  date="2025 - 2026"
                  subtitle="ENSAE Paris"
                  items={["Deep Learning, NLP, Reinforcement Learning, Bayesian Statistics, Statistical Learning."]}
                />
                <TimelineItem
                  title="MSc Industrial Engineering"
                  date="2022 - 2025"
                  subtitle="Arts & Métiers ParisTech"
                  items={["Probability, Statistics, Optimization, and Industrial Systems (top 5% of cohort)."]}
                />
                <TimelineItem
                  title="Exchange Semester"
                  date="2024 - 2025"
                  subtitle="Politecnico di Milano"
                  items={["Machine Learning, Dynamic Pricing, Lean Management."]}
                />
                <TimelineItem
                  title="Preparatory Classes"
                  date="2020 - 2022"
                  subtitle="Lycée Jean Baptiste Say, Paris"
                  items={["Intensive Mathematics and Physics."]}
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-medium mb-8 text-light-text dark:text-dark-text uppercase tracking-wider text-sm">
                Professional
              </h3>
              <div className="space-y-12">
                <TimelineItem
                  title="Data Scientist Intern"
                  date="Apr. 2026 - present"
                  subtitle="Mirakl, R&D Team, France"
                  items={[
                    "Building a human-in-the-loop feedback system to improve an open-weights LLM that automates seller-product catalog onboarding on a marketplace processing 100M+ events/week.",
                    "Designed a human feedback collection and evaluation pipeline, applying Direct Preference Optimization (DPO) to align model outputs with catalog-quality requirements, targeting a 20% reduction in automation errors.",
                    <span key="stack"><strong>Stack:</strong> Python, PyTorch, Hugging Face, DPO, LLM alignment, large-scale data pipelines.</span>
                  ]}
                />
                <TimelineItem
                  title="Data Scientist Intern"
                  date="Jan. 2025 - Jul. 2025"
                  subtitle="ArcelorMittal, R&D Simulation Dept., France"
                  items={[
                    "Designed and deployed a multi-agent LLM system (Mistral ReAct + tool orchestration) to reverse-engineer big (200k+ lines of code) legacy Fortran codebases.",
                    "Engineered static analysis and dependency graph synthesis tools in Python.",
                    "Automated documentation generation, reducing onboarding time from weeks to days and presented results directly to David Glijer (CDO).",
                    <span key="stack"><strong>Stack:</strong> Python, Mistral API, ReAct agents, Scikit-learn, Docker, Fortran AST parsing, S3 AWS.</span>
                  ]}
                />
                <TimelineItem
                  title="Software Engineer Intern"
                  date="Jun. 2024 - Sept. 2024"
                  subtitle="Utilys, France"
                  items={[
                    "Architected and shipped a full-stack ERP web application replacing legacy tools and centralizing production and sales data for cross-team visibility.",
                    "Improved reporting latency from days to real-time dashboards, enabling faster operational decision-making.",
                    <span key="stack"><strong>Stack:</strong> Python, SQL, FastAPI.</span>
                  ]}
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-medium mb-8 text-light-text dark:text-dark-text uppercase tracking-wider text-sm">
                Volunteering
              </h3>
              <TimelineItem
                title="Head of Sales"
                date="2023 - 2025"
                subtitle="Arts & Métiers Junior Enterprise (AMJE)"
                items={[
                  <span key="amje">Managed client relations for France's #1 Junior Enterprise (<strong>€250k turnover</strong>); led missions for <strong>Westinghouse</strong> (Steam generators) and <strong>Iridesense</strong> (LiDAR UI) and organized "Reindustrialize France Seminar" (300 participants).</span>
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="lab" className="py-16 sm:py-20 px-4 sm:px-8 border-t border-light-border dark:border-dark-border scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionHeader title="Currently Learning" />
          </FadeIn>
          <div className="space-y-12">
            {currentlyLearning.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="border-l border-light-border dark:border-dark-border pl-8">
                  <h3 className="text-xl font-serif text-light-text dark:text-dark-text mb-2">{item.title}</h3>
                  <p className="text-light-text dark:text-dark-text font-sans text-sm">{item.source}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
