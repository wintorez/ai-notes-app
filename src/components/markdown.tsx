import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
}

export default function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, children }) => {
          const isInternalLink =
            href?.startsWith(process.env.NEXT_PUBLIC_BASE_URL!) ||
            href?.startsWith("/");
          if (isInternalLink) {
            return (
              <Link href={href || "#"} className="text-primary hover:underline">
                {children}
              </Link>
            );
          }
          return (
            <a href={href || "#"} className="text-primary hover:underline">
              {children}
            </a>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
