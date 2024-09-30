import { Link, useForm } from "@inertiajs/react";
import { FiUserCheck } from "react-icons/fi";
const Register = () => {
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
        name: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/admin/save/admin");
    }
    return (
        <>
            <div className="container flex justify-center items-center   ">
                <div className=" w-[280px] lg:w-[320px] shadow-sm  min-h-[400px] mt-8 rounded-xl border">
                    <div className="flex flex-col justify-center items-center pt-4 px-2">
                        <FiUserCheck className="size-6 lg:size-8 text-blue-800" />
                        <h2 className="py-1 pt-2 text-slate-600 font-semibold">
                            Register for Doctor App
                        </h2>
                        <h3 className="text-xs">
                            Welcome here ! Please sign up to continue
                        </h3>
                        <form action="" onSubmit={submit}>
                            <div className="mt-7">
                                <p className="text-sm pb-2 font-medium">
                                    Your Name
                                </p>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="border border-blue-400 rounded p-1 mb-2 text-sm w-full"
                                />
                                <p className="text-sm pb-2 font-medium">
                                    Email
                                </p>
                                <input
                                    type="text"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="border border-blue-400 rounded p-1 mb-2 text-sm w-full"
                                />
                                <p className="text-sm pb-2 font-medium">
                                    Password
                                </p>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="border border-blue-400 rounded p-[3px] w-full"
                                />

                                <div className="mt-4 ">
                                    <button className="w-auto px-6 bg-blue-600 text-white h-8 rounded-md text-sm">
                                        <span> Sign Up </span>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-12 inline-flex gap-1 pb-2 ">
                                <span className="text-xs">
                                    Allready you have an account?
                                </span>
                                <Link
                                    href="/admin/login"
                                    className="text-sm font-semibold text-blue-500"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
