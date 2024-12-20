import React from 'react'
import PaymentButton from '../payment-button'

type Props = {}

const UpgradeCard = (props: Props) => {
  return (
    <div className='bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3 cursor-pointer justify-center items-center'>
        <span className='text-md'>Upgrade to {''}
            <span className='bg-gradient-to-r from-[#CC3BD4] to-[#D064AC] font-bold bg-clip-text text-transparent'>PREMIUM</span>
        </span>
        <p className='text-[#9B9CA0] font-light text-sm items-center text-center'>
           Unlock all features <br /> including AI and more 
        </p>
        <PaymentButton />
    </div>
  )
}

export default UpgradeCard