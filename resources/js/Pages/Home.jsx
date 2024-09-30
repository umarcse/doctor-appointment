import Header from "@/Components/Header";
import React from "react";
import Banner from "./components/Banner";
import Doctors from "./components/Doctors";
import Footer from "./components/Footer";

const Home = ({ doctors, data, name }) => {
    return (
        <>
            <div className="">
                <div className="flex w-[94%] mx-auto  ">
                    <Header auth={data} name={name} />
                </div>
                <div>
                    <Banner />
                </div>
                <div className="flex w-[90%] mx-auto flex-col">
                    <h2 className="text-lg text-gray-700 font-bold mb-5">
                        Top Doctor to Book
                    </h2>
                    <Doctors doctors={doctors} />
                </div>
                <div className="px-12 py-7 border-t mt-5">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Home;
