import AdminDashboardLayout from "@/Layouts/AdminDashboardLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import { React, useState, useEffect } from "react";
import { CgArrowRight } from "react-icons/cg";

const DoctorSingle = ({ table, admin, auth, userid, role }) => {
    const { flash } = usePage().props;

    const available = [
        {
            id: 1,
            slot: "6:00 - 7:00 PM",
        },
        {
            id: 2,
            slot: "7:00 - 8:00 PM",
        },
        {
            id: 3,
            slot: "9:00 - 10:00 PM",
        },
    ];

    const { data, setData, post, reset } = useForm({
        date: "",
        time: "",
        patient_id: userid,
        doctor_id: table.id,
    });
    const [activeslot, setActiveSlote] = useState();
    const [date, setDate] = useState();

    const saveAppoinment = () => {
        post(route("save-appointment"));
    };

    useEffect(() => {
        if (flash.status) {
            setActiveSlote();
            setData("date", "");
        }
    }, [flash.status]);

    return (
        <>
            <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-700 pb-2 ">
                    <span> {table.name} </span>
                </h2>
                <div>
                    <div className="flex gap-4">
                        <div>
                            <img
                                src="/image/doctor.jpg"
                                alt=""
                                className="w-[480px] h-[300px] rounded-sm"
                            />
                        </div>
                        <div>
                            {admin && (
                                <div className="flex gap-2">
                                    <Link
                                        href={route("doctor-edit", table.id)}
                                        className="bg-blue-500 updeltebtn"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={route("doctor-delete", table.id)}
                                        className="bg-red-500 updeltebtn"
                                    >
                                        Delete
                                    </Link>
                                </div>
                            )}
                            <div className="mt-4 flex flex-col gap-2">
                                <h2 className="text-sm">
                                    Specialities :
                                    <span> {table.specialities} </span>
                                </h2>

                                <h2 className="text-sm">
                                    Degree :
                                    <span className="text-xs">
                                        {table.degree}
                                    </span>
                                </h2>
                                <h2 className="text-sm">
                                    Experience :
                                    <span> {table.experience} </span>
                                </h2>
                                <h2 className="text-sm">
                                    Address :<span> {table.address} </span>
                                </h2>
                                <h2 className="text-sm">
                                    Fees :<span> {table.fees} </span>
                                </h2>
                                <h2 className="text-sm">
                                    Available:
                                    {available.map((item) => (
                                        <span
                                            className={`ml-1 cursor-pointer bg-gray-200 px-1 py-0.5 rounded-lg text-xs ${
                                                activeslot === item.slot
                                                    ? "bg-green-400 text-white"
                                                    : ""
                                            } `}
                                            key={item.id}
                                            onClick={() => (
                                                setActiveSlote(item.slot),
                                                setData("time", item.slot)
                                            )}
                                        >
                                            {item.slot}
                                        </span>
                                    ))}
                                </h2>
                                {auth && role == "patient" ? (
                                    <div>
                                        <h2 className="text-sm">
                                            Date :
                                            <input
                                                value={data.date}
                                                onChange={(e) => (
                                                    setDate(e.target.value),
                                                    setData(
                                                        "date",
                                                        e.target.value
                                                    )
                                                )}
                                                type="date"
                                                className="py-1 px-1 rounded-md cursor-pointer border-gray-200 ml-1 text-xs "
                                            />
                                        </h2>

                                        <h2
                                            onClick={() => saveAppoinment()}
                                            className=" mt-2 inline-flex items-center py-1.5 w-[50%] cursor-pointer text-sm bg-black hover:bg-green-500 text-white px-2 rounded-xl "
                                        >
                                            Book Appoinment <CgArrowRight />
                                        </h2>
                                        {flash.status && (
                                            <h2 className="mt-2 text-gray-800 text-sm">
                                                Your Appointment Booked !
                                            </h2>
                                        )}
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                    <p className="text-sm mt-2 text-gray-800">{table.about}</p>
                </div>
            </div>
        </>
    );
};

DoctorSingle.layout = (page) => <AdminDashboardLayout children={page} />;
export default DoctorSingle;
