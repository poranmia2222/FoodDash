const Login = () => {
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-1">
                <img src="/left-img.png" alt="img not showing" className="h-screen w-full" />
            </div>
            <div className="col-span-2 p-10 my-auto">
                <div className="mx-auto w-1/2 space-y-8">
                    <img src="/logo.png" alt="" className=""/>
                <h1 className="text-4xl font-bold">Login to your account!</h1>
                <div className="flex gap-2">
                    <p className="py-3 px-7 border rounded-md">Login with Google</p>
                    <p className="py-3 px-7 border rounded-md">Login with Facebook</p>
                </div>

                <form className="space-y-6" action="">
                    <label className="text-[#9d9a9a]" htmlFor="input">Email Addres</label><br />
                    <input className="w-lg text-2xl border-b-2 border-[#9d9a9a] focus:outline-none py-2 placeholder:text-2xl" type="email" placeholder="Youraddres@email.com"/><br />
                    <label className="text-[#9d9a9a]" htmlFor="input">Password</label><br />
                    <input className="w-lg border-b-2 py-2 border-[#9d9a9a] focus:outline-none placeholder:text-2xl" type="password" placeholder="Enter your password"/><br />
                    <button className="btn btn-primary w-lg" type="submit">Login to Continue</button>
                    <p>Don't have an account? Sign up</p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;