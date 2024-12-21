'use client'
import { useQueryAutomation } from '@/hooks/user-queries'
import React from 'react'
import ActiveTrigger from './active'
import { Separator } from '@/components/ui/separator'
import ThenAction from '../then/then-action'
import TriggerButton from '../trigger-button'
import { AUTOMATION_TRIGGERS } from '@/constants/automation'
import { useTriggers } from '@/hooks/use-automations'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Loader from '../../loader'
import Keywords from './keywords'

type Props = {
  id: string
}

const Trigger = ({ id }: Props) => {
  const { types, onSetTrigger, onSaveTrigger, isPending } = useTriggers(id)
  const { data } = useQueryAutomation(id)

  if (data?.data && data?.data?.trigger.length > 0) {
    return (
      <div className="flex flex-col gap-y-8 items-center max-w-3xl mx-auto">
        <ActiveTrigger
          type={data.data.trigger[0].type}
          keywords={data.data.keywords}
        />

        {data?.data?.trigger.length > 1 && (
          <>
            <div className="relative w-8/12 my-6">
              <p className="absolute transform px-4 py-1 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-full -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 shadow-lg">
                or
              </p>
              <Separator
                orientation="horizontal"
                className="border-indigo-200 border-[1.5px]"
              />
            </div>
            <ActiveTrigger
              type={data.data.trigger[1].type}
              keywords={data.data.keywords}
            />
          </>
        )}

        {!data.data.listener && <ThenAction id={id} />}
      </div>
    )
  }
  return (
    <TriggerButton label="Add Trigger">
      <div className="flex flex-col gap-y-4 p-4">
        {AUTOMATION_TRIGGERS.map((trigger) => (
          <div
            key={trigger.id}
            onClick={() => onSetTrigger(trigger.type)}
            className={cn(
              'transition-all duration-300 ease-in-out hover:scale-[1.02] text-white rounded-2xl flex cursor-pointer flex-col p-5 gap-y-3 shadow-lg',
              !types?.find((t) => t === trigger.type)
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800'
                : 'bg-gradient-to-br from-indigo-600 to-blue-800 hover:from-indigo-500 hover:to-blue-700'
            )}
          >
            <div className="flex gap-x-3 items-center">
              <div className="text-xl">{trigger.icon}</div>
              <p className="font-bold text-lg">{trigger.label}</p>
            </div>
            <p className="text-sm font-light text-gray-100">{trigger.description}</p>
          </div>
        ))}
        <Keywords id={id} />
        <Button
          onClick={onSaveTrigger}
          disabled={types?.length === 0}
          className="bg-gradient-to-br from-indigo-600 to-blue-800 hover:from-indigo-500 hover:to-blue-700 text-white font-semibold py-3 text-lg rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          <Loader state={isPending}>Create Trigger</Loader>
        </Button>
      </div>
    </TriggerButton>
  )
}

export default Trigger
