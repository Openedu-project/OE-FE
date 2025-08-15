"use client"
import React, { useState } from "react"

export function CourseDescription() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <h3 className="text-xl font-semibold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mt-7 mb-4 md:text-2xl md:leading-9">
        Mô tả
      </h3>
      <div className="relative bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(244,245,246)_0px_4px_30px_0px] box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] p-6 rounded-2xl">
        <p className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-3">
          Build enterprise-grade blockchain solutions! This advanced course focuses on scalable, secure blockchain
          architectures for large-scale...
        </p>
        <button
          type="button"
          className="text-blue-700 font-medium bg-transparent outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center p-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "See less" : "See more"}
        </button>
      </div>
    </>
  )
}
