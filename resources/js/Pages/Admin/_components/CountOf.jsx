import { Link } from "@inertiajs/react";
import React from "react";
import { CgArrowRight } from "react-icons/cg";

const CountOf = ({ number, name }) => {
    return (
        <>
            <div className="w-[280px] h-[110px] border rounded-2xl bg-blue-400 flex flex-col items-center text-lg font-semibold justify-center text-white">
                <h2>
                    Total {name} : {number}
                </h2>
            </div>
        </>
    );
};

export default CountOf;
