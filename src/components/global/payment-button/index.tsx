import { Button } from '@/components/ui/button'
import { useSubscription } from '@/hooks/use-subscription'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { FaCreditCard } from "react-icons/fa6"
import { motion } from "framer-motion"

const PaymentButton = () => {
  const {onSubscribe, isProcessing} = useSubscription()
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        disabled={isProcessing}
        onClick={onSubscribe}
        className='relative overflow-hidden bg-gradient-to-br from-[#9685DB] via-[#9434E6] to-[#CC3BD4] text-white font-bold 
          rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300
          hover:from-[#A795EB] hover:via-[#A444F6] hover:to-[#DC4BE4]
          before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] 
          before:transition-transform before:duration-700 before:pointer-events-none '
      >
        <span className="flex items-center gap-2 text-lg">
          {isProcessing ? (
            <Loader2 className="animate-spin w-5 h-5" />
          ) : (
            <FaCreditCard className="w-5 h-5" />
          )}
          Upgrade Now
        </span>
      </Button>
    </motion.div>
  )
}

export default PaymentButton
