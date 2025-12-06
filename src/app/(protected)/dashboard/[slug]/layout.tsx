import { ReactNode } from 'react'
import Sidebar from '@/components/global/sidebar'
import Navbar from '@/components/global/navbar'

type DashboardLayoutProps = {
  children: ReactNode
  params: Promise<{ slug: string }>
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const { slug } = await params

  return (
    <div className="p-3 lg:flex">
      <Sidebar slug={slug} />
      <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
        <Navbar slug={slug} />
        {children}
      </div>
    </div>
  )
}
