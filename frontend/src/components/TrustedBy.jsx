import { motion } from "framer-motion";

export default function TrustedBy() {
  const companies = [
    "YouTube",
    "OpenAI",
    "Google",
    "Canva",
    "Adobe",
    "Microsoft",
  ];

  return (
    <section className="bg-gray-950 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-lg mb-10">
          Trusted by creators using modern AI tools
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-blue-500 transition"
            >
              <h3 className="font-bold text-lg">{company}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}