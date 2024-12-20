
import InstagramGradientIcon from "@/components/global/icons-logo/instagram-logo";
import { FaLinkedin } from "react-icons/fa6";
import { FaSalesforce } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
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
  {
    title: 'LinkedIn',
    description:
      'Connect LinkedIn to expand your network, engage with professionals, and stay connected with your audience for enhanced engagement and growth.',
    icon: <FaLinkedin size={75} color="#0077B5"/>,
    strategy: 'CRM',
  },
  {
    title: 'Facebook',
    description:
      'Connect LinkedIn to expand your network, engage with professionals, and stay connected with your audience for enhanced engagement and growth.',
    icon: <FaFacebook size={75} color="#1877F2"/>,
    strategy: 'CRM',
  },
  {
    title: 'Twitter',
    description:
      'Connect LinkedIn to expand your network, engage with professionals, and stay connected with your audience for enhanced engagement and growth.',
    icon: <FaSquareXTwitter size={75} color="#000000"/>,
    strategy: 'CRM',
  },
  {
    title: 'Youtube',
    description:
      'Connect LinkedIn to expand your network, engage with professionals, and stay connected with your audience for enhanced engagement and growth.',
    icon: <FaYoutube size={75} color="#FF0000"/>,
    strategy: 'CRM',
  },
]