import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white">

      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Create <span className="text-blue-500">AI YouTube Shorts</span>
          <br />
          in Minutes
        </h1>

        <p className="mt-6 text-gray-300 text-xl max-w-2xl mx-auto">
          Generate scripts, AI voices, subtitles, videos and publish directly
          to YouTube with one click.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold">
            Start Free
          </button>

          <button className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-xl">
            Watch Demo
          </button>
        </div>
      </motion.div>

    </section>
  );
}