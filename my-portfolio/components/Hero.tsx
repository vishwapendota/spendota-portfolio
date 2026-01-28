export default function Hero() {
  return (
    <section className="relative text-center py-32">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        Hi, I&apos;m <span className="text-blue-400">Sai Vishwa Nihar Pendota</span>
      </h1>

      <p className="mt-6 text-lg text-gray-300">
        Cloud & DevOps Engineer | Azure | Kubernetes | DevSecOps
      </p>

      <a
        href="#projects"
        className="inline-block mt-10 px-8 py-3 rounded-lg
                   bg-gradient-to-r from-blue-500 to-purple-500
                   hover:scale-105 transition-transform font-semibold"
      >
        View My Work
      </a>
    </section>
  )
}
