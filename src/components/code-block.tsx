import { codeToHtml } from "shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export async function CodeBlock({ code, language = "typescript", filename }: CodeBlockProps) {
  const html = await codeToHtml(code.trim(), {
    lang: language,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border">
      {filename && (
        <div className="border-b border-border bg-muted/50 px-4 py-2 text-xs text-muted-foreground font-mono">
          {filename}
        </div>
      )}
      <div
        className="overflow-x-auto text-sm [&_pre]:!bg-transparent [&_pre]:p-4 [&_pre]:!m-0 [&_.shiki]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
