"use client";

import Link from "next/link";
import Head from "next/head";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Social Media Automation?",
      answer: "Social Media Automation allows you to schedule, post, and analyze social media content automatically. It saves time and ensures consistency across platforms.",
    },
    {
      question: "How do I connect my social media accounts?", 
      answer: "Go to the 'Settings' page and click on 'Connect Account'. Follow the instructions to authorize our platform to access your accounts securely.",
    },
    {
      question: "Is my data safe on this platform?",
      answer: "Yes, we prioritize data security. Our platform uses encryption and adheres to industry standards to keep your information secure.",
    },
    {
      question: "Can I schedule posts for multiple platforms simultaneously?",
      answer: "Yes, our platform allows you to create a single post and publish it across multiple social media platforms with just one click.",
    },
    {
      question: "What is the maximum number of accounts I can connect?",
      answer: "You can connect up to 10 accounts on the basic plan. Higher plans allow more accounts. Check our pricing page for details.",
    },
    {
      question: "How do I contact support?",
      answer: "If you have issues or questions, visit the 'Contact Support' section of our Help Center or email us at support@example.com.",
    },
  ];

  return (
    <>
      <Head>
        <title>FAQs - Help Center</title>
        <meta name="description" content="Find answers to common questions about our social media automation platform." />
        <meta name="keywords" content="FAQs, social media automation, help center, support" />
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

          <h1 className="text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mb-8 animate-gradient">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 mb-16 leading-relaxed text-center max-w-3xl mx-auto">
            {"Have questions? We've got answers. Browse through the frequently asked questions below to learn more about our platform."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:transform hover:scale-105 transition-all duration-300 border border-white/10"
              >
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-4">
                  {faq.question}
                </h2>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-24 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <p className="text-gray-300 text-lg font-medium">
              © {new Date().getFullYear()} Social Media Automation Platform. All rights reserved.
            </p>
            <p className="mt-2 text-purple-300 hover:text-pink-300 transition-colors duration-300">
              <a href="mailto:support@example.com">support@example.com</a>
            </p>
          </div>
        </footer>
      </main>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </>
  );
}
