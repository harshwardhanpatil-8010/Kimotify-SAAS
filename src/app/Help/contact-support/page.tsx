"use client";
import Link from "next/link";
import Head from "next/head";

export default function ContactSupport() {
  return (
    <>
      <Head>
        <title>Contact Support - Help Center</title>
        <meta name="description" content="Reach out to our support team for assistance with your social media automation platform." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-[#0d0d4d] via-[#03001c] to-[#260058] flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="fixed top-8 left-8 z-10">
            <Link href="/Help">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 group">
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </Link>
          </div>

          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mb-8 animate-gradient text-center">
            Contact Our Support Team
          </h1>
          <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto text-center">
            Need help? Fill out the form below, and our support team will get back to you as soon as possible.
          </p>

          <form className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10 space-y-6">
            <div>
              <label htmlFor="name" className="text-white font-medium text-lg block mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-xl bg-transparent border-2 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-white font-medium text-lg block mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-xl bg-transparent border-2 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="text-white font-medium text-lg block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 rounded-xl bg-transparent border-2 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-xl font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
            >
              Submit
            </button>
          </form>
        </div>

        <footer className="mt-20 text-gray-400 text-center">
          <p className="text-lg font-medium">© {new Date().getFullYear()} Social Media Automation Platform</p>
          <p className="mt-3 text-md">
            Questions? Email us at{" "}
            <a href="mailto:support@example.com" className="text-purple-400 hover:text-purple-300 transition-colors">
              support@example.com
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
