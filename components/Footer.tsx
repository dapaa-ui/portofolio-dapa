export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Dava Portfolio
            </h3>
            <p className="text-gray-400">Full Stack Developer & Designer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/username" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/username" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:davasatria@email.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Dava Satria. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}