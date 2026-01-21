"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CostRow {
  item: string;
  tokens?: string;
  rate?: string;
  cost: string;
  note?: string;
}

interface CostTableProps {
  title?: string;
  description?: string;
  headers: string[];
  rows: CostRow[];
  total?: string;
  footnote?: string;
}

export function CostTable({ title, description, headers, rows, total, footnote }: CostTableProps) {
  return (
    <Card className="my-8 overflow-hidden">
      {(title || description) && (
        <CardHeader className="pb-3">
          {title && <CardTitle className="text-sm">{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className="px-4 py-2.5 text-left font-medium text-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="px-4 py-2.5">{row.item}</td>
                  {row.tokens !== undefined && (
                    <td className="px-4 py-2.5 font-mono text-xs">{row.tokens}</td>
                  )}
                  {row.rate !== undefined && (
                    <td className="px-4 py-2.5 font-mono text-xs">{row.rate}</td>
                  )}
                  <td className="px-4 py-2.5 font-mono text-xs">{row.cost}</td>
                  {row.note !== undefined && (
                    <td className="px-4 py-2.5 text-muted-foreground text-xs">{row.note}</td>
                  )}
                </tr>
              ))}
              {total && (
                <tr className="border-t-2 bg-muted/30 font-medium">
                  <td className="px-4 py-2.5" colSpan={headers.length - 1}>
                    Total
                  </td>
                  <td className="px-4 py-2.5 font-mono">{total}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {footnote && (
          <p className="px-4 py-3 text-xs text-muted-foreground border-t">{footnote}</p>
        )}
      </CardContent>
    </Card>
  );
}
