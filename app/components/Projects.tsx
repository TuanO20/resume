"use client"

import { motion } from "framer-motion"
import { GithubIcon, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Decentralized Exchange",
      description: "Write smart contracts for a DEX on Ethereum ecosystem based on Uniswap V2 that allows create pairs of tokens, set the address of protocol receiving the fee from traders, swap tokens, flashswap, mint and burn LP tokens when liquidity providers depositor withdraw liquidity, etc",
      technologies: ["Solidity", "TypeScript", "Hardhat"],
      githubLink: "https://github.com/TuanO20/DeFi_DEX",
      liveDemo: "" 
    },
    {
      title: "Sui Move Project",
      description: "This project was created during Aqua Sui Move Bootcamp 2024, including six tasks related to creating token, NFT, on-chain randomness game, mini-DEX with swap and provide liquidity",
      technologies: ["Move", "TypeScript", "React JS"],
      githubLink: "https://github.com/TuanO20/MoveOnSUI",
      liveDemo: ""
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <GithubIcon className="w-5 h-5" />
                  Code
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

