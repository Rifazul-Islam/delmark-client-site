import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <RiLeafLine className="mr-2" /> Fresh Greens Market
            </h3>
            <p className="text-green-200">
              Bringing the freshest, locally-sourced vegetables right to your
              table. Our commitment is to quality, sustainability, and your
              health.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition-colors duration-300"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition-colors duration-300"
                >
                  Recipes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdEmail className="mr-2" /> info@freshgreens.com
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-2" /> (555) 123-4567
              </li>
              <li className="flex items-center">
                <MdLocationOn className="mr-2" /> 123 Veggie Lane, Green City,
                98765
              </li>
            </ul>
          </div>

          {/* Newsletter Signup Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="mb-2">
              Subscribe to our newsletter for fresh deals and recipes!
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-500 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright Section */}
        <div className="mt-8 pt-8 border-t border-green-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="hover:text-green-300 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-green-300 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-green-300 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-green-300 transition-colors duration-300"
            >
              <FaPinterestP />
            </a>
          </div>
          <div className="text-sm text-green-200">
            © {new Date().getFullYear()} Fresh Greens Market. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
