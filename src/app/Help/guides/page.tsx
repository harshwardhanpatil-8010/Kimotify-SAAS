"use client";

import Link from "next/link";
import Head from "next/head";

export default function Guide() {
  const guides = [
    {
      title: "How to Connect Your Social Media Accounts",
      description: "Learn how to easily connect and manage your social media accounts on our platform.",
      icon: "🔗"
    },
    {
      title: "Scheduling Posts for Multiple Platforms", 
      description: "Step-by-step guide on how to schedule posts across all your connected social media accounts.",
      icon: "📅"
    },
    {
      title: "Using Automation for Content Curation",
      description: "Discover how to automate content curation and improve your social media strategy.",
      icon: "🤖"
    },
    {
      title: "Analyzing Social Media Performance",
      description: "Learn how to use the analytics tools on our platform to track performance and optimize your posts.",
      icon: "📊"
    },
  ];

  return (
    <>
      <Head>
        <title>Guides - Help Center</title>
        <meta name="description" content="Step-by-step guides to help you master social media automation." />
        <meta name="keywords" content="social media automation, guides, help center, tutorials" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-[#0d0d4d] via-[#03001c] to-[#260058] flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-5xl mx-auto">
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
            Step-by-Step Guides
          </h1>
          <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto text-center">
            Get started with our platform by following these detailed guides. Each guide is designed to help you navigate the features and automate your social media management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {guides.map((guide, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:transform hover:scale-105 transition-all duration-300 border border-white/10"
              >
                <span className="text-4xl mb-4 block">{guide.icon}</span>
                <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  {guide.title}
                </h2>
                <p className="text-gray-300 text-lg mb-6">{guide.description}</p>
                <Link href={`/Help/guide/${guide.title.replace(/\s+/g, '-').toLowerCase()}`}>
                  <button className="w-full text-white bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-xl font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                    Read Guide
                  </button>
                </Link>
              </div>
            ))}
          </div>
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
