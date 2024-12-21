
import { Button } from '@/components/ui/button'
import { MdNotificationsActive } from "react-icons/md";
import React from 'react'

type Props = {}

export const Notifications = () => {
  return (
    <Button className='bg-white rounded-md py-6 cursor-pointer'>
        <MdNotificationsActive
        color="#1c3dbf" 
        fill="#1c3dbf"
        size={32}
        />
    </Button>
  )
}