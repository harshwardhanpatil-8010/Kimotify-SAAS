import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    trigger: JSX.Element
    children: React.ReactNode
    className?: string
}

const PopOver = ({ children, trigger, className }: Props) => {
  return (
    <Popover>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent 
          className={cn(
            'bg-[#1D1D1D] shadow-lg',
            'rounded-lg border border-neutral-800',
            'p-4 w-72',
            'animate-in fade-in-0 zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            'data-[side=bottom]:slide-in-from-top-2',
            'data-[side=left]:slide-in-from-right-2',
            'data-[side=right]:slide-in-from-left-2', 
            'data-[side=top]:slide-in-from-bottom-2',
            className
          )}
          align="end"
          side="bottom"
          sideOffset={5}
        >
            {children}
        </PopoverContent>
    </Popover>
  )
}

export default PopOver
