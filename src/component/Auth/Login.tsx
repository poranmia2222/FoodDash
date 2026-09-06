const Login = () => {
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-1">
                <img src="/left-img.png" alt="img not showing" className="h-screen w-full" />
            </div>
            <div className="col-span-2 p-10 space-y-4 ">
                <img src="/logo.png" alt="" className=""/>
                <h1 className="text-4xl font-bold">Login to your account!</h1>
                <div className="flex gap-2">
                    <p className="py-3 px-7 border rounded-md">Login with Google</p>
                    <p className="py-3 px-7 border rounded-md">Login with Facebook</p>
                </div>

                <form action="">
                    <label htmlFor="input">Your Email Address</label><br />
                    <input className="" type="email" /><br />
                    <label htmlFor="input">Enter Your Password</label><br />
                    <input type="password" /><br />
                    <button type="submit">Login to Continue</button>
                    <p>Don't have an account? Sign up</p>
                </form>
            </div>
        </div>
    );
};

export default Login;