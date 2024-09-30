import menulist from "@/Pages/Admin/data/Menu";
import { Link } from "@inertiajs/react";
import React from "react";
import { FaUserDoctor } from "react-icons/fa6";

const Sidebar = () => {
    const pathname = window.location.pathname;
    // console.log(pathname);

    return (
        <>
            <div>
                {/* //? Logo */}
                <div className="pt-4 flex items-center pl-5 gap-1">
                    <FaUserDoctor size={20} className="text-blue-400" />
                    <h2 className="text-lg text-gray-600 font-medium ">
                        Doctor App
                    </h2>
                </div>

                {/* //? Menu  */}

                <div className="mt-4">
                    {menulist.map((menu) => (
                        <div key={menu.id} className="py-2 px-2 ">
                            <Link
                                href={menu.path}
                                className={`flex items-center gap-1 py-2 ${
                                    pathname == menu.path &&
                                    " bg-blue-500 text-white"
                                }  px-2 rounded-md hover:bg-blue-500 hover:text-white `}
                            >
                                <menu.icon />
                                <h2> {menu.name} </h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
