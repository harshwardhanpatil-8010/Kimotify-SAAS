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
      title: "Agencies",
      links: [
        { label: "Hire an Agency", href: "#" },
        { label: "Join the Affiliate Program", href: "#" },
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
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Video Course", href: "#" },
        { label: "How To", href: "#" },
        { label: "Blog", href: "#" },
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
          content="Kimotify helps businesses transform conversations into sales, leads and conversions through powerful messaging tools and automation."
        />
        <meta
          name="keywords"
          content="messaging, sales, automation, marketing, ecommerce, chatbot"
        />
      </Head>

      <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-white mb-8">
              Start with Kimotify Today
            </h2>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
              Unlock the power of automation and messaging to drive sales, leads,
              and engagement effortlessly.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-400 text-black py-4 px-10 rounded-full font-bold hover:opacity-90 transform transition hover:scale-105 shadow-xl">
              Get Started For Free
            </button>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 mt-20">
            {sections.map((section, index) => (
              <div key={index} className="backdrop-blur-sm">
                <h3 className="text-white text-lg font-semibold mb-6 tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="hover:text-yellow-400 transition-colors duration-200"
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
          <div className="mt-20 pt-10 border-t border-gray-800 text-center text-sm text-gray-500">
            <p className="flex items-center justify-center gap-4 flex-wrap">
              ©2024, KIMOTIFY, INC.
              <Link
                href="#"
                className="hover:text-yellow-400 transition-colors"
              >
                PRIVACY POLICY
              </Link>
              <span>|</span>
              <Link
                href="#"
                className="hover:text-yellow-400 transition-colors"
              >
                TERMS OF SERVICE
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
