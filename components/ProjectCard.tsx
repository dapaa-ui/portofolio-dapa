type Props = {
  title: string
  description: string
  tech: string[]
  github: string
  demo?: string
  image?: string
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  image,
}: Props) {
  return (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="text-gray-500 text-sm">Project Preview</span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-gray-800/70 backdrop-blur-sm border border-gray-700 px-2 py-1 rounded-md text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href={github}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium flex items-center gap-1"
            target="_blank"
          >
            <span>GitHub</span>
            <span>→</span>
          </a>
          {demo && (
            <a
              href={demo}
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium flex items-center gap-1"
              target="_blank"
            >
              <span>Live Demo</span>
              <span>→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}