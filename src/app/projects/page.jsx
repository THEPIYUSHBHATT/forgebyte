'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image' 
export default function Page() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  // Sample data for projects
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of project 1.',
      img: '/path-to-image1.jpg',
      stats: {
        traffic: '50k',
        keywords: '200',
      },
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of project 2.',
      img: '/path-to-image2.jpg',
      stats: {
        traffic: '100k',
        keywords: '150',
      },
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of project 3.',
      img: '/path-to-image3.jpg',
      stats: {
        traffic: '75k',
        keywords: '120',
      },
    },
  ]

  // Function to handle mouse movement for the hover effect
  const handleMouseMove = (e, projectId) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setHoveredProject(projectId)
  }

  // Function to render project stats (traffic and keywords)
  const renderStats = (stats) => {
    return (
      <div className="flex justify-between items-start">
        {/* Traffic Stat */}
        <div>
          <p className="text-5xl font-bold text-orange-500 mb-2">
            {stats.traffic}
          </p>
          <p className="text-gray-400">Increase in website traffic</p>
        </div>
        {/* Keywords Stat */}
        <div>
          <p className="text-5xl font-bold text-orange-500 mb-2">
            {stats.keywords}
          </p>
          <p className="text-gray-400">Target keywords ranked</p>
        </div>
      </div>
    )
  }

  // Function to render each project card
  const renderCard = (project) => (
    <div
      id={`project-${project.id}`}
      key={project.id}
      className="flex flex-col md:flex-row bg-[#1f1d1d] rounded-3xl overflow-hidden group relative h-[350px] w-[100%] mx-auto"
      onMouseMove={(e) => handleMouseMove(e, project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      onClick={() => {
        // Placeholder for click action
        console.log(`Clicked on project ${project.id}`)
      }}
    >
      {/* Image Section */}
      <div className="relative md:w-2/5 aspect-[3/2] rounded-lg overflow-hidden">
        <Image
          height={100}
          width={100}
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-3/5 p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500 text-sm font-medium tracking-wider">
              CASE STUDY
            </span>
            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
          </div>

          <h2 className="text-2xl font-bold mb-3 text-white">
            {project.title}
          </h2>

          <p className="text-gray-400 mb-8">{project.description}</p>
        </div>

        {/* Stats Section */}
        {renderStats(project.stats)}
      </div>

      {/* Hover Effect: Orange Circle */}
      {hoveredProject === project.id && (
        <div
          className="absolute w-24 h-24 bg-orange-500 rounded-full z-10 pointer-events-none flex items-center justify-center text-white text-lg opacity-0 transition-opacity duration-300"
          style={{
            left: cursorPosition.x - 48, // Adjust to center the circle around the cursor
            top: cursorPosition.y - 48, // Adjust to center the circle around the cursor
            opacity: hoveredProject === project.id ? 1 : 0, // Make the circle visible only when the div is hovered
          }}
        >
          View
        </div>
      )}
    </div>
  )

  useEffect(() => {
    // Add event listener for scroll events
    const handleScroll = () => {
      // Ensure the circle stays within the bounds of the div and moves accordingly
      if (hoveredProject) {
        const activeProject = document.querySelector(
          `#project-${hoveredProject}`
        )
        const rect = activeProject.getBoundingClientRect()
        setCursorPosition({
          x: cursorPosition.x < rect.left ? rect.left : cursorPosition.x, // Ensure it stays within bounds
          y: cursorPosition.y < rect.top ? rect.top : cursorPosition.y, // Ensure it stays within bounds
        })
      }
    }
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [cursorPosition, hoveredProject])

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 md:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mt-10 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
          Check Our Works With
          <br />
          Real Results
        </h1>
      </div>

      {/* Project Cards Container */}
      <div className="max-w-7xl mx-auto space-y-8">
        {projects.map(renderCard)}{' '}
        {/* Mapping through projects and rendering cards */}
      </div>
    </div>
  )
}
