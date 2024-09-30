import Header from "@/Components/Header";
import { React, useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import Doctors from "./components/Doctors";
import { useForm, usePage } from "@inertiajs/react";

const AllDoctor = ({ auth, doctors }) => {
    const [allDoc, setAllDoc] = useState(doctors);
    const { flash } = usePage().props;

    const { data, setData, post, get, errors, processing } = useForm({
        spec: "",
    });
    const getspec = (spec) => {
        if (spec) {
            // console.log(spec);
            // setData("spec", spec);
            get(`/gettargetdoc/${spec}`);
        }
    };

    useEffect(() => {
        if (flash.data) {
            setAllDoc(flash.data ? flash.data : doctors);
        }
    }, [flash.data]);

    return (
        <>
            <div>
                <div className="flex w-[100%] mx-auto">
                    <Header auth={auth} />
                </div>
                <div className="flex mt-8">
                    <div className="w-[20%]">
                        <SideNav getspec={getspec} />
                    </div>
                    <div className="w-[80%]">
                        <Doctors doctors={allDoc ? allDoc : doctors} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllDoctor;
