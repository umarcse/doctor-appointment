import AdminHeader from "@/Components/AdminHeader";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import React from "react";

const AdminDashboardLayout = ({ children }) => {
    return (
        <>
            <div className="flex w-[100%]">
                <div className="w-[20%] md:w-[25%]  lg:w-[18%] border-r h-screen ">
                    <Sidebar />
                </div>
                <div className="w-[80%] md:w-[75%] lg:w-[82%] ">
                    <div className="h-14 border-b px-2">
                        <AdminHeader />
                    </div>
                    <div className="p-4">{children}</div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboardLayout;
