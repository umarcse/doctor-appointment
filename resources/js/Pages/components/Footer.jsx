import React from "react";
import Doctors from "./Doctors";
import { FaUserDoctor } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="flex px-4 items-center gap-4">
                <div className="w-[50%]">
                    <h2 className="flex items-center gap-1">
                        <FaUserDoctor /> umarcse-Doc
                    </h2>
                    <p className="text-sm mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptate pariatur incidunt optio voluptatibus
                        porro quaerat impedit sunt tenetur nesciunt inventore,
                        ipsam neque suscipit. Sed ipsum eligendi quis odit
                        commodi eum, vel itaque quod consequuntur tempore minima
                        pariatur sint repellat earum.
                    </p>
                </div>
                <div className="w-[20%]">
                    <h2 className="text-lg font-semibold to-gray-800">
                        Company
                    </h2>
                    <ul className="text-sm">
                        <li> Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li> Contact </li>
                    </ul>
                </div>
                <div className="w-[20%]">
                    <h2 className="text-lg font-semibold to-gray-800">
                        Get in Touch
                    </h2>
                    <p> 01575146770 </p>
                    <p> umaarcse@gmail.com </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
