import { FaRobot, FaVideo, FaCloudUploadAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={40} className="text-blue-500" />,
    title: "AI Script Generator",
    description: "Generate engaging YouTube Shorts scripts in seconds."
  },
  {
    icon: <FaVideo size={40} className="text-purple-500" />,
    title: "AI Video Creation",
    description: "Turn scripts into professional short videos automatically."
  },
  {
    icon: <FaCloudUploadAlt size={40} className="text-green-500" />,
    title: "One-Click Upload",
    description: "Publish your Shorts directly to YouTube."
  }
];

export default function Features() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Powerful AI Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition"
          >
            <div className="mb-5">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}