'use client';

import { useState } from 'react';
import Head from 'next/head';

const faqData = [
  {
    uniqueKey: 'faq1',
    question: 'What is Instagram DM Marketing?',
    answer: 'Instagram DM Marketing allows brands to attract quality leads, drive more sales, and reply to conversations 24/7 on Instagram. You can answer FAQs, convert more followers, and automate your IG funnel, day and night.',
  },
  {
    uniqueKey: 'faq2',
    question: 'Is Instagram DM Marketing legal? Will using this get my account blocked or suspended?', 
    answer: 'Yes, it is legal if done according to Instagram guidelines. Avoid spamming users and use authentic communication practices to ensure your account’s safety.',
  },
  {
    uniqueKey: 'faq3',
    question: 'Can I send a private message to my new Instagram followers?',
    answer: 'Yes, you can automatically send private messages to new followers using our platform to build relationships and provide a personalized experience.',
  },
  {
    uniqueKey: 'faq4', 
    question: 'Can I send a bulk message or broadcast to all of my followers?',
    answer: 'Yes, you can send bulk messages to your followers while adhering to Instagram’s messaging limits to prevent account restrictions.',
  },
  {
    uniqueKey: 'faq5',
    question: 'Will Instagram DM Marketing make conversations sound robotic and not like my brand?',
    answer: 'Our system ensures that messages are personalized and align with your brand voice to maintain authenticity in communication.',
  },
];

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);

  const toggleFAQ = (uniqueKey: string) => {
    setActiveFAQ(activeFAQ === uniqueKey ? null : uniqueKey);
  };

  return (
    <>
      <Head>
        <title>Instagram DM Marketing FAQ | Expert Answers</title>
        <meta name="description" content="Get expert answers about Instagram DM Marketing. Learn about automation, bulk messaging, legal compliance, and how to effectively engage with followers." />
        <meta name="keywords" content="Instagram DM Marketing, Instagram automation, social media marketing, Instagram messaging, DM automation, Instagram business, social media automation" />
      </Head>

      <section className="bg-gradient-to-br from-gray-900 via-black to-blue-900 py-20 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about Instagram DM Marketing and automation.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq) => (
              <article 
                key={faq.uniqueKey}
                className="bg-white/5 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full flex justify-between items-center p-6 sm:p-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl hover:bg-white/10 transition-colors duration-300"
                  onClick={() => toggleFAQ(faq.uniqueKey)}
                  aria-expanded={activeFAQ === faq.uniqueKey}
                >
                  <h2 
                    className="text-xl sm:text-2xl font-bold text-white text-left"
                    itemProp="name"
                  >
                    {faq.question}
                  </h2>
                  <span className={`ml-4 flex-shrink-0 transform transition-transform duration-300 ${activeFAQ === faq.uniqueKey ? 'rotate-180' : ''}`}>
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {activeFAQ === faq.uniqueKey && (
                  <div 
                    className="p-6 sm:p-8 pt-0 text-gray-300 text-lg sm:text-xl leading-relaxed"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div 
                      itemProp="text"
                      className="prose prose-lg prose-invert max-w-none"
                    >
                      {faq.answer}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
