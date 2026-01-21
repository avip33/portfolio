import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";

// Custom components that can be used in MDX files
// Add your React components here (e.g., ReactFlow, Charts, etc.)
const components: MDXComponents = {
  // Example: Custom callout component
  Callout: ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" | "error" }) => {
    const styles = {
      info: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",
      warning: "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800",
      error: "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800",
    };
    return (
      <div className={`p-4 my-4 border rounded-lg ${styles[type]}`}>
        {children}
      </div>
    );
  },
  // Add more custom components as needed
  // ReactFlow: dynamic(() => import('reactflow'), { ssr: false }),
  // Chart: YourChartComponent,
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
