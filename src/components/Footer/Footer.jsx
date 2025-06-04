import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">

                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p>&copy; {new Date().getFullYear()} Eumax India Private Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
