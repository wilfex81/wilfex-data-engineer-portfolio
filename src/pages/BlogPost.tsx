import React from 'react';
import { ArrowLeft, Calendar, Clock, Share2, UserRound } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getBlogPost } from '@/data/blogPosts';
import { toast } from 'sonner';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;

  const handleShare = async () => {
    const postUrl = window.location.href;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(postUrl);
      } else {
        const temporaryInput = document.createElement('input');
        temporaryInput.value = postUrl;
        document.body.appendChild(temporaryInput);
        temporaryInput.select();
        document.execCommand('copy');
        document.body.removeChild(temporaryInput);
      }

      toast.success('Link copied successfully!');
    } catch (error) {
      console.error('Failed to copy post link:', error);
      toast.error('Failed to copy link. Please try again.');
    }
  };

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
              <div className="space-y-10 max-w-none">
                {post.sections.map((section) => (
                  <section key={section.title} className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950">{section.title}</h2>

                    {section.quote ? (
                      <blockquote className="border-l-4 border-slate-200 pl-4 py-1 text-base md:text-lg italic text-slate-600">
                        {section.quote}
                      </blockquote>
                    ) : null}

                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-slate-700">
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets ? (
                      <ul className="list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}

                    {section.code ? (
                      <pre className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-5 text-sm leading-7 text-slate-100">
                        <code>{section.code}</code>
                      </pre>
                    ) : null}

                    {section.table ? (
                      <div className="overflow-hidden rounded-2xl border border-slate-200">
                        <table className="w-full border-collapse text-sm">
                          <thead className="bg-slate-50">
                            <tr>
                              {section.table.headers.map((header) => (
                                <th key={header} className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rowIndex) => (
                              <tr key={`${section.title}-row-${rowIndex}`} className="odd:bg-white even:bg-slate-50/70">
                                {row.map((cell) => (
                                  <td key={cell} className="border-b border-slate-200 px-4 py-3 text-slate-700">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}

                    {section.note ? <p className="text-base italic text-slate-600">{section.note}</p> : null}
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 flex items-center justify-between gap-4">
                <p className="text-sm text-slate-600">Share this post if it was useful.</p>
                <button type="button" onClick={handleShare} className="inline-flex items-center gap-2 text-sm font-medium text-slate-950">
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