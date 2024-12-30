import { v4 } from 'uuid'
import { onBoardUser } from '@/actions/user'
import { redirect } from 'next/navigation'

type Props = {
  id: string
  label: string
  subLabel: string
  description: string
  link: string
}

export const getDashboardCards = async (): Promise<Props[]> => {
  const user = await onBoardUser();

  if (!user || (user.status !== 200 && user.status !== 201)) {
    redirect('/sign-in');
  }

  const userFullName = `${user.data?.firstname}${user.data?.lastname}`;

  return [
    {
      id: v4(),
      label: 'Set-up Auto Replies',
      subLabel: 'Deliver a product lineup through Instagram DM',
      description: 'Get products in front of your followers in as many places',
      link: '/Help', 
    },
    {
      id: v4(),
      label: 'Answer Questions with AI',
      subLabel: 'Identify and respond to queries with AI',
      description: 'The intention of the message will be automatically detected',
      link: `/dashboard/${user.data?.firstname}${user.data?.lastname}/automations`,
    },
    {
      id: v4(),
      label: 'Schedule Posts Automatically',
      subLabel: 'Plan your posts ahead of time and automate publishing',
      description: 'Save time by automating your social media posts',
      link: '/Help/schedule-posts', // Static link
    },
  ];
};
