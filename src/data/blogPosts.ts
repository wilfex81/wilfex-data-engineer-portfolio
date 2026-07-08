export type BlogSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
  code?: string;
  note?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
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
    slug: 'data-structures-algorithms-for-data-engineers',
    title: 'Data Structures & Algorithms for Data Engineers',
    subtitle: 'From Python Fundamentals to Interview Mastery',
    excerpt: 'Learn the essential data structures and algorithms that every data engineer should know.',
    date: '1/1/2026',
    readTime: '10 min read',
    author: 'Wilfex',
    authorIcon: 'user',
    tags: ['Data Structures', 'Algorithms', 'Python'],
    sections: [
      {
        title: 'Chapter 1: Thinking Like an Engineer',
        quote: 'Programs are written for people to read, and only incidentally for machines to execute. - Harold Abelson',
        paragraphs: [
          'By the end of this chapter, you will understand why Data Structures and Algorithms exist, why engineering is different from programming, and why efficient software matters as data grows.',
          'This book is written for engineers who want to understand how modern data systems work. Whether you are building APIs, designing ETL pipelines, optimizing SQL queries, or preparing for technical interviews, the underlying principles are the same.',
          'The goal is not merely to solve algorithm puzzles. The goal is to think like the engineers who designed PostgreSQL, Spark, Kafka, Airflow, and countless other systems.',
        ],
        bullets: [
          'Understand why Data Structures and Algorithms (DSA) exist.',
          'Distinguish between programming and engineering.',
          'Explain why efficient software matters.',
          'Recognize the trade-offs between time, memory, and simplicity.',
          'Develop the engineering mindset that underpins the rest of this book.',
          'Appreciate how DSA influences databases, distributed systems, and data engineering tools.',
        ],
      },
      {
        title: 'Who This Book Is For',
        paragraphs: [
          'Most DSA books assume one of two audiences: complete beginners learning to program, or software engineers preparing for coding interviews. This book takes a different path.',
          'It is written for engineers who want to understand how modern data systems work. The goal is not merely to solve algorithm puzzles. The goal is to think like the engineers who designed PostgreSQL, Spark, Kafka, Airflow, and countless other systems.',
        ],
      },
      {
        title: '1.1 Programming vs Engineering',
        paragraphs: [
          'Many people use the terms programmer and software engineer interchangeably. While there is significant overlap, they represent different ways of approaching problems.',
          'Imagine two people receive the same task: read a CSV file containing 10 million customer records and count how many customers belong to each country.',
          'The programmer asks: "How can I make this work?" The engineer asks: How much memory will this require? How long will it take? Can this scale to 100 million records? What happens if the file does not fit into RAM? Can the work be parallelized? Is there a more efficient algorithm?',
          'Both produce working software. Only one thinks about scalability before writing code.',
        ],
      },
      {
        title: 'Engineering Is About Trade-offs',
        paragraphs: [
          'There is rarely a perfect solution. Instead, engineers balance competing concerns and choose the right compromise for the situation.',
        ],
        table: {
          headers: ['Goal', 'Cost'],
          rows: [
            ['Faster execution', 'Often uses more memory'],
            ['Lower memory usage', 'Often requires more CPU time'],
            ['Simpler code', 'Sometimes less efficient'],
            ['Highly optimized code', 'Often more complex to maintain'],
          ],
        },
        note: 'Good engineering is the art of choosing the right compromise.',
      },
      {
        title: '1.2 Why Data Structures Exist',
        paragraphs: [
          'Imagine owning a library containing one million books. A visitor asks, "Do you have Clean Code?" If every book is piled randomly on the floor, you may need to check each one. If the books are arranged alphabetically, you already know where to begin. If you have a digital catalog, the answer comes back in moments.',
          'The books themselves never changed. Only how they were organized changed. That is precisely what a data structure is.',
        ],
        note: 'A data structure is a way of organizing data so that operations on that data become efficient.',
        bullets: [
          'Searching',
          'Inserting',
          'Updating',
          'Deleting',
          'Sorting',
          'Traversing',
        ],
      },
      {
        title: '1.3 Why Algorithms Exist',
        paragraphs: [
          'Suppose someone gives you a phone book sorted alphabetically and asks you to find John Smith. One approach is to start at page one. Another is to open roughly in the middle, discard half the book, and repeat. That method is Binary Search.',
          'The data did not change. The method changed. An algorithm is simply a procedure for solving a problem.',
        ],
        note: 'An algorithm is a finite sequence of well-defined steps used to solve a problem.',
      },
      {
        title: '1.4 Why Efficient Software Matters',
        paragraphs: [
          'Many beginners assume modern computers are so powerful that efficiency no longer matters. Reality says otherwise. As data grows, slow algorithms become visible bottlenecks.',
          'If your application searches a list of customers and each comparison takes approximately one microsecond, one thousand customers is fine, one million customers starts to hurt, and one billion customers can make the application feel broken.',
          'This is why scalability matters. The algorithm did not become worse; the data became larger.',
        ],
      },
      {
        title: '1.5 The Cost of Poor Algorithms',
        paragraphs: [
          'Imagine two developers solving the same problem. Developer A compares every customer with every other customer. Developer B builds an index first. Both solutions work. Only one scales.',
          'This is why companies care about DSA during interviews. They are not checking whether you have memorized puzzles. They are evaluating whether you can recognize when a solution will fail to scale.',
        ],
        table: {
          headers: ['Number of Records', 'Quadratic Algorithm', 'Linear Algorithm'],
          rows: [
            ['100', '10,000 operations', '100 operations'],
            ['1,000', '1,000,000 operations', '1,000 operations'],
            ['10,000', '100,000,000 operations', '10,000 operations'],
            ['1,000,000', '1,000,000,000,000 operations', '1,000,000 operations'],
          ],
        },
      },
      {
        title: '1.6 The Three Resources Every Engineer Manages',
        paragraphs: [
          'Every program consumes three primary resources: time, memory, and complexity. Improving one often affects the others. For example, caching can reduce execution time but increase memory usage.',
        ],
        bullets: ['Time: how long does the program take?', 'Memory: how much RAM is required?', 'Complexity: how difficult is the code to understand and maintain?'],
      },
      {
        title: '1.7 The Engineer\'s Mental Model',
        paragraphs: [
          'Before writing code, experienced engineers ask questions about the input, output, data size, frequency of operations, and which data structure best supports those operations. None of these questions involve syntax.',
          'Programming languages change. Engineering principles endure.',
        ],
        bullets: [
          'What is the input?',
          'What is the output?',
          'How large can the input become?',
          'Which operations occur most frequently?',
          'Which data structure best supports those operations?',
          'Can I improve the algorithm?',
          'What are the trade-offs?',
        ],
      },
      {
        title: '1.8 Why This Matters for Data Engineers',
        paragraphs: [
          'At first glance, DSA may seem unrelated to Data Engineering. In reality, nearly every major data platform is built on these concepts.',
          'PostgreSQL uses B-Trees and hashing. Spark relies on graphs, queues, and sorting. Kafka uses queues, arrays, and hashing. Airflow uses directed acyclic graphs. Redis uses hash tables and skip lists. dbt uses dependency graphs.',
          'As we progress through this book, you will see these connections repeatedly. The goal is not just to recognize a data structure. It is to understand why engineers chose it.',
        ],
        table: {
          headers: ['Technology', 'Core DSA Concepts'],
          rows: [
            ['PostgreSQL', 'B-Trees, Hash Tables, Sorting'],
            ['Spark', 'Graphs, Hash Maps, Sorting, Queues'],
            ['Kafka', 'Queues, Arrays, Hashing'],
            ['Airflow', 'Directed Acyclic Graphs'],
            ['Redis', 'Hash Tables, Skip Lists'],
            ['dbt', 'Dependency Graphs'],
          ],
        },
      },
      {
        title: '1.9 A Different Way to Think About DSA',
        paragraphs: [
          'Instead of asking which data structure you should memorize, ask what operation you perform most often. If your application searches constantly, optimize searching. If it inserts frequently, optimize insertion. If it processes streaming events, choose a structure designed for sequential processing.',
          'Data structures are tools. The problem determines which tool to use.',
        ],
        bullets: [
          'If your application searches constantly, optimize searching.',
          'If it inserts frequently, optimize insertion.',
          'If it processes streaming events, choose a structure designed for sequential processing.',
        ],
      },
      {
        title: 'Chapter Summary',
        paragraphs: [
          'In this chapter, we established the foundation for the rest of the book. We learned that engineering is about making informed trade-offs rather than simply writing code that works. We introduced the distinction between data structures and algorithms, explored why efficiency becomes increasingly important as data grows, and connected these ideas to the systems used in modern Data Engineering.',
          'The key lesson is that software engineering begins long before the first line of code is written. It begins by asking the right questions.',
        ],
      },
      {
        title: 'Key Takeaways',
        bullets: [
          'A data structure organizes data efficiently.',
          'An algorithm is a procedure for solving a problem.',
          'Engineering is about balancing trade-offs.',
          'Scalability matters more than raw hardware speed.',
          'Time, memory, and code complexity are the three primary resources to manage.',
          'Modern data systems are built on DSA concepts.',
        ],
      },
      {
        title: 'Reflection Questions',
        bullets: [
          'Why is "working code" not always good code?',
          'What trade-offs might you make when optimizing for speed?',
          'Why do different applications require different data structures?',
          'How could a poor algorithm affect a company serving millions of users?',
          'Which systems you currently use (PostgreSQL, Airflow, Kafka, etc.) might rely on DSA internally?',
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