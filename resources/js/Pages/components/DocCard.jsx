import { Link } from "@inertiajs/react";
import React from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { CiLocationArrow1 } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";

const DocCard = ({ doc }) => {
    const fiftyword = (text, limit) => {
        const word = text.split(" ");
        if (word.length > 50) {
            return word.slice(0, limit).join(" ") + "...";
        } else {
            return text;
        }
    };
    return (
        <>
            <div className=" shadow w-[275px] mb-5 h-[450px] rounded-3xl relative text-gray-700">
                <Link href={`/doctor/single/${doc.id}`}>
                    <img
                        src={"/image/doctor.jpg"}
                        alt="doctor"
                        className="rounded-t-3xl h-[220px]"
                    />
                </Link>
                <div className="w-full h-[260px] top-[45%]  bg-white shadow rounded-3xl absolute p-4">
                    <h2 className="pt-2 text-sm font-medium "> {doc?.name} </h2>
                    <h4 className="text-xs mt-1"> {doc?.specialities} </h4>

                    <div className="flex items-center gap-2 mt-2">
                        <h2 className="flex items-center bg-gray-200 px-1 text-sm py-1.5 rounded">
                            <CgArrowsExchangeAltV size={18} />
                            <span className="text-sm">{doc?.experience} </span>
                        </h2>
                        <h2 className="flex items-center bg-gray-200 px-1 text-sm py-1.5 rounded">
                            <CiLocationArrow1 size={18} />
                            <span className="text-sm"> {doc?.distric} </span>
                        </h2>
                        <h2 className="flex items-center bg-gray-200 px-1 text-sm py-1.5 rounded">
                            <TbCurrencyTaka size={18} />
                            <span className="text-sm">{doc?.fees} </span>
                        </h2>
                    </div>

                    <div className="mt-2">
                        <h2 className=" text-base font-medium"> About </h2>
                        <p className="text-xs text-justify">
                            {fiftyword(doc?.about, 25)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DocCard;
