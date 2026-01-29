import { GiEagleEmblem } from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaYoutube, FaChevronDown } from "react-icons/fa";

export default function Footer() {

  return (
    <>
      <div className="bg-gradient-to-br from-gray-500 via-teal-700 to-gray-700 py-2 md:px-6 lg:px-20 mt-10">
        <div className="flex items-start items-center justify-center gap-8 mb-2">
          <div className="flex items-center gap-2 text-red-700">
            <GiEagleEmblem size={25} />
          </div>
          <div className="flex items-center justify-center mb-2">
            <span className="text-white text-2xl font-light"> Discover Albania</span>
          </div>
          </div>
          {/* <div className="max-w-7xl mx-auto">


          <div className="space-y-6">
            <h1 className="text-white text-xl  font-light">
              Acknowledgement of Country
            </h1>

            <div className="flex items-start gap-8">
              <div className="flex items-center gap-2 text-red-700">
                <GiEagleEmblem size={25} />
              </div>

              <div className="flex-1 space-y-6">
                <p className="text-white text-14 leading-relaxed font-light">
                  We acknowledge the ancient Illyrian roots of the Albanian land and honour the generations who have cared for its mountains, rivers, and coasts throughout history. We recognise the enduring spirit, traditions, and culture that continue to shape Albania today.  </p>
              </div>
            </div>
          </div>
          
        </div>
        <hr className="border-gray-400 my-6" /> */}

          <footer className="text-white py-3 px-4">
            <div className="max-w-7xl mx-auto grid xs:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className='pr-5'>
                <h3 className="text-14 font-light mb-3">Change Language</h3>
                <div className="relative">
                  <button className="w-full flex items-center justify-between border border-white/20 px-4 py-3 hover:bg-white/10 transition-colors">
                    <span className="font-light text-12">International (English)</span>
                    <FaChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-14 font-light mb-2">Find us on</h3>
                <div className="space-y-1">
                  <a href="#" className="flex items-center text-12 gap-3 hover:opacity-80 transition-opacity">
                    <FaFacebook className="w-4 h-4" />
                    <span className="font-light">Facebook</span>
                  </a>
                  <a href="#" className="flex items-center text-12 gap-3 hover:opacity-80 transition-opacity">
                    <FaYoutube className="w-4 h-4" />
                    <span className="font-light">YouTube</span>
                  </a>
                  <a href="#" className="flex items-center text-12 gap-3 hover:opacity-80 transition-opacity mt-6">
                    <FaInstagram className="w-4 h-4" />
                    <span className="font-light">Instagram</span>
                  </a>

                </div>
              </div>

              <div>
                <h3 className="text-14 font-light mb-2">About this site</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="font-light text-12 hover:opacity-80 transition-opacity">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-light text-12 hover:opacity-80 transition-opacity">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-light text-12 hover:opacity-80 transition-opacity">
                      Accessibility Statement
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-14 font-light mb-2">Other sites</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="font-light text-12 hover:opacity-80 transition-opacity">
                      Media & Industry
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-light text-12 hover:opacity-80 transition-opacity">
                      Business Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-light text-12 hover:opacity-80 transition-opacity">
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