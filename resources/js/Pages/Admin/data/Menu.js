import { RxDashboard } from "react-icons/rx";
import { TbCalendarDown } from "react-icons/tb";
import { GoPersonAdd } from "react-icons/go";
import { TbUsersMinus } from "react-icons/tb";
import { FiLogOut, FiSettings } from "react-icons/fi";
const menulist = [
    {
        id: 1,
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: RxDashboard,
    },
    {
        id: 2,
        name: "Appointments",
        path: "/admin/appointments",
        icon: TbCalendarDown,
    },
    {
        id: 3,
        name: "Add Doctor",
        path: "/admin/add/doctor",
        icon: GoPersonAdd,
    },
    {
        id: 4,
        name: "Doctor List",
        path: "/admin/doctor/list",
        icon: TbUsersMinus,
    },
    {
        id: 5,
        name: "Logout",
        path: "/admin/logout",
        icon: FiLogOut,
    },
    {
        id: 6,
        name: "Settings",
        path: "/admin/settings",
        icon: FiSettings,
    },
];

export default menulist;
