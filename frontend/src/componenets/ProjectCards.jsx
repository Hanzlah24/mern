import React from 'react'
import ProjectCard from './ProjectCard'
import ButtonComponent from './ButtonComponent'
const ProjectCards = ({language}) => {
  return (
    <>
    <div className="flex items-center justify-center  bg-gradient-to-r from-blue-300 via-blue-50 to-white">
      <section className="max-w-screen-lg mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-500">
          {language.name}
        </h2>
        <p className="mt-8 text-gray-600 text-center">
          {language.description}
        </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {language.projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
      </section>
    </div>
    <ButtonComponent title='Back' link='/'/>
    </>
  )
}

export default ProjectCards
