import { BsFillPersonFill } from "react-icons/bs";
import instagramImage from '@/app/assets/instagram.png';
type Props = {
 title: string;
  description: string;
  icon: React.ReactNode | { src: string; [key: string]: any }; // Updated type for icon
  strategy: 'Instagram' | 'CRM';
};



export const INTEGRATION_CARDS = [
    {
      title: 'Instagram',
      icon: instagramImage, // Image path
      description: 'Automate DMs and Comments on Instagram',
      strategy: 'Instagram',
    },
    {
      title: 'CRM',
      icon: <BsFillPersonFill size={48} color="#3352CC" />, // React icon
      description: 'Automate DMs and Comments on CRM',
      strategy: 'CRM',
    },
  ];
