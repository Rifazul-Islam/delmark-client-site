import React from "react";

import { motion } from "framer-motion";
import { FaExclamationTriangle, FaHome, FaArrowLeft } from "react-icons/fa";
import { RiQuestionMark } from "react-icons/ri";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="space-y-4"
        >
          <FaExclamationTriangle className="mx-auto h-24 w-24 text-yellow-500" />
        </motion.div>

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold text-gray-900">Page Not Found</h2>
          <p className="text-xl text-gray-600">
            Oops! <i>{error.statusText || error.message}</i>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 p-2 rounded-lg text-white">
            <Link to="/" className="flex items-center justify-center">
              <FaHome className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </button>
          <button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-purple-600 text-purple-600 hover:bg-purple-100"
          >
            <Link
              href="javascript:history.back()"
              className="flex items-center justify-center"
            >
              <FaArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8"
        >
          <p className="text-sm text-gray-500 flex items-center justify-center">
            <RiQuestionMark className="mr-2" />
            Need help?{" "}
            <Link
              href="/contact"
              className="font-medium text-purple-600 hover:text-purple-500 transition-colors ml-1"
            >
              Contact our support team
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
