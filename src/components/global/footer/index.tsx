import Link from "next/link";
import Head from "next/head";

export default function Footer() {
  const sections = [
    {
      title: "KIMOTIFY",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Privacy & Security", href: "#" },
      ],
    },
    {
      title: "Product",
      links: [
        { label: "Messenger", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "Kimotify AI", href: "#" },
        { label: "SMS Marketing", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "For eCommerce", href: "#" },
        { label: "Changelog", href: "#" },
        { label: "Pricing", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Status Page", href: "#" },
        { label: "Help Center", href: "/Help" },
        { label: "Community", href: "#" },
        { label: "Video Course", href: "#" },
        { label: "How To", href: "#" },
        { label: "Blog", href: "/Blog" },
        { label: "Privacy Settings", href: "#" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Kimotify - Transform Your Conversations Into Sales</title>
        <meta
          name="description"
          content="Kimotify helps businesses transform conversations into sales, leads, and conversions through powerful messaging tools and automation."
        />
        <meta
          name="keywords"
          content="messaging, sales, automation, marketing, ecommerce, chatbot"
        />
      </Head>

      <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Call to Action */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-5xl font-extrabold text-white mb-8 leading-tight">
              Start with Kimotify Today
            </h2>
            <p className="text-gray-400 mb-10 text-lg max-w-3xl mx-auto">
              Unlock the power of automation and messaging to drive sales, leads, and engagement effortlessly.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-400 text-black py-4 px-12 rounded-full font-bold hover:opacity-90 transform transition-transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50">
              Get Started For Free
            </button>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 mt-12 sm:mt-16">
            {sections.map((section, index) => (
              <div key={index} className="backdrop-blur-sm">
                <h3 className="text-white text-xl font-bold mb-6 tracking-widest uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="hover:text-yellow-500 text-gray-400 transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 pt-10 border-t border-gray-800 text-center text-sm text-gray-500">
            <p className="flex items-center justify-center gap-4 flex-wrap">
              ©2024, KIMOTIFY, INC.
              <Link
                href="#"
                className="hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                href="#"
                className="hover:text-yellow-400 transition-colors"
              >
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
