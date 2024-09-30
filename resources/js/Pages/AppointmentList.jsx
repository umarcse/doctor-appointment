import Header from "@/Components/Header";
import React from "react";
import Appointment from "./Admin/Appointment";

const AppointmentList = ({ name, table }) => {
    return (
        <>
            <div>
                <div className="flex w-[94%] mx-auto">
                    <Header auth={true} name={name} />
                </div>

                <div className=" w-[80%] mx-auto mt-7">
                    <Appointment list={table} patient={true} />
                </div>
            </div>
        </>
    );
};

export default AppointmentList;
