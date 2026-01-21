import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { views } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();

    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
    }

    // Upsert: increment if exists, insert with count=1 if not
    const result = await db
      .insert(views)
      .values({ slug, count: 1 })
      .onConflictDoUpdate({
        target: views.slug,
        set: {
          count: sql`${views.count} + 1`,
          updatedAt: sql`now()`,
        },
      })
      .returning({ count: views.count });

    return NextResponse.json({ count: result[0]?.count ?? 1 });
  } catch (error) {
    console.error("Error incrementing view:", error);
    return NextResponse.json({ error: "Failed to record view" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    const result = await db
      .select({ count: views.count })
      .from(views)
      .where(eq(views.slug, slug));

    return NextResponse.json({ count: result[0]?.count ?? 0 });
  } catch (error) {
    console.error("Error fetching views:", error);
    return NextResponse.json({ error: "Failed to fetch views" }, { status: 500 });
  }
}
