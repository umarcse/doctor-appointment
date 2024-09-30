import { Link } from "@inertiajs/react";
import React from "react";
import { CgArrowRight } from "react-icons/cg";

const Banner = () => {
    return (
        <>
            <div className="p-4 px-12 flex items-center gap-2">
                <div className="w-[50%] ">
                    <h2 className="text-3xl font-bold text-gray-600">
                        Book Appoinment With <br /> Truested Doctor{" "}
                    </h2>
                    <p className="pt-2 text-sm text-gray-700">
                        Simply browse through our extensive list of trusted
                        doctors,shedules your appointment hassle-free.
                    </p>
                    <Link className="inline-flex mt-4 w- items-center gap-1 text-sm bg-gray-900 text-white px-4 py-2 rounded-xl ">
                        Book Appointment <CgArrowRight />
                    </Link>
                </div>
                <div className="w-[50%] ">
                    <img
                        src="/image/doctors.jpg"
                        className="w-full"
                        alt="doc"
                    />
                </div>
            </div>
        </>
    );
};

export default Banner;
