import React, { useMemo, useState } from 'react';
import { ArrowRight, Search, UserRound, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/data/blogPosts';

const BlogStudio: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return blogPosts;
    }

    return blogPosts.filter((post) => {
      const haystack = [post.partTitle, post.title, post.subtitle, post.excerpt, post.author, post.tags.join(' '), post.date, post.readTime]
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">Insights & thoughts</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">Blog</h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exploring data engineering, architecture, software systems, and the small decisions that make a pipeline reliable.
          </p>

          <div className="max-w-xl mx-auto pt-3">
            <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-sm">
              <Search className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search articles"
                placeholder="Search articles, topics, or tags..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </div>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card
              key={post.slug}
              className="group overflow-hidden rounded-3xl border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {post.partTitle ? (
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
                    {post.partTitle}
                  </p>
                ) : null}

                <h2 className="mt-5 text-xl font-semibold tracking-tight text-card-foreground group-hover:text-foreground transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3 flex-grow">{post.excerpt}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-4 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2"
                  >
                    <span>Read Article</span>
                    <span className="bg-secondary rounded-full p-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </span>
                  </Link>
                  <span className="inline-flex items-center gap-1.5">
                    {post.authorIcon === 'user' ? <UserRound className="h-3.5 w-3.5" /> : null}
                    {post.author}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="mt-24 flex flex-col items-center justify-center text-center space-y-4 min-h-[220px]">
            <p className="text-lg md:text-xl text-muted-foreground">No results found for &quot;{query}&quot;</p>
            <Button
              type="button"
              variant="ghost"
              className="text-foreground hover:text-muted-foreground"
              onClick={() => setQuery('')}
            >
              Clear search
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default BlogStudio;
