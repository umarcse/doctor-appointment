import React from "react";
import DocCard from "./DocCard";

const Doctors = ({ doctors }) => {
    return (
        <>
            <div>
                {doctors.data.length > 0 && (
                    <div className="flex gap-3 flex-wrap">
                        {doctors.data.map((doc, index) => (
                            <div key={index}>
                                <DocCard doc={doc} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Doctors;
