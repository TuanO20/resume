"use client"

import { motion } from "framer-motion"
import { Code, LibraryBig, Bitcoin, Laptop } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    { icon: <Bitcoin className="w-8 h-8 text-green-500" />, title: "Smart contract", description: "Solidity, Move" },
    { icon: <Code className="w-8 h-8 text-blue-500" />, title: "Frontend", description: "React JS, Bootstrap, Tailwind CSS" },
    
    { icon: <LibraryBig className="w-8 h-8 text-purple-500" />, title: "Frameworks, libraries", description: "Hardhat, OpenZeppelin, Ether.js" },
    { icon: <Laptop className="w-8 h-8 text-yellow-500" />, title: "Programming languages", description: "JavaScript, TypeScript, C/C++, Python" },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify mr-10">
              I recently graduated from the University of Information Technology in 3.5 years instead of 4. With a strong passion for
              blockchain and decentralized finance(DeFi),I am eager to work in a professional and multinational environment where
              I can contribute and grow. 
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify mr-10">
              I have experience in smart contract development and DeFi protocols, and I am committed
              to staying at the forefront of this rapidly evolving industry
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

