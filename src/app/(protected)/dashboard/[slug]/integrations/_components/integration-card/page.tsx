import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode | { src: string; [key: string]: any }; // Updated type for icon
  strategy: 'Instagram' | 'CRM';
};

const IntegrationCard = ({ title, description, icon, strategy }: Props) => {
  return (
    <div className="border-2 border-[#0afbff] rounded-2xl p-5 flex items-center justify-between bg-gradient-to-br from-[#000000] to-[#000000] shadow-md gap-4">
      {/* Icon Rendering */}
      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
        {typeof icon === 'object' && 'src' in icon ? (
          <Image
            src={icon.src} 
            alt={`${title} Icon`}
            width={48}
            height={48}
            className="object-contain"
          />
        ) : (
          icon 
        )}
      </div>

      {/* Card Details */}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#fff]">{title}</h3>
        <p className="text-[#a2a0a0] text-base">
          {description}
        </p>
      </div>

        <Button 
        // onClick={onInstaOAuth}
        // disabled={integrated?.name === strategy}
        className='bg-gradient-to-br text-white rounded-xl text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100'>
            {/* {integrated ? 'Connected' : 'Connect'} */}
            Connect
        </Button>
    </div>
  )
}
export default IntegrationCard