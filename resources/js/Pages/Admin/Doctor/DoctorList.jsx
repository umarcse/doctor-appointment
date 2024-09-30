import AdminDashboardLayout from "@/Layouts/AdminDashboardLayout";

import React from "react";
import DoctorCard from "../_components/DoctorCard";
import { Link } from "@inertiajs/react";

const DoctorList = ({ doctors }) => {
    // console.log(doctors);
    return (
        <>
            <div>
                <div>
                    {doctors.data.length > 0 ? (
                        <div className="flex gap-4 flex-wrap">
                            {doctors.data.map(
                                ({
                                    name,
                                    specialities,
                                    experience,
                                    distric,
                                    fees,
                                    about,
                                    id,
                                }) => (
                                    <DoctorCard
                                        name={name}
                                        specialities={specialities}
                                        experience={experience}
                                        distric={distric}
                                        fees={fees}
                                        about={about}
                                        id={id}
                                    />
                                )
                            )}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                {doctors.data.length > 0 && (
                    <div className="p-2">
                        {doctors.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`p-1 mx-1 ${
                                    link.active ? "text-blue-500" : ""
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

DoctorList.layout = (page) => <AdminDashboardLayout children={page} />;
export default DoctorList;
