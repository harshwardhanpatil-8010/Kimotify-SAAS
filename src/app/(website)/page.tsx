
import { Button } from '@/components/ui/button'
import instagramlogo from '@/app/assets/instagram.png'
import facebooklogo from '@/app/assets/facebook.png'
import gmaillogo from '@/app/assets/gmail.png'
import linkedinlogo from '@/app/assets/linkedin.png'
import whatsapplogo from '@/app/assets/whatsapp.png'
import youtubelogo from '@/app/assets/youtube.png'
import twitterlogo from '@/app/assets/twitter.png'
import telegramlogo from '@/app/assets/telegram.png'
import salesforcelogo from '@/app/assets/salesforce.png'
import slacklogo from '@/app/assets/slack.png'
import {
  Card,
  CardContent, 
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
  ]

  return (
    <main>
      <section className="relative min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container px-4 md:px-6 py-8">
          <nav className="flex items-center justify-between backdrop-blur-sm bg-slate-900/30 p-4 rounded-2xl mb-8">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3 text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 uppercase select-none">
                <span>KIMOTIFY</span>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg">
              <Link href="/dashboard" className="px-6 py-2 flex items-center gap-2">
                Login <ArrowRight size={16} />
              </Link>
            </Button>
          </nav>

          <div className="mx-auto mt-24 max-w-4xl text-center">
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-4 animate-fade-in">
              Supercharge Your Social Media Engagement with
            </h1>
            <h1 className="text-5xl font-bold leading-tight tracking-tighter bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent sm:text-6xl md:text-7xl lg:text-8xl mb-8 animate-pulse">
              KIMOTIFY
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Elevate your audience engagement effortlessly by automating responses with KIMOTIFY, turning every interaction into a potential business lead.
            </p>

            <div className="mt-12 flex justify-center gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 px-10 py-6 text-lg rounded-xl shadow-lg"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-400 hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105 px-10 py-6 text-lg rounded-xl"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-12 mt-24 px-4 md:px-0">
            {[instagramlogo, salesforcelogo, facebooklogo, linkedinlogo, gmaillogo, whatsapplogo, youtubelogo, twitterlogo,slacklogo, telegramlogo].map((logo, index) => (
              <Image 
                key={index}
                src={logo} 
                alt="Platform Logo" 
                className="w-20 h-20 object-contain opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110 filter hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                priority
              />
            ))}
          </div>

          <div className="mt-36 mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
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
                    plan.popular ? 'border-purple-500' : 'border-slate-800'
                  } bg-slate-950/50 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 w-full rounded-2xl transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]`}
                >
                  <CardHeader>
                    {plan.popular && (
                      <div className="text-purple-500 text-sm font-semibold mb-2">MOST POPULAR</div>
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
                          <CheckCircle className="mr-3 h-6 w-6 text-purple-500" />
                          <span className="text-blue-200/90 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-8">
                    <Button className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                        : 'bg-[#45454d]'
                    } hover:opacity-80 hover:text-black transition-all duration-300 py-6 text-lg rounded-xl text-white`}>
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className='mt-24 rounded-3xl border-2 border-slate-800 bg-slate-950/50 backdrop-blur-sm p-12'>
              <div className='text-center'>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">Contact Us</h2>
                <p className="text-blue-200/80 text-lg">Get in touch with our team for any questions or support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
