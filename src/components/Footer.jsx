import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
   <footer className='text-white bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md'>
      <hr className='my-8 border-gray-800' />
      <div className='container mx-auto py-8 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div>
                  <h2 className='text-2xl font-bold mb-4 text-green-500'>Matrix App</h2>
                  <p className='text-gray-400'>This is some information about the Matrix App...!</p>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-4 text-green-400'>Useful Links</h3>
                <ul className='text-gray-400 flex flex-col'>

                  <Link
                  to="home"
                  className="hover:text-green-500 cursor-pointer mb-2"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  >
                    Home
                  </Link>
                  <Link
                  to="features"
                  className="hover:text-green-500 cursor-pointer mb-2"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  >
                    Features
                  </Link>
                  <Link
                  to="testimonials"
                  className="hover:text-green-500 cursor-pointer mb-2"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  >
                    Testimonials
                  </Link>
                  <Link
                  to="pricing"
                  className="hover:text-green-500 cursor-pointer mb-2"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  >
                    Pricing
                  </Link>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-4 text-green-500'>Contact Us</h3>
                <p className='text-gray-400 mb-4'>Address: 1234 Main Street, City, Country</p>
                <p className='text-gray-400 mb-4'>Email: info@gmail.com</p>
                <p className='text-gray-400 mb-4'>Phone: +12345678  </p>
                
              </div>
          </div>
          <hr className='my-8 border-gray-800' />
          <p className='text-center text-gray-400'>

            &copy; {new Date().getFullYear()} Matrix App. All rights reserved.
          </p>
      </div>
   </footer>
  )
}

export default Footer