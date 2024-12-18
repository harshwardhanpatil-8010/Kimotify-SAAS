import { Button } from '@/components/ui/button'
import instagramlogo from '@/app/assets/instagram.png'
import facebooklogo from '@/app/assets/facebook.png'
import gmaillogo from '@/app/assets/gmail.png'
import linkedinlogo from '@/app/assets/linkedin.png'
import whatsapplogo from '@/app/assets/whatsapp.png'
import youtubelogo from '@/app/assets/youtube.png'
import twitterlogo from '@/app/assets/twitter.png'
import telegramlogo from '@/app/assets/telegram.png'
import logo from '@/app/assets/logo.png'

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
        'Boost engagement with target responses',
        'Automate comment replies to enhance audience interaction',
        'Turn followers into customers with targeted messaging',
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
      <section className="relative top-0 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        
        <div className="relative">
          <div className="container px-4 py-8 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                
              <div className="flex items-center gap-0 text-3xl font-bold tracking-tighter text-[#E93B84] uppercase select-none leading-none">
              <Image 
              src={logo} 
              alt="Kimotify Logo" 
              className="w-20 h-20 max-w-xs md:max-w-sm pointer-events-none"
              />
              <span>KIMOTIFY</span>
              </div>
              </div>
              {/* <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
                <Link href="#features">Features</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#about">About</Link>
              </nav> */}
              <Button className="bg-gradient-to-br hover:opacity-80 text-white rounded-lg from-[#1c3dbf] font-medium to-[#941489] ">
                <Link href="/dashboard">Login</Link>
              </Button>
            </div>

            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Social Media Engagement with
              </h1>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-[#E93B84] sm:text-5xl md:text-6xl lg:text-7xl">
                KIMOTIFY
              </h1>
              <p className="mt-6 text-lg text-blue-200">
              Elevate your audience engagement effortlessly by automating responses with KIMOTIFY, turning every interaction into a potential business lead.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400  hover:bg-blue-900/50"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-4 px-8 md:px-4 mt-20 select-none">
            <Image src={instagramlogo} alt="Instagram Logo" className="w-20 h-20 max-w-xs md:max-w-sm pointer-events-none" />
            <Image src={facebooklogo} alt="Facebook Logo" className="w-20 h-20 max-w-xs md:max-w-sm pointer-events-none" />
            <Image src={linkedinlogo} alt="LinkedIn Logo" className="w-20 h-20 max-w-xs md:max-w-sm pointer-events-none" />
            <Image src={gmaillogo} alt="Gmail Logo" className="w-20 h-20 pointer-events-none max-w-xs md:max-w-sm" />
            <Image src={whatsapplogo} alt="Whatsapp Logo" className="w-20 h-20 pointer-events-none max-w-xs md:max-w-sm" />
            <Image src={youtubelogo} alt="Youtube Logo" className="w-20 h-20 pointer-events-none max-w-xs md:max-w-sm" />
            <Image src={twitterlogo} alt="Twitter Logo" className="w-20 h-20 pointer-events-none max-w-xs md:max-w-sm" />
            <Image src={telegramlogo} alt="Telegram Logo" className="w-20 h-20 pointer-events-none max-w-xs md:max-w-sm" />
            </div>

          </div>
        </div>
        <div className="container px-4 md:px-6 mb-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Choose Your Plan
            </h2>
            <p className="max-w-[900px] text-muted-foreground">
              Select the perfect plan to boost your Social Media engagement
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8 ">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between border-slate-100"
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center"
                      >
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full hover:click">{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}