"use client"

import { useState } from "react"
import { blogPosts, getPostsByCategory } from "@/lib/blog-data"
import { BlogFilter } from "@/components/blog-filter"
import { BlogCard } from "@/components/blog-card"

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All")
  const filteredPosts = getPostsByCategory(activeCategory)

  return (
    <>
      <BlogFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            No articles found in this category yet. Check back soon.
          </p>
        </div>
      )}
    </>
  )
}
