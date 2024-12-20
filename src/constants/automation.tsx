import { HiPaperAirplane } from "react-icons/hi2";
import { v4 } from "uuid";
import { IoLogoInstagram } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
export type AutomationListenerProps = {
    id: string
    label: string
    icon: JSX.Element
    description: string
    type: 'SMARTAI' | 'MESSAGE'
}

export type AutomationsTriggerProps = {
    id: string
    label: string
    icon: JSX.Element
    description: string
    type: 'COMMENT' | 'DM'
  }
export const AUTOMATION_TRIGGERS: AutomationsTriggerProps[] = [
    {
      id: v4(),
      label: 'User comments on my post',
      icon: <IoLogoInstagram />,
      description: 'Select if you want to automate comments on your post',
      type: 'COMMENT',
    },
    {
      id: v4(),
      label: 'User sends me a dm with a keyword',
      icon: <IoLogoInstagram />,
      description: 'Select if you want to automate DMs on your profile',
      type: 'DM',
    },
  ]
  

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
    {
        id: v4(),
        label: 'Send the user a message',
        icon: <HiPaperAirplane color="Blue"/>,
        description: 'Enter the message that you want to send the user.',
        type: 'MESSAGE',
    },
    {
        id: v4(),
        label: 'Let SmartAI take over',
        icon: <LuBrainCircuit color="Blue"/>,
        description: 'Tell AI about your project. (Upgrade to use this feature)',
        type: 'SMARTAI',
    },
]