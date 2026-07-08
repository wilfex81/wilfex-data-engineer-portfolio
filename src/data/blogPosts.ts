export type BlogSection = {
  title: string;
  paragraphs: string[];
  code?: string;
  note?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  authorIcon?: 'user';
  tags: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-a-reliable-data-pipeline',
    title: 'Building a Reliable Data Pipeline for Portfolio Work',
    subtitle: 'How I structure raw ingestion, transformations, and checks so the final dataset stays trustworthy.',
    excerpt:
      'A practical walkthrough of how I turn raw records into clean analytics tables with clear staging layers, repeatable transformations, and validation gates.',
    date: '6/20/2026',
    readTime: '7 min read',
    author: 'Wilfex',
    authorIcon: 'user',
    tags: ['Python', 'dbt', 'Airflow', 'PostgreSQL'],
    sections: [
      {
        title: 'Why the pipeline exists',
        paragraphs: [
          'Most portfolio projects fail because they look like scripts instead of systems. I wanted a pipeline that showed how raw events become something a team could actually trust and query.',
          'That means preserving the source data, being explicit about transformations, and making it easy to rerun the whole flow without manual cleanup.',
        ],
      },
      {
        title: 'Layering the data',
        paragraphs: [
          'The cleanest pattern for this kind of work is a simple raw-to-curated flow. Raw keeps the original payload. Staging handles type normalization and column cleanup. Marts give the business-friendly tables that the dashboards and reports need.',
          'This makes each step smaller and easier to debug. If a metric changes, I know exactly which layer to inspect.',
        ],
        code: `-- staging model example
SELECT
  customer_id,
  CAST(order_total AS DECIMAL(10,2)) AS order_total,
  DATE(order_date) AS order_date
FROM raw_orders
WHERE order_status = 'completed';`,
      },
      {
        title: 'Protecting the output',
        paragraphs: [
          'A pipeline is only useful if it fails in a predictable way. I like to add tests for missing values, uniqueness, and accepted values before the curated layer is published.',
          'The rule is simple: if the data quality check fails, the output should stop rather than silently shipping bad numbers.',
        ],
        code: `# orchestration guard
if not checks_passed:
    raise RuntimeError('Data quality checks failed before publish')`,
        note: 'This is the difference between a working demo and a system that survives production use.',
      },
      {
        title: 'What I would improve next',
        paragraphs: [
          'If I kept extending the project, I would add better observability, richer tests around edge cases, and a small backfill strategy for late-arriving data.',
          'Those are the details that make the architecture feel complete instead of just functional.',
        ],
      },
    ],
  },
  {
    slug: 'designing-clean-medallion-layers',
    title: 'Designing Clean Medallion Layers Without Overcomplicating Them',
    subtitle: 'A lightweight way to separate raw, transformed, and serving data while keeping the project maintainable.',
    excerpt:
      'The medallion pattern works best when each layer has one clear responsibility. Here is how I keep the boundaries simple and readable.',
    date: '3/08/2026',
    readTime: '6 min read',
    author: 'Wilfex',
    authorIcon: 'user',
    tags: ['Architecture', 'Data Modeling', 'SQL'],
    sections: [
      {
        title: 'The boundary rule',
        paragraphs: [
          'If a layer starts doing too many jobs, it becomes hard to reason about. I keep the raw layer untouched, the transformation layer repeatable, and the final layer easy to consume.',
          'That separation makes it easier to explain the project to someone else, and easier to maintain when the schema evolves.',
        ],
      },
      {
        title: 'A simple flow',
        paragraphs: ['The architecture does not need to be fancy to be good. It just needs to be consistent.'],
        code: `raw_events -> staging_orders -> mart_revenue -> dashboard`,
      },
    ],
  },
  {
    slug: 'why-orchestration-matters',
    title: 'Why Orchestration Matters More Than People Think',
    subtitle: 'Airflow, scheduling, and dependency management are what make a data project dependable.',
    excerpt:
      'A pipeline with no orchestration is usually just a collection of tasks. This post shows why scheduling and dependencies matter for real reliability.',
    date: '1/25/2026',
    readTime: '5 min read',
    author: 'Wilfex',
    authorIcon: 'user',
    tags: ['Airflow', 'Scheduling', 'Reliability'],
    sections: [
      {
        title: 'What orchestration solves',
        paragraphs: [
          'You need a system that knows the order of operations, retries safely, and tells you when something breaks. Otherwise, the data is only reliable when a human is watching it.',
          'That is why orchestration belongs in the project narrative, not hidden in a deployment note.',
        ],
        code: `load_raw >> run_transformations >> run_tests >> publish_marts`,
      },
    ],
  },
  {
    slug: 'writing-better-project-stories',
    title: 'Writing Better Project Stories for Data Engineering Portfolios',
    subtitle: 'How to make each project read like a case study instead of a checklist.',
    excerpt:
      'A strong portfolio post explains the problem, the design, the implementation, and the result. The structure matters as much as the code.',
    date: '1/05/2026',
    readTime: '4 min read',
    author: 'Wilfex',
    authorIcon: 'user',
    tags: ['Portfolio', 'Writing', 'Case Study'],
    sections: [
      {
        title: 'Tell the story in order',
        paragraphs: [
          'Start with the problem, not the tooling. Then explain how the data moves, why the architecture looks the way it does, and what outcome it produces.',
          'Readers care more about the reasoning than the tool names.',
        ],
      },
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);