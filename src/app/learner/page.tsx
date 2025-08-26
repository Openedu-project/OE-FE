import { Award, BookOpen, CheckCircle, Clock, Play } from "lucide-react"
import React from "react"

interface Course {
  id: number
  title: string
  description: string
  image: string
  provider: string
  progress: number
  rating: number
  currentLesson: string
  status: "in-progress" | "completed" | "not-started"
}

interface Certificate {
  id: number
  title: string
  completedDate: string
  image: string
}
function page() {
  const inProgressCourses: Course[] = [
    {
      id: 1,
      title: "Course form has cancel button",
      description: "Learn advanced form handling techniques",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      provider: "OpenEdu Academy",
      progress: 7,
      rating: 5.0,
      currentLesson: "Lesson 1",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Khóa học 3",
      description: "Comprehensive course on modern development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      provider: "No Job Dev",
      progress: 1,
      rating: 5.0,
      currentLesson: "Create your first lesson",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Course for mint NFT",
      description: "Learn about NFT creation and blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
      provider: "OpenEdu Academy",
      progress: 3,
      rating: 5.0,
      currentLesson: "Lesson 2",
      status: "in-progress",
    },
  ]

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Khóa học 3",
      completedDate: "Completed on Jul 31, 2025",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Tạo course từ AI",
      completedDate: "Completed on Jul 1, 2025",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-sm ${index < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))
  }

  const renderCourseCard = (course: Course) => (
    <div
      key={course.id}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-video bg-gray-100 relative">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-80" />
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{course.title}</h3>
        <p className="text-sm text-blue-600 mb-2">{course.provider}</p>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm font-medium">{course.progress}</span>
          <div className="flex items-center space-x-1">{renderStars(course.rating)}</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-600">{course.currentLesson}</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCertificateCard = (certificate: Certificate) => (
    <div
      key={certificate.id}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 relative p-6 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
          <Award className="w-8 h-8 text-white" />
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-blue-900 mb-2">GIẤY CHỨNG NHẬN</div>
          <div className="text-sm text-blue-700">Certificate of Completion</div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <div className="text-xs text-blue-600 font-medium">{certificate.title}</div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{certificate.title}</h3>
        <p className="text-sm text-gray-600">{certificate.completedDate}</p>
      </div>
    </div>
  )
  return (
    <div className="">
      <div className="flex-1 flex flex-col bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Welcome Section */}
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome administrator!</h1>
            </div>
            <div className="w-20 h-20">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=face"
                alt="Welcome illustration"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">8</div>
                  <div className="text-sm text-gray-600">In Progress Courses</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">1</div>
                  <div className="text-sm text-gray-600">Completed Courses</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10</div>
                  <div className="text-sm text-gray-600">Not Started Courses</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* My In Progress Courses */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">My In Progress Courses</h2>
                <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {inProgressCourses.map(renderCourseCard)}
              </div>
            </div>

            {/* My Certificates */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">My Certificates</h2>
                <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
              </div>
              <div className="space-y-6">{certificates.map(renderCertificateCard)}</div>
            </div>
          </div>

          {/* My Learning History */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">My Learning History</h2>
            <div className="bg-white rounded-lg p-12 text-center shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We are working hard to bring you something amazing. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
