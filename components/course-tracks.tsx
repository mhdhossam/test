"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CircularProgress } from "@mui/material"
import { LinearProgress } from "@mui/material" // Import LinearProgress for top loader
import "./CSS/Courses.css"
import "./CSS/Framework.css"

const CourseTrack: React.FC = () => {
  const [loading] = React.useState<boolean>(false)
  const courses = [
    {
      image: "/perfume-making-course.jpg",
      title: "كورس تركيب العطور",
      path: "/courses/perfumes",
      description: "تعلم فن تركيب العطور الطبيعية",
    },
    {
      image: "/candle-making-course.jpg",
      title: "كورس صناعة الشموع",
      path: "/courses/candles",
      description: "اصنع شموعك الخاصة بأشكال مبتكرة",
    },
    {
      image: "/crochet-course.jpg",
      title: "كورس الكروشية",
      path: "/courses/crochet",
      description: "تعلم فن الكروشية والحياكة",
    },
    {
      image: "/job-skills-course.jpg",
      title: "كورس مهارة التوظيف",
      path: "/courses/job-skills",
      description: "طور مهاراتك للحصول على وظيفة",
    },
    {
      image: "/programming-course.png",
      title: "كورس البرمجة",
      path: "/courses/programming",
      description: "تعلم أساسيات البرمجة والتطوير",
    },
    {
      image: "/computer-skills-course.jpg",
      title: "كورس مهارات الكمبيوتر",
      path: "/courses/computer-skills",
      description: "اتقن استخدام الكمبيوتر والبرامج",
    },
    {
      image: "/german-language-course.jpg",
      title: "كورس الألماني",
      path: "/courses/german",
      description: "تعلم اللغة الألمانية من الصفر",
    },
  ]

  return (
    <>
      {/* Show LinearProgress (Top loader) if loading is true */}
      {loading && <LinearProgress color="primary" style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }} />}

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">المسارات التدريبية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img className="w-full h-48 object-cover" src={course.image || "/placeholder.svg"} alt={course.title} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link href={course.path}>
                    <Button variant="outline" className="w-full bg-transparent">
                      عرض التفاصيل
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show loader if loading is true */}
      {loading && (
        <div className="page-loader">
          <CircularProgress color="primary" />
          <p>Loading, please wait...</p>
        </div>
      )}
    </>
  )
}

export default CourseTrack
