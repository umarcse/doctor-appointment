import AdminDashboardLayout from "@/Layouts/AdminDashboardLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { GoTrash } from "react-icons/go";

const Appointment = ({ list, patient }) => {
    //console.log(list);
    const { flash } = usePage().props;
    const { get } = useForm();

    // const appDelete = (id) => {
    //     if (patient) {
    //         get(route("app-destroy", id));
    //     } else {
    //         get(route("app-delete", id));
    //     }
    // };

    return (
        <>
            <div className=" flex gap-8">
                <h2 className="text-xl mb-4 inline-flex border-b-2 font-semibold border-gray-800 rounded-r-md rounded-l-md">
                    Appointment List
                </h2>
                {flash.status && (
                    <h2 className="bg-green-600 text-white px-4 py-2 mb-2 rounded-md">
                        Deleted Successfully
                    </h2>
                )}
            </div>
            <div>
                <div className="inline-flex gap-28 w-[100%] bg-gradient-to-r to-gray-800 from-gray-900 py-4 rounded-sm text-gray-100 px-5 font-medium">
                    <h2> Sr_ </h2>
                    <h2> Patient </h2>
                    <h2> Doctor </h2>
                    <h2> Fees </h2>
                    <h2> Date </h2>
                    <h2> Time </h2>
                    <h2> Action </h2>
                </div>
                {list.data.map((item, index) => (
                    <div
                        key={index}
                        className="flex 
                         py-3 text-sm
                         bg-gradient-to-r text-gray-200
                       odd:from-gray-700 odd:to-gray-600
                       rounded-r-sm
                         even:from-gray-800 even:bg-gray-700
                           
                        "
                    >
                        <h2 className="w-[8%] text-center "> {++index} </h2>
                        <h2 className="w-[13%]  text-end">{item.pat.name}</h2>
                        <h2 className="w-[26%]  text-center">
                            {item.doc.name}
                        </h2>
                        <h2 className="w-[7%]  text-center">{item.doc.fees}</h2>
                        <h2 className="w-[15%]  text-end"> {item.date} </h2>
                        <h2 className="w-[25%]  text-center"> {item.time} </h2>
                        <h2 className="">
                            {
                                <Link
                                    href={route(
                                        patient ? "app-destroy" : "app-delete",
                                        item.id
                                    )}
                                >
                                    <GoTrash
                                        size={18}
                                        className="cursor-pointer text-red-200"
                                    />
                                </Link>
                            }{" "}
                        </h2>
                    </div>
                ))}
            </div>
            {list.data.length > 0 && (
                <div className="p-2">
                    {list.links.map((link) => (
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
        </>
    );
};

Appointment.layout = (page) => <AdminDashboardLayout children={page} />;
export default Appointment;
