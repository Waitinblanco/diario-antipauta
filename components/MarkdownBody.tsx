import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="mt-9 mb-3 font-display text-2xl leading-tight text-ink">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-7 mb-2 font-display text-xl text-ink">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-[17px] leading-8 text-ink-soft">{children}</p>
  ),
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-1 pl-5 text-[17px] leading-8 text-ink-soft">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-1 pl-5 text-[17px] leading-8 text-ink-soft">{children}</ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-hot pl-4 font-display text-xl italic text-ink">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto border border-ink">
      <table className="w-full min-w-[32rem] border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-ink text-paper">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-ink/20 px-3 py-2 text-left font-semibold uppercase tracking-[0.08em]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-t border-ink/15 px-3 py-2 align-top leading-relaxed">{children}</td>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-ia underline underline-offset-2 hover:text-hot">
      {children}
    </a>
  ),
};

export function MarkdownBody({ source }: { source: string }) {
  return (
    <div className="nota-prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {source}
      </ReactMarkdown>
    </div>
  );
}
