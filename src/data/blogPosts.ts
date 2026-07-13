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
  partTitle?: string;
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
    partTitle: 'Part I – Foundations', 
    title: 'Data Structures & Algorithms for Data Engineers',
    subtitle: 'From Python Fundamentals to Interview Mastery',
    excerpt: 'Learn the essential data structures and algorithms that every data engineer should know.',
    date: '7/8/2026',
    readTime: '120 min read',
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
      {
        title: 'Chapter 2: Big-O Notation: Measuring Efficiency Like an Engineer',
        quote: 'The first question an engineer asks is not "Does it work?" but "How well does it work as the problem grows?"',
        paragraphs: [
          'By the end of this chapter, you will be able to understand what Big-O notation measures, distinguish between time complexity and space complexity, analyze the efficiency of common algorithms, and estimate the scalability of a solution before writing code.',
          'The goal is to make informed engineering decisions based on algorithmic trade-offs instead of relying on intuition alone.',
        ],
      },
      {
        title: '2.1 Why Engineers Measure Algorithms',
        paragraphs: [
          'Raw execution time is not the best way to compare algorithms because it depends on CPU speed, available memory, programming language, compiler optimizations, operating system, and background processes.',
          'The more important question is how the running time grows as the input grows. That is what Big-O notation helps answer.',
        ],
        note: 'Big-O compares growth, not wall-clock time.',
      },
      {
        title: 'Engineering Insight',
        paragraphs: [
          'Algorithms behave like delivery trucks. One may be slightly faster on an empty road, while another scales better when carrying heavier loads. For real systems, the better long-term choice is often the one that scales more gracefully.',
        ],
      },
      {
        title: '2.2 What Big-O Actually Measures',
        paragraphs: [
          'Big-O does not measure seconds, minutes, or CPU cycles. It measures growth.',
          'The key question is how quickly the amount of work increases as the input size grows from 10 records to 100 records to 1,000 records and beyond.',
        ],
      },
      {
        title: '2.3 A Simple Example',
        paragraphs: [
          'A loop that prints each number in a list runs once per element. If the input doubles, the work roughly doubles. That is Linear Time.',
        ],
        code: `def print_numbers(numbers):
    for number in numbers:
        print(number)`,
      },
      {
        title: 'Constant Time - O(1)',
        paragraphs: [
          'Some operations require the same amount of work regardless of input size. Accessing the first element of a list is the classic example.',
          'Hash tables also provide average-case lookups in approximately constant time, which is one reason Python dictionaries are so useful.',
        ],
      },
      {
        title: 'Linear Time - O(n)',
        paragraphs: [
          'Searching an unsorted list is linear because, in the worst case, every element must be checked. If the input size grows by a factor of 1,000, the work grows by roughly the same factor.',
        ],
        code: `def contains(numbers, target):
    for number in numbers:
        if number == target:
            return True
    return False`,
      },
      {
        title: 'Quadratic Time - O(n²)',
        paragraphs: [
          'Nested loops over the same input create quadratic growth. A small increase in input size causes a large increase in work, which makes these algorithms impractical surprisingly quickly.',
        ],
        code: `for customer in customers:
    for other_customer in customers:
        compare(customer, other_customer)`,
      },
      {
        title: 'Visualizing Growth',
        table: {
          headers: ['Input Size', 'O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n²)'],
          rows: [
            ['10', '1', '3', '10', '33', '100'],
            ['100', '1', '7', '100', '664', '10,000'],
            ['1,000', '1', '10', '1,000', '9,966', '1,000,000'],
            ['1,000,000', '1', '20', '1,000,000', '~20,000,000', '1,000,000,000,000'],
          ],
        },
        note: 'The numbers speak for themselves.',
      },
      {
        title: 'Logarithmic Time - O(log n)',
        paragraphs: [
          'Logarithmic algorithms repeatedly remove half the remaining possibilities. That is why binary search is so efficient on sorted data.',
          'Even with a million records, the number of steps stays small because each step eliminates a huge portion of the search space.',
        ],
      },
      {
        title: 'Engineering Insight',
        paragraphs: [
          'Search engines and large-scale indexing systems apply the same principle: eliminate as much unnecessary work as possible. The implementation may be far more advanced than binary search, but the underlying idea is the same.',
        ],
      },
      {
        title: 'O(n log n)',
        paragraphs: [
          'Many efficient sorting algorithms, including Merge Sort, Heap Sort, and Timsort, fall into this category because they divide data and combine results efficiently.',
        ],
        bullets: ['Merge Sort', 'Heap Sort', "Timsort (Python's built-in sorting algorithm)"],
      },
      {
        title: 'Exponential Time - O(2ⁿ)',
        paragraphs: [
          'Algorithms that try every possible combination grow extremely quickly. A problem that is manageable at 10 items becomes unusable by 40 items.',
          'These problems often require more advanced approaches such as Dynamic Programming.',
        ],
      },
      {
        title: '2.10 Time Complexity vs Space Complexity',
        paragraphs: [
          'Time is not the only resource. Memory matters too. Faster code can consume more RAM, while memory-efficient code can take longer to run. The right balance depends on the system.',
        ],
      },
      {
        title: '2.11 Worst Case, Average Case, and Best Case',
        paragraphs: [
          'When discussing complexity, engineers often specify whether they are analyzing best case, worst case, or average case behavior. Unless otherwise stated, Big-O usually refers to the worst-case growth rate because it provides an upper bound on performance.',
        ],
        bullets: [
          'Best case: the most favorable input.',
          'Worst case: the least favorable input.',
          'Average case: the expected behavior across many inputs.',
        ],
      },
      {
        title: '2.12 Ignoring Constants',
        paragraphs: [
          'Two algorithms can both be O(n) even if one performs 5n operations and the other performs 100n operations. Big-O focuses on how the algorithm grows, not the exact number of operations.',
        ],
      },
      {
        title: '2.13 Common Complexity Classes',
        table: {
          headers: ['Complexity', 'Name', 'Typical Example'],
          rows: [
            ['O(1)', 'Constant', 'Array indexing'],
            ['O(log n)', 'Logarithmic', 'Binary Search'],
            ['O(n)', 'Linear', 'Linear scan'],
            ['O(n log n)', 'Linearithmic', 'Efficient sorting'],
            ['O(n²)', 'Quadratic', 'Nested loops'],
            ['O(n³)', 'Cubic', 'Triple nested loops'],
            ['O(2ⁿ)', 'Exponential', 'Brute-force subsets'],
            ['O(n!)', 'Factorial', 'Generating all permutations'],
          ],
        },
        bullets: [
          'Prefer O(log n) over O(n) when practical.',
          'Prefer O(n log n) over O(n²).',
          'Be cautious with exponential algorithms unless the input is very small.',
        ],
      },
      {
        title: '2.14 Big-O in Data Engineering',
        paragraphs: [
          'Big-O is not just for interviews. It shows up in indexes, shuffling, ingestion, and scheduling across the systems data engineers use every day.',
          'The common question is always the same: how does the work grow as the data grows?',
        ],
        bullets: ['PostgreSQL: indexes reduce row scans.', 'Spark: repeated shuffling can become a bottleneck.', 'Kafka: append-only logs are designed for efficient ingestion.', 'Airflow: dependency management must scale cleanly.'],
      },
      {
        title: 'Chapter Summary',
        paragraphs: [
          'Big-O notation provides a language for reasoning about scalability. Rather than measuring seconds or milliseconds, it measures how the work performed by an algorithm grows as the input grows.',
          'Understanding complexity helps engineers predict performance, compare solutions fairly, and design systems that continue to perform well as datasets expand from thousands to billions of records.',
        ],
      },
      {
        title: 'Key Takeaways',
        bullets: [
          'Big-O measures growth, not elapsed time.',
          'Constant-time operations do not depend on input size.',
          'Linear algorithms grow proportionally with input.',
          'Quadratic algorithms become expensive quickly.',
          'Logarithmic algorithms scale exceptionally well.',
          'Efficient engineering requires balancing time and memory.',
          'Complexity analysis is essential for both interviews and production systems.',
        ],
      },
      {
        title: 'Reflection Questions',
        bullets: [
          'Why is measuring execution time alone insufficient when comparing algorithms?',
          'Why do we usually ignore constants in Big-O notation?',
          'Can an algorithm with better Big-O still perform worse on very small inputs? Why?',
          'When might you deliberately choose a slower algorithm because it uses less memory?',
          'Think about a SQL query you have written recently. Could changing the algorithm or access pattern reduce the amount of work the database performs?',
        ],
      },
      {
        title: 'Looking Ahead',
        paragraphs: [
          'In Chapter 3, we move from measuring algorithms to designing them. You will learn a structured problem-solving framework used by experienced engineers to tackle unfamiliar coding problems without relying on memorized solutions.',
        ],
      },
      {
        title: 'Author\'s Note',
        paragraphs: [
          'This chapter establishes the analytical foundation for everything that follows. The final edition may include growth-rate graphs, worked examples, visual demonstrations, exercises, and case studies showing how poor complexity choices affect large-scale data systems.',
        ],
        bullets: [
          'Growth-rate graphs comparing complexity classes.',
          'Worked examples of complexity analysis for Python functions.',
          'Visual demonstrations of binary search and divide-and-conquer.',
          'Exercises that ask readers to derive the complexity of real code snippets.',
          'Case studies showing how poor complexity choices affect large-scale data systems.',
        ],
      },
    ],
  },

  {
    slug: 'data-structures-algorithms-for-data-engineers',
    partTitle: 'Part II – Core Data Structures', 
    title: 'Data Structures & Algorithms for Data Engineers',
    subtitle: 'From Python Fundamentals to Interview Mastery',
    excerpt: 'Learn the essential data structures and algorithms that every data engineer should know.',
    date: '7/9/2026',
    readTime: '60 min read',
    author: 'Wilfex',
    authorIcon: 'user',
    tags: ['Data Structures', 'Algorithms', 'Python'],
    sections: [
      {
        title: 'Chapter 4: Arrays – The Foundation of Efficient Computing',
        quote: 'Every abstraction in computer science eventually rests on how bytes are arranged in memory.',
        paragraphs: [
          'By the end of this chapter, you will be able to explain what an array is, understand how arrays are stored in memory, distinguish between static arrays and dynamic arrays, analyze the time complexity of common array operations, understand why Python\'s list behaves like a dynamic array, recognize when arrays are the right and wrong choice, and connect arrays to databases, analytics engines, and modern data systems.',
        ],
        bullets: [
          'Explain what an array is and why it exists.',
          'Understand how arrays are stored in memory.',
          'Distinguish between static arrays and dynamic arrays.',
          'Analyze the time complexity of common array operations.',
          'Understand why Python\'s list behaves like a dynamic array.',
          'Recognize when arrays are the right and wrong choice.',
          'Connect arrays to databases, analytics engines, and modern data systems.',
        ],
      },
      {
        title: '4.1 Why Arrays Exist',
        paragraphs: [
          'Imagine you\'re managing a warehouse with one million storage boxes. Every morning, workers receive requests like: retrieve box #582,314. If the boxes are scattered randomly, a worker must search aisle after aisle until the correct box is found. Even with a good inventory system, physically retrieving the box would be slow.',
          'A better approach is to arrange every box in order. If you know where Box 1 is stored, you can calculate the location of Box 582,314 without checking any of the others. That is the core idea behind an array.',
          'An array stores elements next to one another in memory, allowing the computer to calculate the address of any element directly.',
        ],
      },
      {
        title: 'Engineering Insight',
        paragraphs: [
          'An array is not fast because computers are powerful. It is fast because its layout in memory makes finding data almost trivial.',
        ],
      },
      {
        title: '4.2 What Is an Array?',
        paragraphs: [
          'An array is a collection of elements stored in contiguous memory locations, where each element can be accessed using an index.',
          'Three ideas are important: the elements are stored together, every element occupies a predictable amount of memory, and the location of each element can be calculated.',
        ],
        code: `Index

0     1     2     3     4

+-----+-----+-----+-----+-----+
| 17  | 23  | 91  | 14  |  8  |
+-----+-----+-----+-----+-----+

numbers[2] -> 91`,
      },
      {
        title: '4.3 Memory: The Hidden Story',
        paragraphs: [
          'Many programmers think numbers = [17, 23, 91, 14, 8] creates a list. Internally, much more is happening. Imagine memory as a long street of numbered houses.',
          'Suppose each integer occupies four bytes. Memory looks like this: Address 1000 holds 17, address 1004 holds 23, address 1008 holds 91, address 1012 holds 14, and address 1016 holds 8. Notice the pattern: each element is exactly four bytes away from the previous one.',
          'This predictability allows the CPU to compute the address mathematically instead of searching.',
        ],
        code: `Address     Value

1000        17
1004        23
1008        91
1012        14
1016        8`,
      },
      {
        title: 'Address Calculation',
        paragraphs: [
          'Suppose the base address is 1000 and each element occupies 4 bytes. To find index 3, the CPU calculates 1000 + (3 x 4) = 1012. No searching. No iteration. Only arithmetic.',
          'That is why indexing is so efficient.',
        ],
        code: `Base address: 1000
Element size: 4 bytes

1000 + (3 x 4)

=

1012`,
      },
      {
        title: 'Complexity',
        paragraphs: [
          'Access by index, such as numbers[3], is O(1). Regardless of whether the array contains 10 elements, 10,000 elements, or 10 million elements, the calculation is essentially the same.',
        ],
      },
      {
        title: 'Engineering Insight',
        paragraphs: [
          'This simple property explains why arrays underpin so much of computing. Direct indexing is one of the cheapest operations a processor can perform.',
        ],
      },
      {
        title: '4.4 Static vs Dynamic Arrays',
        paragraphs: [
          'Not all arrays behave the same.',
        ],
      },
      {
        title: 'Static Arrays',
        paragraphs: [
          'A static array has a fixed size. If you allocate space for 100 elements, you cannot store 101 elements without creating an entirely new array.',
          'Languages like C support static arrays directly.',
        ],
        bullets: [
          'Advantages: very fast and predictable memory usage.',
          'Disadvantages: the size cannot change.',
        ],
      },
      {
        title: 'Dynamic Arrays',
        paragraphs: [
          'Most modern languages use dynamic arrays. Python\'s list, Java\'s ArrayList, C++\'s vector, and JavaScript arrays automatically resize when necessary.',
          'To the programmer, numbers.append(42) looks effortless. Internally, however, resizing can be expensive.',
        ],
      },
      {
        title: '4.5 How Dynamic Arrays Grow',
        paragraphs: [
          'Suppose an array currently has capacity for four elements. Now we append 50, but there is no room. The runtime typically allocates a larger block of memory, copies every existing element, appends the new value, and releases the old memory.',
        ],
        code: `Capacity = 4

+----+----+----+----+
| 10 | 20 | 30 | 40 |
+----+----+----+----+

numbers.append(50)

Capacity = 8

+----+----+----+----+----+----+----+----+
|10  |20  |30  |40  |50  |    |    |    |
+----+----+----+----+----+----+----+----+`,
      },
      {
        title: 'Does That Mean append() Is Slow?',
        paragraphs: [
          'Not usually. Most appends simply place the new value into unused space. Only occasionally does resizing occur. Because resizing is infrequent, the average cost of append() remains constant.',
          'This is known as amortized O(1) time. We\'ll revisit amortized analysis later in the book.',
        ],
      },
      {
        title: '4.6 Common Array Operations',
        table: {
          headers: ['Operation', 'Time Complexity'],
          rows: [
            ['Access by index', 'O(1)'],
            ['Update by index', 'O(1)'],
            ['Append (dynamic array)', 'Amortized O(1)'],
            ['Search (unsorted)', 'O(n)'],
            ['Insert at beginning', 'O(n)'],
            ['Delete at beginning', 'O(n)'],
            ['Insert in middle', 'O(n)'],
            ['Delete in middle', 'O(n)'],
          ],
        },
      },
      {
        title: 'Engineering Insight',
        paragraphs: [
          'Insertion and deletion are expensive because elements must shift to keep memory contiguous. If you insert 15 at index 1 in 10 20 30 40, then 20, 30, and 40 all move one position.',
        ],
      },
      {
        title: '4.7 Arrays and CPU Caches',
        paragraphs: [
          'This is one of the biggest reasons arrays perform so well. Modern CPUs use small, extremely fast memories called caches. When a CPU loads one element from memory, it often loads several neighboring elements at the same time.',
          'Because arrays store data contiguously, the next few elements are likely already in the cache. This improves performance dramatically. Linked lists, which we\'ll study later, do not benefit from this property because their nodes may be scattered throughout memory.',
          'This concept is called cache locality, and it is a major reason arrays outperform linked lists in many real-world applications, even when theoretical complexity appears similar.',
        ],
      },
      {
        title: '4.8 Arrays in Data Engineering',
        paragraphs: [
          'Arrays appear everywhere. PostgreSQL stores rows contiguously on disk, improving sequential reads. Apache Arrow stores columns in contiguous memory buffers, enabling high-performance analytics and vectorized execution. NumPy arrays are contiguous blocks of memory containing values of the same type, allowing highly optimized numerical computation. Pandas columns are backed by array-like structures, making column-wise operations efficient. Spark partitions data into contiguous structures that can be processed efficiently across a cluster.',
          'The principle is the same: keep related data together to maximize throughput.',
        ],
      },
      {
        title: 'Engineering Insight',
        paragraphs: [
          'When people say that Pandas or NumPy are fast, they are not just referring to Python. They are referring to careful memory layout, vectorized operations, and minimizing unnecessary work, all concepts rooted in arrays.',
        ],
      },
      {
        title: '4.9 When Should You Use an Array?',
        paragraphs: [
          'Arrays are an excellent choice when fast random access is required, data is mostly read rather than modified, cache performance matters, and the number of insertions and deletions is relatively small.',
          'Avoid arrays when frequent insertions occur at the beginning, frequent deletions occur in the middle, or elements constantly change position. In those cases, another data structure such as a linked list may be more appropriate.',
        ],
        bullets: [
          'Fast random access is required.',
          'Data is mostly read rather than modified.',
          'Cache performance matters.',
          'The number of insertions and deletions is relatively small.',
        ],
      },
      {
        title: 'Common Interview Patterns',
        paragraphs: [
          'Arrays are the foundation for many algorithmic techniques. Throughout this book, you will encounter Two Pointers, Sliding Window, Prefix Sum, Binary Search on sorted arrays, Kadane\'s Algorithm, and Merge Intervals.',
          'Mastering arrays will make these patterns much easier to understand.',
        ],
        bullets: [
          'Two Pointers',
          'Sliding Window',
          'Prefix Sum',
          'Binary Search (on sorted arrays)',
          'Kadane\'s Algorithm',
          'Merge Intervals',
        ],
      },
      {
        title: 'Mini Project',
        paragraphs: [
          'Imagine you\'re building a simple analytics tool. Given a list of daily website visits, your tasks are to find the total visits, compute the average, find the busiest day, and identify the day with the lowest traffic. Later in the book, you\'ll revisit this project using more advanced data structures and algorithms to compare performance and design choices.',
        ],
        code: `visits = [120, 145, 133, 160, 155, 170, 180]

1. Find the total visits.
2. Compute the average.
3. Find the busiest day.
4. Identify the day with the lowest traffic.`,
      },
      {
        title: 'Chapter Summary',
        paragraphs: [
          'Arrays are one of the most fundamental data structures in computer science because they organize data in contiguous memory, enabling direct access to any element in constant time.',
          'This simple design has profound consequences. Arrays underpin programming languages, databases, analytics engines, and scientific computing libraries. Understanding how they work in memory provides intuition that will carry through the rest of this book.',
        ],
      },
      {
        title: 'Key Takeaways',
        bullets: [
          'Arrays store elements contiguously in memory.',
          'Direct indexing is possible because addresses can be calculated.',
          'Access by index is O(1).',
          'Searching an unsorted array is O(n).',
          'Insertions and deletions in the middle require shifting elements.',
          'Dynamic arrays trade occasional resizing for convenient growth.',
          'Cache locality is one of the primary reasons arrays perform well.',
          'Many data engineering tools are built on array-based storage.',
        ],
      },
      {
        title: 'Reflection Questions',
        bullets: [
          'Why is indexing into an array considered O(1)?',
          'What happens internally when a dynamic array runs out of capacity?',
          'Why can arrays outperform linked lists in practice despite similar theoretical complexities for some operations?',
          'How does contiguous memory benefit CPU caches?',
          'Which of the data engineering tools you use rely on array-like storage, and why?',
        ],
      },
      {
        title: 'Preview of Chapter 5',
        paragraphs: [
          'In the next chapter, we\'ll build on arrays by exploring Strings. Although strings often look like simple text, they are specialized sequences with unique properties, performance characteristics, and algorithmic patterns. You\'ll learn why string processing is fundamental to databases, search engines, log analysis, and natural language applications, and why mastering strings is essential for both interviews and production systems.',
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
      {
        title: 'Chapter 2: Big-O Notation: Measuring Efficiency Like an Engineer',
        quote: 'The first question an engineer asks is not "Does it work?" but "How well does it work as the problem grows?"',
        paragraphs: [
          'By the end of this chapter, you will be able to understand what Big-O notation measures, distinguish between time complexity and space complexity, analyze the efficiency of common algorithms, and estimate the scalability of a solution before writing code.',
          'The goal is to make informed engineering decisions based on algorithmic trade-offs instead of relying on intuition alone.',
        ],
      },
      {
        title: '2.1 Why Engineers Measure Algorithms',
        paragraphs: [
          'Raw execution time is not the best way to compare algorithms because it depends on CPU speed, available memory, programming language, compiler optimizations, operating system, and background processes.',
          'The more important question is how the running time grows as the input grows. That is what Big-O notation helps answer.',
        ],
        note: 'Big-O compares growth, not wall-clock time.',
      },
      {
        title: 'Engineering Insight',
        paragraphs: [
          'Algorithms behave like delivery trucks. One may be slightly faster on an empty road, while another scales better when carrying heavier loads. For real systems, the better long-term choice is often the one that scales more gracefully.',
        ],
      },
      {
        title: '2.2 What Big-O Actually Measures',
        paragraphs: [
          'Big-O does not measure seconds, minutes, or CPU cycles. It measures growth.',
          'The key question is how quickly the amount of work increases as the input size grows from 10 records to 100 records to 1,000 records and beyond.',
        ],
      },
      {
        title: '2.3 A Simple Example',
        paragraphs: [
          'A loop that prints each number in a list runs once per element. If the input doubles, the work roughly doubles. That is Linear Time.',
        ],
        code: `def print_numbers(numbers):
    for number in numbers:
        print(number)`,
      },
      {
        title: 'Constant Time - O(1)',
        paragraphs: [
          'Some operations require the same amount of work regardless of input size. Accessing the first element of a list is the classic example.',
          'Hash tables also provide average-case lookups in approximately constant time, which is one reason Python dictionaries are so useful.',
        ],
      },
      {
        title: 'Linear Time - O(n)',
        paragraphs: [
          'Searching an unsorted list is linear because, in the worst case, every element must be checked. If the input size grows by a factor of 1,000, the work grows by roughly the same factor.',
        ],
        code: `def contains(numbers, target):
    for number in numbers:
        if number == target:
            return True
    return False`,
      },
      {
        title: 'Quadratic Time - O(n²)',
        paragraphs: [
          'Nested loops over the same input create quadratic growth. A small increase in input size causes a large increase in work, which makes these algorithms impractical surprisingly quickly.',
        ],
        code: `for customer in customers:
    for other_customer in customers:
        compare(customer, other_customer)`,
      },
      {
        title: 'Visualizing Growth',
        table: {
          headers: ['Input Size', 'O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n²)'],
          rows: [
            ['10', '1', '3', '10', '33', '100'],
            ['100', '1', '7', '100', '664', '10,000'],
            ['1,000', '1', '10', '1,000', '9,966', '1,000,000'],
            ['1,000,000', '1', '20', '1,000,000', '~20,000,000', '1,000,000,000,000'],
          ],
        },
        note: 'The numbers speak for themselves.',
      },
      {
        title: 'Logarithmic Time - O(log n)',
        paragraphs: [
          'Logarithmic algorithms repeatedly remove half the remaining possibilities. That is why binary search is so efficient on sorted data.',
          'Even with a million records, the number of steps stays small because each step eliminates a huge portion of the search space.',
        ],
      },
      {
        title: 'Engineering Insight',
        paragraphs: [
          'Search engines and large-scale indexing systems apply the same principle: eliminate as much unnecessary work as possible. The implementation may be far more advanced than binary search, but the underlying idea is the same.',
        ],
      },
      {
        title: 'O(n log n)',
        paragraphs: [
          'Many efficient sorting algorithms, including Merge Sort, Heap Sort, and Timsort, fall into this category because they divide data and combine results efficiently.',
        ],
        bullets: ['Merge Sort', 'Heap Sort', "Timsort (Python's built-in sorting algorithm)"],
      },
      {
        title: 'Exponential Time - O(2ⁿ)',
        paragraphs: [
          'Algorithms that try every possible combination grow extremely quickly. A problem that is manageable at 10 items becomes unusable by 40 items.',
          'These problems often require more advanced approaches such as Dynamic Programming.',
        ],
      },
      {
        title: '2.10 Time Complexity vs Space Complexity',
        paragraphs: [
          'Time is not the only resource. Memory matters too. Faster code can consume more RAM, while memory-efficient code can take longer to run. The right balance depends on the system.',
        ],
      },
      {
        title: '2.11 Worst Case, Average Case, and Best Case',
        paragraphs: [
          'When discussing complexity, engineers often specify whether they are analyzing best case, worst case, or average case behavior. Unless otherwise stated, Big-O usually refers to the worst-case growth rate because it provides an upper bound on performance.',
        ],
        bullets: [
          'Best case: the most favorable input.',
          'Worst case: the least favorable input.',
          'Average case: the expected behavior across many inputs.',
        ],
      },
      {
        title: '2.12 Ignoring Constants',
        paragraphs: [
          'Two algorithms can both be O(n) even if one performs 5n operations and the other performs 100n operations. Big-O focuses on how the algorithm grows, not the exact number of operations.',
        ],
      },
      {
        title: '2.13 Common Complexity Classes',
        table: {
          headers: ['Complexity', 'Name', 'Typical Example'],
          rows: [
            ['O(1)', 'Constant', 'Array indexing'],
            ['O(log n)', 'Logarithmic', 'Binary Search'],
            ['O(n)', 'Linear', 'Linear scan'],
            ['O(n log n)', 'Linearithmic', 'Efficient sorting'],
            ['O(n²)', 'Quadratic', 'Nested loops'],
            ['O(n³)', 'Cubic', 'Triple nested loops'],
            ['O(2ⁿ)', 'Exponential', 'Brute-force subsets'],
            ['O(n!)', 'Factorial', 'Generating all permutations'],
          ],
        },
        bullets: [
          'Prefer O(log n) over O(n) when practical.',
          'Prefer O(n log n) over O(n²).',
          'Be cautious with exponential algorithms unless the input is very small.',
        ],
      },
      {
        title: '2.14 Big-O in Data Engineering',
        paragraphs: [
          'Big-O is not just for interviews. It shows up in indexes, shuffling, ingestion, and scheduling across the systems data engineers use every day.',
          'The common question is always the same: how does the work grow as the data grows?',
        ],
        bullets: ['PostgreSQL: indexes reduce row scans.', 'Spark: repeated shuffling can become a bottleneck.', 'Kafka: append-only logs are designed for efficient ingestion.', 'Airflow: dependency management must scale cleanly.'],
      },
      {
        title: 'Chapter Summary',
        paragraphs: [
          'Big-O notation provides a language for reasoning about scalability. Rather than measuring seconds or milliseconds, it measures how the work performed by an algorithm grows as the input grows.',
          'Understanding complexity helps engineers predict performance, compare solutions fairly, and design systems that continue to perform well as datasets expand from thousands to billions of records.',
        ],
      },
      {
        title: 'Key Takeaways',
        bullets: [
          'Big-O measures growth, not elapsed time.',
          'Constant-time operations do not depend on input size.',
          'Linear algorithms grow proportionally with input.',
          'Quadratic algorithms become expensive quickly.',
          'Logarithmic algorithms scale exceptionally well.',
          'Efficient engineering requires balancing time and memory.',
          'Complexity analysis is essential for both interviews and production systems.',
        ],
      },
      {
        title: 'Reflection Questions',
        bullets: [
          'Why is measuring execution time alone insufficient when comparing algorithms?',
          'Why do we usually ignore constants in Big-O notation?',
          'Can an algorithm with better Big-O still perform worse on very small inputs? Why?',
          'When might you deliberately choose a slower algorithm because it uses less memory?',
          'Think about a SQL query you have written recently. Could changing the algorithm or access pattern reduce the amount of work the database performs?',
        ],
      },
      {
        title: 'Looking Ahead',
        paragraphs: [
          'In Chapter 3, we move from measuring algorithms to designing them. You will learn a structured problem-solving framework used by experienced engineers to tackle unfamiliar coding problems without relying on memorized solutions.',
        ],
      },
      {
        title: 'Author\'s Note',
        paragraphs: [
          'This chapter establishes the analytical foundation for everything that follows. The final edition may include growth-rate graphs, worked examples, visual demonstrations, exercises, and case studies showing how poor complexity choices affect large-scale data systems.',
        ],
        bullets: [
          'Growth-rate graphs comparing complexity classes.',
          'Worked examples of complexity analysis for Python functions.',
          'Visual demonstrations of binary search and divide-and-conquer.',
          'Exercises that ask readers to derive the complexity of real code snippets.',
          'Case studies showing how poor complexity choices affect large-scale data systems.',
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
    date: '6/08/2026',
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
    date: '5/25/2026',
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
    date: '4/05/2026',
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