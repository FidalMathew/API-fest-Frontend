import wallet from "./assets/wallet.svg"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="p-4">
        <div className="w-[80%] mx-auto flex justify-between">
          <h2 className="text-gray-800 font-extrabold tracking-wider">Btracker</h2>
          <h2 className="text-gray-600 font-semibold">Contact us</h2>
        </div>
      </div>
      <div className="h-[80%]">
        <div className="h-full w-[80%] mx-auto flex">
          <div className="w-[50%] h-full flex flex-col p-8 justify-between">
            <h2 className="text-7xl text-gray-900 font-bold w-[85%]">
              Manage your personal Finances with ease
            </h2>
            <div className="w-full flex gap-[50px]">
              <Link to="/login" className="rounded-sm px-6 py-2 bg-slate-900 text-gray-200 hover:bg-slate-800">
                Login
              </Link>
              <Link to="/signup" className="rounded-sm px-6 py-2 border border-slate-900 text-gray-700 hover:bg-slate-800 hover:text-gray-200">
                Signup
              </Link>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <img src={wallet} alt="wallet" style={{ height : "100%"}} />
          </div>
        </div>
      </div>
    </div>
  );
};
