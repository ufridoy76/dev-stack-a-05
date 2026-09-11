import { FaFacebook, FaGithubAlt, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "./../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="" />
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center gap-4 text-3xl font-medium text-blue-500">
              <FaGithubAlt className="hover:text-indigo-600 transition-colors text-slate-600"></FaGithubAlt>
              <FaTwitter className="hover:text-indigo-600 transition-colors"></FaTwitter>
              <FaLinkedin className="hover:text-indigo-600 transition-colors"></FaLinkedin>
              <FaFacebook className="hover:text-indigo-600 transition-colors"></FaFacebook>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Product
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
