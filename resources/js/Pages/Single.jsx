import Header from "@/Components/Header";
import React from "react";
import DoctorSingle from "./Admin/Doctor/DoctorSingle";

const Single = ({ table, auth, userid, role }) => {
    return (
        <>
            <div>
                <div className="flex w-[95%] mx-auto  ">
                    <Header auth={auth} />
                </div>
                <div>
                    <DoctorSingle
                        table={table}
                        role={role}
                        auth={auth}
                        userid={userid}
                    />
                </div>
            </div>
        </>
    );
};

export default Single;
