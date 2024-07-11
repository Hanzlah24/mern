import { FaDiscord, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-300 via-blue-50 to-white text-gray-900 py-6 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-12">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-500 transition duration-300">
            <FaDiscord size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-500 transition duration-300">
            <FaInstagram size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-500 transition duration-300">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:your-email@gmail.com" className="text-gray-900 hover:text-blue-500 transition duration-300">
            <FaEnvelope size={30} />
          </a>
        </div>
        <p className="mt-4 text-gray-700">&copy; 2024 Muhammad Hanzala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
