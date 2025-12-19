import { GiEagleEmblem } from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaYoutube, FaChevronDown } from "react-icons/fa";

export default function Footer() {

  return (
    <>
      <div className="bg-gradient-to-br from-gray-500 via-teal-700 to-gray-700 py-6 md:px-6 lg:px-20 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <span className="text-white text-4xl font-light">Albania</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-white text-3xl  font-light">
              Acknowledgement of Country
            </h1>

            <div className="flex items-start gap-8">
              <div className="flex items-center gap-2 text-red-700">
                <GiEagleEmblem size={30} />
              </div>

              <div className="flex-1 space-y-6">
                <p className="text-white text-lg leading-relaxed font-light">
                  We acknowledge the ancient Illyrian roots of the Albanian land and honour the generations who have cared for its mountains, rivers, and coasts throughout history. We recognise the enduring spirit, traditions, and culture that continue to shape Albania today.  </p>
              </div>
            </div>
          </div>
          
        </div>
        <hr className="border-gray-400 my-6" />

        <footer className="text-white py-4 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-light mb-6">Change Language</h3>
              <div className="relative">
                <button className="w-full flex items-center justify-between border border-white/30 px-4 py-3 hover:bg-white/10 transition-colors">
                  <span className="font-light">International (English)</span>
                  <FaChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-light mb-2">Find us on</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <FaFacebook className="w-5 h-5" />
                  <span className="font-light">Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <FaYoutube className="w-5 h-5" />
                  <span className="font-light">YouTube</span>
                </a>
                <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity mt-6">
                  <FaInstagram className="w-5 h-5" />
                  <span className="font-light">Instagram</span>
                </a>

              </div>
            </div>

            <div>
              <h3 className="text-lg font-light mb-2">About this site</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="font-light hover:opacity-80 transition-opacity">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="font-light hover:opacity-80 transition-opacity">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="font-light hover:opacity-80 transition-opacity">
                    Accessibility Statement
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-light mb-2">Other sites</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="font-light hover:opacity-80 transition-opacity">
                    Media & Industry
                  </a>
                </li>
                <li>
                  <a href="#" className="font-light hover:opacity-80 transition-opacity">
                    Business Events
                  </a>
                </li>
                <li>
                  <a href="#" className="font-light hover:opacity-80 transition-opacity">
                    Tourism Investment
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

    </>
  )

}