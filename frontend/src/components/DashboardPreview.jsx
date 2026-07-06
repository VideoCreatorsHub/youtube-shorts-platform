import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            AI Dashboard
          </h2>

          <p className="text-gray-400 mt-5 text-xl">
            Everything you need to create viral YouTube Shorts.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gray-900 border border-gray-800 p-8 shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-950 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-400">
                AI Script
              </h3>

              <p className="text-gray-400 mt-3">
                Generate engaging Shorts scripts in seconds using AI.
              </p>
            </div>

            <div className="bg-gray-950 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-purple-400">
                AI Voice
              </h3>

              <p className="text-gray-400 mt-3">
                Convert scripts into realistic voices instantly.
              </p>
            </div>

            <div className="bg-gray-950 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-400">
                AI Video
              </h3>

              <p className="text-gray-400 mt-3">
                Create professional Shorts with one click.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}