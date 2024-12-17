import React from 'react'
import { Button } from '@/components/ui/button'
import Loader from '../loader'
import { TbAutomation } from "react-icons/tb";
type Props = {}

const CreateAutomation = (props: Props) => {
  return (<Button className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-lg from-[#1c3dbf] font-medium to-[#941489] cursor-pointer text-lg'>
    <Loader state={false}>
    <TbAutomation />
        <p className='lg:inline hidden'>Create an Automation</p>
    </Loader>
  </Button>)
}
export default CreateAutomation