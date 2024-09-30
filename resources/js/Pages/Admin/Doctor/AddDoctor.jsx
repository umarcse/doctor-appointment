import AdminDashboardLayout from "@/Layouts/AdminDashboardLayout";
import { useForm, usePage } from "@inertiajs/react";

import { React, useEffect, useState } from "react";

const AddDoctor = () => {
    const { flash } = usePage().props;
    const [targetdata] = useState(flash.data);
    // console.log(targetdata);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: targetdata?.name,
        email: targetdata?.email,
        password: targetdata?.passoword,
        address: targetdata?.address,
        specialities: targetdata?.specialities,
        experience: targetdata?.experience,
        fees: targetdata?.fees,
        degree: targetdata?.degree,
        distric: targetdata?.distric,
        about: targetdata?.about,
    });

    const submit = (e) => {
        e.preventDefault();
        if (targetdata) {
            reset();
            post(`/admin/update/doctor/${targetdata.id}`);
        } else {
            reset();
            post("/admin/store/doctor");
        }
    };
    return (
        <>
            <div className="flex items-center gap-3">
                <h2 className="text-2xl inline-block border-b-2 border-gray-500 text-gray-600 font-semibold rounded-r-lg rounded-l-lg  ">
                    Add Doctor
                </h2>
                {flash.status && (
                    <h2 className="bg-green-500 text-white px-2 py-2 rounded text-sm">
                        {flash.status}
                    </h2>
                )}
            </div>
            <form action="" onSubmit={submit}>
                <div className="mt-6 ml-6 border border-gray-100 rounded-2xl p-5 w-[70%]">
                    <div className="flex  items-center gap-3 text-gray-700">
                        <div>
                            <h2 className="text-sm font-medium"> Name: </h2>
                            <input
                                type="text"
                                className="add-doctor-input"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <h2 className="text-sm font-medium"> Email : </h2>
                            <input
                                type="text"
                                className="add-doctor-input"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <h2 className="text-sm font-medium">Password :</h2>
                            <input
                                type="password"
                                className="add-doctor-input"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="flex  items-center gap-3 text-gray-700 mt-2">
                        <div>
                            <h2 className="text-sm font-medium"> Address : </h2>
                            <input
                                type="text"
                                className="add-doctor-input"
                                value={data.address}
                                required
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <h2 className="text-sm font-medium">
                                Specialities :
                            </h2>
                            <select
                                className="add-doctor-input"
                                value={data.specialities}
                                required
                                onChange={(e) =>
                                    setData("specialities", e.target.value)
                                }
                            >
                                <option value=""> Select </option>
                                <option value="Thoracic Surgery">
                                    Thoracic Surgery
                                </option>
                                <option value="Gastro liver">
                                    Gastro liver
                                </option>
                            </select>
                        </div>
                        <div>
                            <h2 className="text-sm font-medium">
                                Experience :
                            </h2>
                            <select
                                className="add-doctor-input"
                                value={data.experience}
                                required
                                onChange={(e) =>
                                    setData("experience", e.target.value)
                                }
                            >
                                <option value="">Select</option>
                                <option value="2 Years">2 Years</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 mt-2">
                        <div>
                            <h2 className="text-sm font-medium"> Fees: </h2>
                            <input
                                type="text"
                                value={data.fees}
                                required
                                className="add-doctor-input"
                                onChange={(e) =>
                                    setData("fees", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <h2 className="text-sm font-medium"> Degree: </h2>
                            <input
                                type="text"
                                required
                                value={data.degree}
                                className="add-doctor-input"
                                onChange={(e) =>
                                    setData("degree", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <h2 className="text-sm font-medium"> Distric : </h2>
                            <select
                                className="add-doctor-input"
                                required
                                value={data.distric}
                                onChange={(e) =>
                                    setData("distric", e.target.value)
                                }
                            >
                                <option value=""> Select Distric </option>
                                <option value="Dhaka"> Dhaka </option>
                                <option value="Bogura"> Bogura </option>
                            </select>
                        </div>
                    </div>
                    <div className="  text-gray-700 mt-4">
                        <h2 className="text-sm font-medium"> About : </h2>
                        <textarea
                            onChange={(e) => setData("about", e.target.value)}
                            value={data.about}
                            name=""
                            className="w-full border border-gray-200 rounded-lg text-xs"
                        ></textarea>
                    </div>

                    <div className="mt-6 flex items-center justify-center">
                        <button className="bg-blue-600 text-white px-5 py-1.5 rounded-md">
                            Save Doctor
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

AddDoctor.layout = (page) => <AdminDashboardLayout children={page} />;
export default AddDoctor;
