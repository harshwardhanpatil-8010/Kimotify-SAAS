
import { getAutomationInfo } from '@/actions/automations';
import Trigger from '@/components/global/automations/trigger';
import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations'
import { PrefetchUserAutomation } from '@/react-query/prefetch';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import React from 'react'
import { ImWarning } from "react-icons/im";
type Props = {
    params: {
        id: string
    }
}

  export async function generateMetaData({params,}:{params: {id: string}}){
    const info = await getAutomationInfo(params.id)
    return {
      title: info.data?.name,
    }
  }
const Page =async({ params }: Props) => {
const query = new QueryClient()
await PrefetchUserAutomation(query, params.id)


  return (
    <HydrationBoundary state={dehydrate(query)}>
    <div className='flex flex-col items-center gap-y-20'>
        <AutomationsBreadCrumb id={params.id}/>
        <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'>
          <div className='flex gap-2 leading-none'>
            <ImWarning color='RED'/>
              When...
          </div>
          <Trigger id={params.id}/>
        </div>
    </div>
    </HydrationBoundary>
  )
}

export default Page