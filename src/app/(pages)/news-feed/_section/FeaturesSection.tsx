import React from "react"
import { featuredArticles } from "../_data/articles"
import { ArticleCard } from "../_ui/ArticleCard"

export function FeaturesSection() {
  return (
    <div className="box-border grow outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
      <h2 className="text-blue-700 text-xl font-semibold box-border leading-7 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] border-blue-700 mb-6 pl-2 border-l-2 border-solid font-lexend">
        Features
      </h2>
      <div className="box-border gap-x-3 flex grid-cols-none outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-3 overflow-auto md:gap-x-6 md:grid md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-6">
        {featuredArticles.map((article, index) => (
          <ArticleCard key={article.id} article={article} variant={index === 0 ? "featured" : "regular"} />
        ))}
      </div>
    </div>
  )
}
