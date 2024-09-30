import AdminDashboardLayout from "@/Layouts/AdminDashboardLayout";
import { Link } from "@inertiajs/react";
import React from "react";
import { CgArrowRight } from "react-icons/cg";
import CountOf from "./_components/CountOf";

const Dashboard = ({ data }) => {
    return (
        <>
            <div className="p-4">
                <div className="flex gap-2">
                    <CountOf number={data.doctor} name="Doctor" />
                    <CountOf number={data.paitent} name="Patient" />
                    <CountOf number={data.appointment} name="Appointments" />
                </div>
            </div>
        </>
    );
};

Dashboard.layout = (page) => <AdminDashboardLayout children={page} />;
export default Dashboard;
