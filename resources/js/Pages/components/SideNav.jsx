import { React, useState, useEffect } from "react";

const SideNav = ({ getspec }) => {
    const sp = ["Thoracic Surgery", "Gastro liver"];
    const [active, setActive] = useState();

    const handleFilter = (item) => {
        if (item) {
            //console.log(item);
            setActive(item);
            getspec(item);
        }
    };
    console.log(active);

    return (
        <>
            <div className="px-4">
                <h2 className="font-medium pb-2"> Specification </h2>
                {sp.map((item, index) => (
                    <div className="pl-3" key={index}>
                        <h2
                            className={`bg-gray-100 text-sm text-gray-600 px-2 py-1 cursor-pointer mb-2 rounded-xl ${
                                active == item && "bg-green-400 text-white"
                            } `}
                            onClick={() => handleFilter(item)}
                        >
                            {item}
                        </h2>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SideNav;
