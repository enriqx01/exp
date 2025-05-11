import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <AnimatedSection className="mb-16">
        <h1 className="text-4xl font-bold mb-4">John Doe</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Frontend Developer & UI Designer
        </p>
      </AnimatedSection>

      <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Passionate about creating beautiful, accessible, and performant web applications.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>UI/UX Design</li>
            <li>Animation & Motion</li>
          </ul>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-4">
                <h3 className="font-semibold mb-2">Project {i}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Description of project {i}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-medium"
        >
          Contact Me
        </motion.button>
      </AnimatedSection>
    </div>
  );
}