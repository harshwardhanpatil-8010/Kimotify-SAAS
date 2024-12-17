import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    label: string
    current: 'PRO' | 'FREE'
    landing?: boolean
}

const PaymentCard = ({current, label, landing}: Props) => {
  return (
    <div className={cn(
        label !== current
        ? 'bg-in-active'
        : 'bg-gradient-to-r  from-[#1c3dbf] to-[#941489]',
        'p-[2px] rounded-xl overflow-hidden'
    )}>
        <div className={cn(
            landing && 'radial--gradient--pink',
            'flex flex-col rounded-xl pl-5 py-5 pr-10 bg-background-90 '
        )}>
            {landing ? (
                <h2>
                    {label === 'PRO' && 'Premium Plan'}
                    {label === 'FREE' && 'Free Plan'}
                </h2>
            ):(
                <h2>
                    {label === current
                    ? 'Your Current Plan'
                    : current === 'PRO'
                    ? 'Downgrade'
                    : 'Upgrade'}
                </h2>
            )}
                <p className='text-text-secondary text-sm mb-2'>
                    This is what your plan covers for automations and AI features
                </p>
                {label === 'PRO' ? (
                   <span className='bg-gradient-to-r text-3xl  from-[#1c3dbf] to-[#941489] font-bold bg-clip-text text-transparent'>
                    PREMIUM PLAN
                    </span>
                ):(
                    <p className='font-bold mt-2 text-2xl text-text-secondary'>FREE PLAN</p>
                )}
                {label === 'PRO' ? (
                    <p className='mb-2'>
                        <b className='text-xl'>$99</b>/month
                    </p>
                ):(
                    <p className='text-xl mb-0 mt-2'>Free</p>
                )}
        </div>
    </div>
  )
}
export default PaymentCard