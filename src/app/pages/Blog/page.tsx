'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FaFacebook, FaTwitter, FaLinkedin, FaReddit } from 'react-icons/fa';

// Simulating Blog Data (Normally you would fetch this from an API or CMS)
const blogPosts = [
  {
    title: 'How Instagram DM Marketing Can Drive Sales for Your Business',
    date: '2024-12-30',
    excerpt: 'Discover how Instagram DM marketing can help businesses generate quality leads and boost sales with automation tools and personalized messaging.',
    slug: 'how-instagram-dm-marketing-can-drive-sales',
    author: 'Jane Doe',
    tags: ['Instagram', 'DM Marketing', 'Sales', 'Automation'],
  },
  {
    title: 'The Power of SMS Marketing for Customer Retention',
    date: '2024-12-28',
    excerpt: 'SMS marketing is one of the most effective channels for customer retention. Learn how businesses can leverage SMS marketing to engage their audience.',
    slug: 'the-power-of-sms-marketing-for-customer-retention',
    author: 'John Smith',
    tags: ['SMS Marketing', 'Customer Retention', 'Automation'],
  },
  // Add more blog posts here
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    // Filter blog posts based on the search term
    setFilteredPosts(
      blogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <>
      <Head>
        <title>Kimotify Blog - Marketing Automation Tips and Insights</title>
        <meta
          name="description"
          content="Learn about marketing automation, Instagram DM marketing, SMS marketing, and more to grow your business. Read our latest blog posts."
        />
        <meta name="keywords" content="marketing automation, Instagram DM marketing, SMS marketing, business growth, sales, customer engagement" />
        <meta property="og:title" content="Kimotify Blog - Marketing Automation Insights" />
        <meta property="og:description" content="Read our latest blog posts about marketing automation, Instagram DM marketing, SMS marketing, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/blog-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kimotify Blog - Marketing Automation Insights" />
        <meta name="twitter:description" content="Discover the latest marketing automation tips and strategies on our blog." />
      </Head>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 text-gray-300">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 tracking-tight leading-tight">
              Kimotify Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Insights, tips, and strategies to help you grow your business through marketing automation.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12 text-center">
            <input
              type="text"
              placeholder="Search blog posts..."
              className="px-4 py-2 rounded-full text-lg w-full max-w-xl border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post) => (
              <div key={post.slug} className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl transition-all duration-300 hover:bg-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-400 text-sm mb-4">{post.date} | By {post.author}</p>
                <p className="text-gray-300 text-lg mb-4">{post.excerpt}</p>

                <div className="flex items-center space-x-4 mt-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-500 mt-4 inline-block">
                  Read More
                </Link>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20 pt-10 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>©2024, KIMOTIFY, INC. | All Rights Reserved</p>
            <div className="flex justify-center gap-6 mt-4">
              <Link href="#" className="text-blue-400 hover:text-blue-500">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="#" className="text-blue-400 hover:text-blue-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
