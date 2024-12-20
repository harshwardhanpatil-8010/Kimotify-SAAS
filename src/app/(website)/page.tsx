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
//import logo from '@/app/assets/logo.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CheckCircle, MenuIcon } from 'lucide-react'
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
    },
    {
      name: 'Smart AI Plan', 
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
    },
  ]

  return (
    <main>
      <section className="relative min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-3xl font-bold tracking-tighter text-[#E93B84] uppercase select-none">
                {/* <Image 
                  src={logo} 
                  alt="Kimotify Logo" 
                  className="w-16 h-16 object-contain"
                  priority
                /> */}
                <span>KIMOTIFY</span>
              </div>
            </div>
            <Button className="bg-gradient-to-br from-[#1c3dbf] to-[#941489] text-white hover:opacity-90 transition-opacity rounded-lg">
              <Link href="/dashboard" className="px-4 py-2">Login</Link>
            </Button>
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-2">
              Transform Your Social Media Engagement with
            </h1>
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-[#E93B84] sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              KIMOTIFY
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Elevate your audience engagement effortlessly by automating responses with KIMOTIFY, turning every interaction into a potential business lead.
            </p>

            <div className="mt-10 flex justify-center gap-6">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 transition-colors px-8"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 hover:bg-blue-900/50 transition-colors px-8"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-8 mt-20 px-4 md:px-0 select-none pointer-events-none">
            {[instagramlogo, salesforcelogo, facebooklogo, linkedinlogo, gmaillogo, whatsapplogo, youtubelogo, twitterlogo, telegramlogo].map((logo, index) => (
              <Image 
                key={index}
                src={logo} 
                alt="Platform Logo" 
                className="w-16 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                priority
              />
            ))}
          </div>

          <div className="mt-32 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg text-blue-200/80">
                Select the perfect plan to boost your Social Media engagement
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 rounded-full  max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className="flex flex-col justify-between border-slate-800 bg-slate-950/50 backdrop-blur-sm hover:border-slate-700 transition-colors w-full"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    <CardDescription className="text-blue-200/70">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow grid gap-6">
                    <div className="text-4xl font-bold flex items-center gap-2 text-white">
                      <span>{plan.price}</span>
                      <span className="text-lg font-normal text-blue-200/70">/month</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-[#E93B84]" />
                          <span className="text-blue-200/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-6">
                    <Button className="w-full bg-gradient-to-br from-[#1c3dbf] to-[#941489] hover:opacity-90 transition-opacity rounded-full">
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card> 
              ))}
            </div>
            <div className='flex-col border-0 h-56 w-full mt-16 border-slate-800 bg-slate-950/50 left-0 right-0 absolute justify-normal'>
              <div className='flex justify-center items-center h-full '>
                <div className='text-center'>
                  <h2>Contact us</h2>
               </div>
              </div>
                 
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}