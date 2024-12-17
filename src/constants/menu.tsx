  import { FaHome } from "react-icons/fa";
  import { v4 as uuid } from 'uuid'
  import { TbAutomation } from "react-icons/tb";
  import { IoSettings } from "react-icons/io5";
  import { BsRocketTakeoffFill } from "react-icons/bs";
  export type FieldProps = {
    label: string
    id: string
  }
  
  type SideBarProps = {
    icon: React.ReactNode
  } & FieldProps
  
  export const SIDEBAR_MENU: SideBarProps[] = [
    {
      id: uuid(),
      label: 'home',
      icon: <FaHome />,
    },
    {
      id: uuid(),
      label: 'automations',
      icon: <TbAutomation />,
    },
    {
      id: uuid(),
      label: 'integrations',
      icon: <BsRocketTakeoffFill />,
    },
    {
      id: uuid(),
      label: 'settings',
      icon: <IoSettings />,
    },
  ]