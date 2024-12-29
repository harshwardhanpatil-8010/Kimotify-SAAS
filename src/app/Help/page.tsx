"use client";

import Link from "next/link";
import Head from "next/head";

export default function Help() {
  return (
    <>
      <Head>
        <title>Help Center - Social Media Automation Platform</title>
        <meta name="description" content="Get help with social media automation. Access FAQs, guides, tutorials, and support resources to master our automation platform." />
        <meta name="keywords" content="social media automation, help center, FAQs, support, guides, tutorials" />
        <meta property="og:title" content="Help Center - Social Media Automation Platform" />
        <meta property="og:description" content="Get help with social media automation. Access FAQs, guides, tutorials, and support resources." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-[#0d0d4d] via-[#03001c] to-[#260058] flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mb-8">
            Need Help with Social Media Automation?
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
            {"Welcome to the Help Center! Whether you're new to our platform or need assistance navigating features, we're here to guide you. Explore our FAQs, contact support, or check out the resources below."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <Link
              href="/Help/faq"
              className="group p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:bg-white/20 hover:transform hover:scale-105 transition-all duration-300 border border-white/20 flex flex-col items-center"
              aria-label="View Frequently Asked Questions"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">FAQs</h2>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                Common questions and detailed answers.
              </p>
            </Link>

            <Link
              href="/Help/guides"
              className="group p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:bg-white/20 hover:transform hover:scale-105 transition-all duration-300 border border-white/20 flex flex-col items-center"
              aria-label="View Guides"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-400 to-green-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Guides</h2>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                Step-by-step tutorials to master automation.
              </p>
            </Link>

            <Link
              href="/Help/contact-support"
              className="group p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:bg-white/20 hover:transform hover:scale-105 transition-all duration-300 border border-white/20 flex flex-col items-center"
              aria-label="Contact Support"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Contact Support</h2>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                Get in touch with our team for personalized help.
              </p>
            </Link>
 
            <Link
              href="/Help/Resources"
              className="group p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:bg-white/20 hover:transform hover:scale-105 transition-all duration-300 border border-white/20 flex flex-col items-center"
              aria-label="Access Resources"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-400 to-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Resources</h2>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                Tools and materials to boost productivity.
              </p>
            </Link>
          </div>
        </div>

        <footer className="mt-20 text-gray-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} Social Media Automation Platform. All rights reserved.</p>
          <p className="mt-2">Questions? Email us at support@example.com</p>
        </footer>
      </main>
    </>
  );
}
