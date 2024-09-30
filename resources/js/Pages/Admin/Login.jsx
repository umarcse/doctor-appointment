import { Link, useForm } from "@inertiajs/react";
import { FiUserCheck } from "react-icons/fi";
const Login = () => {
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/admin/signin");
    }
    return (
        <>
            <div className="container flex justify-center items-center   ">
                <div className=" w-[280px] lg:w-[320px] shadow-sm  min-h-[400px] mt-8 rounded-xl border">
                    <div className="flex flex-col justify-center items-center pt-4 px-2">
                        <FiUserCheck className="size-6 lg:size-8 text-blue-800" />
                        <h2 className="py-1 pt-2 text-black font-semibold">
                            Sign in to Doctor App
                        </h2>
                        <h3 className="text-xs">
                            Welcome back ! Please sign in to continue
                        </h3>
                        <form action="" onSubmit={submit}>
                            <div className="mt-7">
                                <p className="text-sm pb-2 font-medium">
                                    Username
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
                                    className="border border-blue-400 rounded p-1 w-full"
                                />

                                <div className="mt-4 ">
                                    <button className="w-auto px-6   bg-blue-600 text-white h-8 rounded-md text-sm">
                                        <span> Sign In </span>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-12 inline-flex gap-1">
                                <span className="text-sm">
                                    Don't have an account?
                                </span>
                                <Link
                                    href="/admin/register"
                                    className="text-sm font-semibold text-blue-500"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
