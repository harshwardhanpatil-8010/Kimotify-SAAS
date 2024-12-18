
import InstagramGradientIcon from "@/components/global/icons-logo/instagram-logo";

import { FaSalesforce } from "react-icons/fa";
type Props = {
  title: string
  icon: React.ReactNode
  description: string
  strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
  {
    title: 'Connect Instagram',
    description:
      'Connect Instagram to enhance your social media presence, analyze engagement, and seamlessly manage your content strategy for better audience reach.',
    icon: <InstagramGradientIcon/>,
    strategy: 'INSTAGRAM',
    
  },
  {
    title: 'Connect Salesforce',
    description:
      'Seamlessly integrate Salesforce to manage your customer relationships, streamline sales processes, and drive business growth with powerful CRM capabilities.',
    icon: <FaSalesforce size={75} color="#00A1E0"/>,
    strategy: 'CRM',
  },
]