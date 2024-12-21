
import React from 'react'
import PaymentButton from '../payment-button'
import Head from 'next/head'

type Props = {}

const UpgradeCard = (props: Props) => {
  return (
    <>
      <Head>
        <title>Upgrade to SmartAI - Unlock Premium AI Features</title>
        <meta name="description" content="Upgrade to SmartAI premium plan to unlock all features including advanced AI capabilities, analytics and more. Get started today!" />
        <meta name="keywords" content="SmartAI upgrade, AI features, premium plan, machine learning, AI tools" />
      </Head>

      <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] p-6 rounded-3xl 
        shadow-2xl hover:shadow-[#CC3BD4]/20 transition-all duration-300 ease-in-out
        flex flex-col gap-y-4 justify-center items-center
        border border-gray-800/30 hover:border-[#CC3BD4]/30 max-w-sm w-full">
        
        <div className="flex flex-col items-center gap-y-2">
          <span className="text-xl font-medium">
            Upgrade to{' '}
            <span className="bg-gradient-to-r from-[#CC3BD4] to-[#D064AC] 
              font-bold bg-clip-text text-transparent animate-pulse">
              SMARTAI
            </span>
          </span>
          <p className="text-[#9B9CA0] font-light text-base text-center leading-relaxed">
            Unlock premium features including<br />
            <span className="text-white/90">Advanced AI capabilities</span> and more
          </p>
        </div>

        <div className="w-full mt-2 cursor-pointer justify-center">
          <PaymentButton />
        </div>

        <div className="text-xs text-[#9B9CA0]/70 text-center mt-2">
          ✨ Cancel anytime • Instant access
        </div>
      </div>
    </>
  )
}

export default UpgradeCard
