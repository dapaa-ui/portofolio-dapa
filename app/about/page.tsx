export default function About() {
  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tentang Saya
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer yang mencintai teknologi dan selalu bersemangat untuk belajar hal baru
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-white">Biodata</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-800">
                <span className="text-gray-400">Nama</span>
                <span className="text-white font-medium">Dava Satria</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-800">
                <span className="text-gray-400">Profesi</span>
                <span className="text-white font-medium">Full Stack Developer</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-800">
                <span className="text-gray-400">Lokasi</span>
                <span className="text-white font-medium">Indonesia</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400">Email</span>
                <span className="text-blue-400 font-medium">davasatriia@email.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-white">Tentang</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Saya adalah seorang full stack developer dengan passion dalam mengembangkan aplikasi web modern. 
              Saya memiliki pengalaman dalam berbagai teknologi dan selalu bersemangat untuk menghadapi tantangan baru.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Fokus utama saya adalah menciptakan solusi yang tidak hanya fungsional, tetapi juga user-friendly 
              dan visually appealing. Saya percaya bahwa teknologi harus memudahkan hidup orang dan menciptakan 
              pengalaman yang menyenangkan.
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center text-white">Keahlian</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl text-center hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">F</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Frontend</h3>
              <p className="text-sm text-gray-400">React, Next.js, Tailwind</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl text-center hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">B</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Backend</h3>
              <p className="text-sm text-gray-400">Laravel, Node.js</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl text-center hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">M</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Mobile</h3>
              <p className="text-sm text-gray-400">Flutter, React Native</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl text-center hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">D</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Database</h3>
              <p className="text-sm text-gray-400">MySQL, PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}