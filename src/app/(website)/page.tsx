import { Button } from '@/components/ui/button';
import instagramlogo from '@/app/assets/instagram.png';
//import facebooklogo from '@/app/assets/facebook.png';
import gmaillogo from '@/app/assets/gmail.png';
import linkedinlogo from '@/app/assets/linkedin.png';
import whatsapplogo from '@/app/assets/whatsapp.png';
import youtubelogo from '@/app/assets/youtube.png';
import twitterlogo from '@/app/assets/twitter.png';
import telegramlogo from '@/app/assets/telegram.png';
import salesforcelogo from '@/app/assets/salesforce.png';
import slacklogo from '@/app/assets/slack.png';
import {
  Card,
  CardContent,
  CardDescription, 
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/global/footer';
import FAQSection from '@/components/global/faq-section';
import Head from 'next/head';

export default function Home() {
  const plans = [
    {
      name: 'Free Plan',
      description: 'Perfect for getting started',
      price: '$0',
      features: [
        'Drive engagement with personalized responses',
        'Use automated replies to foster better audience engagement',
        'Convert followers into loyal customers through strategic messaging',
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Premium',
      description: 'Advanced features for power users', 
      price: '$99',
      features: [
        'All features from Free Plan',
        'AI-powered response generation',
        'Advanced analytics and insights',
        'Priority customer support',
        'Custom branding options',
      ],
      cta: 'Upgrade Now',
      popular: true
    },
  ];

  return (
    <>
      <Head>
        <title>KIMOTIFY - Automate Your Social Media Engagement</title>
        <meta name="description" content="Supercharge your social media engagement with KIMOTIFY. Automate DMs, comments, and build stronger audience connections effortlessly." />
        <meta name="keywords" content="social media automation, AI responses, audience engagement, marketing automation, Instagram marketing" />
        <meta property="og:title" content="KIMOTIFY - Automate Your Social Media Engagement" />
        <meta property="og:description" content="Elevate your social media strategy with KIMOTIFY's automation tools. Engage with your audience like never before." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://kimotify-saas.vercel.app" />
        <link rel="robots" href="/robots.txt" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "KIMOTIFY - Automate Your Social Media Engagement",
            "description": "Supercharge your social media engagement with KIMOTIFY. Automate DMs, comments, and build stronger audience connections effortlessly.",
            "url": "https://kimotify-saas.vercel.app",
          })}
        </script>
      </Head>

      <main className="antialiased">
        <section className="relative min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div className="container px-4 md:px-6 py-8 mx-auto max-w-7xl">
            <nav className="flex items-center justify-between backdrop-blur-sm bg-slate-900/30 p-4 rounded-2xl mb-8 sticky top-4 z-50">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-3 text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 uppercase select-none animate-gradient">
                  <span>KIMOTIFY</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg">
                <Link href="/dashboard" className="px-6 py-2 flex items-center gap-2">
                  Login <ArrowRight size={16} className="animate-bounce-right" />
                </Link>
              </Button>
            </nav>

            <div className="mx-auto mt-32 max-w-4xl text-center">
              <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-4 animate-fade-in tracking-tight">
                Automate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Social Media</span> Engagement
              </h1>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-90">
                Transform how you engage with your audience using KIMOTIFY. Automate your responses and focus on growing your brand.
              </p>

              <div className="mt-12 flex justify-center gap-6">
                <Link href="/dashboard" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 px-10 py-3 text-lg rounded-xl shadow-lg">
                  Get Started Free
                </Link>

                <Link href="/Help" className="border-2 border-blue-400 hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105 px-10 py-3 text-lg rounded-xl backdrop-blur-sm">
                  Know more
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-12 mt-32 px-4 md:px-0 animate-fade-in">
              {[instagramlogo, salesforcelogo, linkedinlogo, gmaillogo, whatsapplogo, youtubelogo, twitterlogo, slacklogo, telegramlogo].map((logo, index) => (
                <Image 
                  key={index}
                  src={logo} 
                  alt={`Platform Logo ${index}`} 
                  className="w-20 h-20 object-contain opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110 filter hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  loading="lazy"
                />
              ))}
            </div>
           <div className="mt-36 mb-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
                  Choose Your Plan
                </h2>
                <p className="text-xl text-blue-200/80">
                  Select the perfect plan to boost your Social Media engagement
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {plans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`flex flex-col justify-between border-2 ${
                      plan.popular ? 'border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]' : 'border-slate-800'
                    } bg-slate-950/50 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 w-full rounded-2xl transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]`}
                  >
                    <CardHeader>
                      {plan.popular && (
                        <div className="flex items-center text-purple-500 text-sm font-semibold mb-2 animate-pulse leading-none">
                          <Sparkles className="h-5 w-5 leading-none mr-2" />
                          MOST POPULAR
                        </div>
                      )}
                      <CardTitle className="text-3xl text-white mb-2">{plan.name}</CardTitle>
                      <CardDescription className="text-blue-200/70 text-lg">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow grid gap-8">
                      <div className="text-5xl font-bold flex items-center gap-2 text-white">
                        <span>{plan.price}</span>
                        <span className="text-xl font-normal text-blue-200/70">/month</span>
                      </div>
                      <ul className="space-y-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="mr-3 h-6 w-6 text-purple-500 animate-bounce-slow flex-none" />
                            <span className="text-blue-200/90 text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="mt-8">
                      <Button className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
                          : 'bg-[#45454d]'
                      } hover:opacity-80 transition-all duration-300 py-6 text-lg rounded-xl text-white hover:text-black shadow-lg`}>
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className='mt-32 rounded-3xl border-2 border-slate-800 bg-slate-950/50 backdrop-blur-sm p-12 hover:border-purple-500 transition-all duration-300 transform hover:scale-105'>
               <div className='text-center'>
                 <h2 className="text-3xl font-bold text-white mb-4">Need Assistance or Have Specific Requirements?</h2>
                   <p className="text-blue-200/80 text-lg mb-8">Get in touch with our sales team for tailored solutions and premium support.</p>
                 <div className="flex justify-center gap-6">
                <Button
                  size="lg"
                   className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg rounded-xl shadow-lg"
                 >
                  Contact Sales
                </Button>
             
            <Link href="/sign-up" className="border-2 border-blue-400 hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105 px-8 py-1 text-lg rounded-xl text-blue-400 backdrop-blur-sm">
            Start Free
                </Link>
            </div>
          </div>
          </div>

            </div>
          </div>
        </section>
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}