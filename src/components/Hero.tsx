export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 py-20 mt-16">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-white to-pink-200 text-transparent bg-clip-text">
            JAMES WILLIAMS
          </span>
        </h1>
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Designer & Front-end Developer
          </p>
          <p className="text-lg text-gray-400">
            With over a decade of experience in multiple disciplines, I work with companies to create intuitive and engaging digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}