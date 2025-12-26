import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/project'

export default function Projects() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">Projects</h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Beberapa project yang telah saya kerjakan</p>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
