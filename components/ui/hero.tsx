"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full px-6 py-12 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Digital Marketing Agency in{" "}
          <span className="text-blue-600">Coimbatore</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are the best digital marketing agency in Coimbatore, helping your
          business grow with strategies that boost your online presence, attract
          visitors, and increase sales.
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
            Start a Project
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center mt-10 gap-8"
      >
        <div className="text-center">
          <p className="text-3xl font-bold text-gray-900">3+</p>
          <p className="text-gray-600">Years Experience in Industry</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-gray-900">300+</p>
          <p className="text-gray-600">Projects successfully completed</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-gray-900">5+</p>
          <p className="text-gray-600">
            Serves clients across multiple countries
          </p>
        </div>
      </motion.div>
    </section>
  );
}
