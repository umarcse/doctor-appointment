import { Link } from "@inertiajs/react";
import { React, useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import {
    MdKeyboardDoubleArrowDown,
    MdOutlineAdminPanelSettings,
} from "react-icons/md";

import { FiLogOut } from "react-icons/fi";

const Header = ({ auth, name }) => {
    const [hide, setHide] = useState(false);
    return (
        <>
            <div className="h-14 border-b w-full flex items-center ">
                <div className="flex w-full justify-between">
                    <div className="flex items-center gap-1">
                        <FaUserDoctor />
                        <h2> umarcse-Doc </h2>
                    </div>
                    <div>
                        <ul className="flex gap-4 text-sm font-medium">
                            <Link href={route("home-route")}> Home </Link>
                            <Link href={route("all-doctor-route")}>
                                {" "}
                                Doctors{" "}
                            </Link>
                            <Link href={route("home-route")}> About </Link>
                            <Link href={route("home-route")}> Contact </Link>
                        </ul>
                    </div>
                    <div className="relative">
                        {!auth ? (
                            <Link
                                href={route("patient-login")}
                                className="border py-2 px-3 text-sm rounded-3xl bg-blue-500 text-white"
                            >
                                Create Account
                            </Link>
                        ) : (
                            <h2 className="text-lg font-medium flex items-center gap-1">
                                Hello,{name}
                                <MdKeyboardDoubleArrowDown
                                    onClick={() =>
                                        setHide((pre) => {
                                            return !pre;
                                        })
                                    }
                                    size={25}
                                    className="bg-gray-200  cursor-pointer text-green-600 p-1 rounded-full"
                                />
                            </h2>
                        )}

                        {auth && hide && (
                            <div className=" absolute">
                                <div className="bg-gray-200 w-[160px] pt-4 px-2  rounded-2xl h-[170px]">
                                    <ul className="flex flex-col gap-2">
                                        <li className="hover:bg-gray-300 py-1 px-2 rounded-sm">
                                            <Link className="flex gap-1 items-center ">
                                                <MdOutlineAdminPanelSettings />
                                                Profile
                                            </Link>
                                        </li>
                                        <li className="hover:bg-gray-300 py-1 px-2 rounded-sm">
                                            <Link
                                                href={route("patient-app-list")}
                                                className="flex gap-1 items-center "
                                            >
                                                <CiViewList /> Appointment
                                            </Link>
                                        </li>
                                        <li className="hover:bg-gray-300 py-1 px-2 rounded-sm">
                                            <Link
                                                className="flex gap-1 items-center "
                                                href={route("patient-logout")}
                                            >
                                                <FiLogOut /> Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
