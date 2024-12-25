
import InstagramGradientIcon from '@/components/global/icons-logo/instagram-logo'
import { FaPlane } from 'react-icons/fa'
import { LuBrainCircuit } from 'react-icons/lu'
import { v4 } from 'uuid'

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
    icon: <InstagramGradientIcon />,
    description: 'Select if you want to automate comments on your post',
    type: 'COMMENT',
  },
  {
    id: v4(),
    label: 'User sends me a dm with a keyword',
    icon: <InstagramGradientIcon />,
    description: 'Select if you want to automate DMs on your profile',
    type: 'DM',
  },
]

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
  {
    id: v4(),
    label: 'Send the user a message',
    icon: <FaPlane />,
    description: 'Enter the message that you want to send the user.',
    type: 'MESSAGE',
  },
  {
    id: v4(),
    label: 'Let Smart AI take over',
    icon: <LuBrainCircuit />,
    description: 'Tell AI about your project. (Upgrade to use this feature)',
    type: 'SMARTAI',
  },
]