import { TbAutomation } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

export const PAGE_BREAD_CRUMBS: string[] = [
    'contacts',
    'automations',
    'integrations',
    'settings',
]

type Props = {
    [page in string]: React.ReactNode
}
export const PAGE_ICON: Props = {
    AUTOMATIONS: <TbAutomation />,
    CONTACTS: <BiSolidContact />,
    INTEGRATIONS: <BsRocketTakeoffFill />,
    SETTINGS: <IoSettings />,
    HOME: <FaHome />,
}
