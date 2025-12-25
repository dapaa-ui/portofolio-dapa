import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/project'

export default function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-400 mb-10">Beberapa project yang telah saya kerjakan</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
