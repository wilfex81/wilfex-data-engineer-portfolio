import React from 'react';
import { ArrowLeft, Calendar, Clock, Share2, UserRound } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getBlogPost } from '@/data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <MainLayout>
        <section className="py-28">
          <div className="container mx-auto container-padding max-w-3xl">
            <p className="text-sm text-slate-500">
              <Link to="/blog">Back to all posts</Link>
            </p>
            <h1 className="mt-6 text-4xl font-bold text-slate-950">Post not found</h1>
            <p className="mt-4 text-slate-600">The post you asked for does not exist.</p>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <article className="py-16 md:py-20 bg-white">
        <div className="container mx-auto container-padding max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-950 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>

          <div className="mt-8 space-y-5 border-b border-slate-200 pb-10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 leading-tight">
              {post.title}
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">{post.subtitle}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 pt-2">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                {post.authorIcon === 'user' ? <UserRound className="h-4 w-4" /> : null}
                {post.author}
              </span>
            </div>
          </div>

          <Card className="mt-10 border-slate-200 shadow-none">
            <CardContent className="p-6 md:p-10">
              <div className="space-y-10 prose prose-slate max-w-none prose-headings:font-semibold prose-h2:text-xl md:prose-h2:text-2xl prose-p:text-base prose-p:leading-8 prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-pre:rounded-2xl prose-pre:p-5 prose-code:text-cyan-200">
                {post.sections.map((section) => (
                  <section key={section.title} className="space-y-4">
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.code ? (
                      <pre>
                        <code>{section.code}</code>
                      </pre>
                    ) : null}
                    {section.note ? <p><em>{section.note}</em></p> : null}
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 flex items-center justify-between gap-4">
                <p className="text-sm text-slate-600">Share this post if it was useful.</p>
                <button type="button" className="inline-flex items-center gap-2 text-sm font-medium text-slate-950">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </MainLayout>
  );
};

export default BlogPost;