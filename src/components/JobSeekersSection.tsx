import React from "react";
import { motion } from "framer-motion";

const JobSeekersSection = () => {
  const cards = [
    {
      title: "No More Black Holes",
      description: "Get real visibility and feedback on your applications.",
      image: "/lovable-uploads/d64f6cc5-261c-428a-91a0-0e5dd91534a0.png"
    },
    {
      title: "Smarter Job Matching",
      description: "Connect with roles that truly fit your skills and aspirations.",
      image: "/lovable-uploads/d64f6cc5-261c-428a-91a0-0e5dd91534a0.png"
    },
    {
      title: "Transparent Hiring Process",
      description: "No ghosting, no false promises—just real opportunities.",
      image: "/lovable-uploads/d64f6cc5-261c-428a-91a0-0e5dd91534a0.png"
    }
  ];

  return (
    <section className="min-h-screen bg-secondary py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-navy-900 mb-16"
        >
          For Job Seekers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="bg-white/95 p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-700">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobSeekersSection;