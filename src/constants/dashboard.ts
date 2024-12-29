import { v4 } from 'uuid'

type Props = {
  id: string
  label: string
  subLabel: string
  description: string
  link: string 
}
const user = {
  data: {
    firstname: 'John',
    lastname: 'Doe'
  }
}
export const DASHBOARD_CARDS: Props[] = [
  {
    id: v4(),
    label: 'Set-up Auto Replies',
    subLabel: 'Deliver a product lineup through Instagram DM',
    description: 'Get products in front of your followers in as many places',
    link: '/Help' // Add a link to navigate to
  },
  {
    id: v4(),
    label: 'Answer Questions with AI',
    subLabel: 'Identify and respond to queries with AI',
    description: 'The intention of the message will be automatically detected',
    link: `dashboard/${user.data?.firstname}${user.data?.lastname}/automations` // Add a link to navigate to
  },
  {
    id: v4(),
    label: 'Schedule Posts Automatically',
    subLabel: 'Plan your posts ahead of time and automate publishing',
    description: 'Save time by automating your social media posts',
    link: '/Help/schedule-posts' // Add a link to navigate to
  },
]
