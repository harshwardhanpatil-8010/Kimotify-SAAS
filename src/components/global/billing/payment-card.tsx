import { Button } from '@/components/ui/button'
import { PLANS } from '@/constants/pages'
import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import React from 'react'

type Props = {
  label: string
  current: 'PRO' | 'FREE'
  landing?: boolean
}

const PaymentCard = ({ current, label, landing }: Props) => {
  return (
    <div
      className={cn(
        label !== current
          ? 'bg-in-active'
          : 'bg-gradient-to-r  from-[#1c3dbf] to-[#941489]',
        'p-[2px] rounded-xl overflow-hidden'
      )}
    >
      <div
        className={cn(
          landing && 'radial--gradient--pink',
          'flex flex-col rounded-xl pl-5 py-5 pr-10 bg-[#2a2a3fcc] h-full'
        )}
      >
        {landing ? (
          <h2 className="text-2xl">
            {label === 'PRO' && 'SMARTAI Plan'}
            {label === 'FREE' && 'Standard'}
          </h2>
        ) : (
          <h2 className="text-2xl">
            {label === current
              ? 'Your Current Plan'
              : current === 'PRO'
              ? 'Downgrade'
              : 'Upgrade'}
          </h2>
        )}
        <p className="text-text-secondary text-sm mb-2 ">
          This is what your plan covers for automations and Ai features
        </p>
        {label === 'PRO' ? (
          <span className="bg-gradient-to-r text-3xl from-[#1d307b] to-[#9a218f] font-bold  bg-clip-text text-transparent">
                SMARTAI
          </span>
        ) : (
          <p className="font-bold mt-2 text-text-secondary ">Standard</p>
        )}
        {label === 'PRO' ? (
          <p className="mb-2">
            <b className="text-xl">$99</b>/month
          </p>
        ) : (
          <p className="text-xl mb-2">Free</p>
        )}

        {PLANS[label === 'PRO' ? 1 : 0].features.map((i) => (
          <p
            key={i}
            className="mt-2 text-muted-foreground flex gap-2  "
          >
            <CircleCheck className="text-indigo-500 flex-none" />
            {i}
          </p>
        ))}

        {landing ? (
          <Button
            className={cn(
              'rounded-full mt-5',
              label === 'PRO'
                ? 'bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500'
                : 'bg-background-80 text-white hover:text-background-80'
            )}
          >
            {label === current
              ? 'Get Started'
              : current === 'PRO'
              ? 'Free'
              : 'Get Started'}
          </Button>
        ) : (
          <Button
            className="rounded-full mt-5 bg-background-80 text-white hover:text-background-80"
            disabled={label === current}
          >
            {label === current
              ? 'Active'
              : current === 'PRO'
              ? 'Downgrade'
              : 'Upgrade'}
          </Button>
        )}
      </div>
    </div>
  )
}

export default PaymentCard