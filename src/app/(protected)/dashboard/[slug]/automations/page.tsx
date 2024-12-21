
'use client'
import AutomationList from '@/components/global/automation-list'
import CreateAutomation from '@/components/global/create-automation'
import { Check, Clock, Activity } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type Automation = {
  id: number
  title: string
  date: string
  status: 'active' | 'pending' | 'completed'
}

const Page = () => {
  const [automations, setAutomations] = useState<Automation[]>([
    {
      id: 1,
      title: 'Direct traffic towards website',
      date: 'October 5th 2024',
      status: 'active'
    },
    {
      id: 2, 
      title: 'Email marketing campaign',
      date: 'October 10th 2024',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Social media posts',
      date: 'October 15th 2024',
      status: 'completed'
    }
  ])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-6 gap-5"
    >
      <div className="lg:col-span-4">
        <AutomationList />
      </div>
      <div className="lg:col-span-2">
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col rounded-xl bg-background-80 gap-y-6 p-5 border-[1px] overflow-hidden border-in-active hover:border-primary transition-all duration-300"
        >
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Automations
            </h2>
            <p className="text-text-secondary mt-2">
              Your live automations will show here.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            {automations.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="flex items-start justify-between p-3 rounded-lg bg-background-90 hover:bg-background-100 transition-all duration-300"
              >
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-x-2 text-text-secondary text-sm mt-1">
                    <Clock size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  {item.status === 'active' && <Activity className="text-green-500" />}
                  {item.status === 'pending' && <Clock className="text-yellow-500" />}
                  {item.status === 'completed' && <Check className="text-blue-500" />}
                </div>
              </motion.div>
            ))}
          </div>
          <CreateAutomation />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Page
/// needs updates and changes according to  global automation-list/index.tsx

