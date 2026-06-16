import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectData {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  images?: string[];
  sections?: Array<{
    title: string;
    paragraphs?: string[];
    bullets?: string[];
    cards?: Array<{
      title: string;
      description: string;
      value?: string;
    }>;
    code?: string;
  }>;
  clientMessage?: string;
  longDescription?: string;
  rating?: number;
}

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectsData: ProjectData[] = [
    {
      title: "E-commerce Data Pipeline",
      description:
        "End-to-end ETL pipeline processing 96K+ orders from raw CSV → PostgreSQL → dbt transformations → Airflow orchestration → Metabase analytics.",
      techStack: ["Python", "Pandas", "SQLAlchemy", "PostgreSQL", "dbt", "Apache Airflow", "Metabase", "Docker"],
      liveLink: "https://github.com/wilfex81/ecommerce-pipeline",
      images: [`${import.meta.env.BASE_URL}project-images/Dashboard.png`],
      longDescription:
        "Production-grade data pipeline for Brazilian Olist e-commerce dataset, featuring raw ingestion, staged transformations, dimensional modeling, and daily orchestration.",
      sections: [
        {
          title: "Project Overview",
          paragraphs: [
            "A complete data engineering pipeline built with industry-standard tools: Python ingestion scripts, PostgreSQL schemas (raw → staging → marts), dbt for transformation and testing, Apache Airflow for daily orchestration, and Metabase for business visualization. The system processes 96,476 orders with 91.89% on-time delivery tracking and R$3.67M in total revenue.",
            "This project demonstrates real data engineering: designing reliable systems, thinking about data quality and lineage, orchestrating workflows, and building analytics infrastructure that business teams depend on.",
          ],
        },
        {
          title: "Architecture & Design",
          paragraphs: [
            "The pipeline follows a modern medallion architecture: raw data layer (untransformed CSVs), staging layer (cleaned, deduplicated views), and mart layer (dimensional models for analytics).",
          ],
          bullets: [
            "Raw schema: 8 tables from original Olist datasets",
            "Staging: 7 cleaned intermediate views with data quality checks",
            "Marts: Star schema with 1 fact table (fct_orders) and 3 dimension tables (dim_customers, dim_products, dim_dates)",
            "PostgreSQL for structured, versioned data storage",
          ],
        },
        {
          title: "Data Pipeline Stages",
          cards: [
            {
              title: "Ingestion",
              description: "Python scripts with Pandas and SQLAlchemy load raw Kaggle CSV files into PostgreSQL raw schema daily.",
            },
            {
              title: "Staging",
              description: "dbt staging models clean, deduplicate, and prepare data. 7 views handle type casting, NULL handling, and business logic validation.",
            },
            {
              title: "Modeling",
              description: "dbt mart models build a dimensional star schema optimized for analytics queries and Metabase dashboards.",
            },
            {
              title: "Orchestration",
              description: "Apache Airflow DAG schedules daily runs, manages dependencies, and monitors SLAs for 24/7 reliability.",
            },
          ],
        },
        {
          title: "Key Metrics Dashboard",
          cards: [
            {
              value: "96,476",
              title: "Total Orders",
              description: "Complete e-commerce transaction history from Brazilian marketplace.",
            },
            {
              value: "92%",
              title: "On-Time Delivery Rate",
              description: "Consistent delivery performance tracked across all orders and logistics partners.",
            },
            {
              value: "R$3.67M",
              title: "Total Revenue",
              description: "Aggregate transaction value across all order dates.",
            },
          ],
        },
        {
          title: "Business Insights",
          cards: [
            {
              title: "Regional Revenue Drivers",
              description: "São Paulo (SP) and Rio de Janeiro (RJ) drive the majority of marketplace revenue. Regional analysis guides fulfillment and logistics strategy.",
            },
            {
              title: "Top Product Categories",
              description: "Watches/gifts and sports/leisure dominate by revenue. Product-level dashboards enable inventory optimization and category expansion planning.",
            },
            {
              title: "Delivery Performance",
              description: "92% on-time delivery rate tracked by carrier and region. Identifies logistics bottlenecks and partnership performance.",
            },
          ],
        },
        {
          title: "Technical Implementation",
          bullets: [
            "Python (Pandas, SQLAlchemy): Ingestion and data loading with error handling",
            "PostgreSQL: Multi-schema architecture (raw, staging, marts) with indexes and constraints",
            "dbt: 7 staging models + 4 mart models with data quality tests and documentation",
            "Apache Airflow: DAG with daily schedule, dependency management, and failure notifications",
            "Metabase: Interactive dashboard connected to marts schema for business self-service",
            "Docker: Container-based deployment for reproducibility and portability",
            "Git: Version control for all code, dbt models, and Airflow DAGs",
          ],
        },
        {
          title: "Data Quality & Testing",
          bullets: [
            "dbt tests: NOT NULL, unique, and referential integrity checks on all models",
            "Staging validation: Deduplicate records, validate date ranges, check for data quality issues",
            "Mart contracts: Dimension and fact table relationships enforced at schema level",
            "Airflow SLA monitoring: Alerts on delayed runs or failed DAG tasks",
          ],
        },
        {
          title: "Airflow Orchestration",
          paragraphs: [
            "Apache Airflow manages the daily pipeline workflow: ingest raw CSV data → run dbt staging transformations → build mart models → refresh Metabase dashboards. The DAG is production-ready with dependency management, failure notifications, and SLA monitoring.",
          ],
          bullets: [
            "Daily scheduled DAG (currently running manual + scheduled variants)",
            "Clear task dependencies: ingestion → staging → marts → dashboard refresh",
            "Error handling and retry logic for reliability",
            "Logging and monitoring for debugging and performance tracking",
          ],
        },
        {
          title: "Engineering Practices",
          bullets: [
            "Schema separation: Clear boundaries between raw ingestion, transformation, and consumption",
            "Idempotent transformations: Safe to rerun without causing data duplication or inconsistency",
            "Documentation: dbt YAML configs describe every table and column with lineage",
            "Versioning: Git history tracks all pipeline changes; easy rollback and collaboration",
            "Monitoring: Airflow logs, dbt test reports, and dashboard freshness indicators",
          ],
        },
        {
          title: "Why This Matters",
          paragraphs: [
            "This project illustrates the difference between analysis and engineering: it's not just about the dashboards. The pipeline is reliable, testable, and maintainable. New analysts can trust the data because the transformations are documented, tested, and reproducible. Stakeholders get fresh insights daily because Airflow handles orchestration automatically. New business questions can be answered quickly because the marts are modeled for analytics.",
            "The system scales — adding new data sources, new transformations, or new dashboards follows established patterns. This is how real data teams work.",
          ],
        },
        {
          title: "Repository & Resources",
          bullets: [
            "GitHub: github.com/wilfex81/ecommerce-pipeline",
            "Dataset: Brazilian Olist E-Commerce Public Dataset (Kaggle, 2016-2018)",
            "Documentation: dbt docs auto-generated from YAML configs",
            "Live Dashboard: Metabase connected to production marts schema",
          ],
        },
      ],
      rating: 5,
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleViewMore = () => {
    // Show 6 more projects when the button is clicked
    setVisibleProjects((prev) => Math.min(prev + 6, projectsData.length));
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding"
    >
      <div className="container mx-auto container-padding max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Data Engineering
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Production-grade pipelines, dimensional modeling, and data infrastructure designed to scale. 
            Building the systems that power analytics and business decisions.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "opacity-0 transform translate-y-4 transition-all duration-500",
                inView && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                index={index}
                liveLink={project.liveLink}
                images={project.images}
                sections={project.sections}
                clientMessage={project.clientMessage}
                longDescription={project.longDescription}
                rating={project.rating}
              />
            </div>
          ))}
        </div>

        {visibleProjects < projectsData.length && (
          <div className="mt-16 text-center">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary transition-all hover:bg-primary hover:text-primary-foreground"
              onClick={handleViewMore}
            >
              View More
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
