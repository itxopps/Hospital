import React from "react";
import { blogPostsData } from "@/data/hospitalData";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Blog | Faris Al-Jazeera Medical Complex" };

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold font-heading">Health & Medical Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPostsData.map((post) => (
          <Card key={post.id} className="p-6 space-y-2">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p className="text-xs text-slate-600">{post.excerpt}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}