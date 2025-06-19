import React from "react";
import { Images } from "../Constents";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
            <div className="w-full py-4 bg-lime-500 flex justify-center">
                <nav className="w-[60%] flex justify-between items-center  text-xl">
                    <div className="w-[90px]"><a href="#" className="flex flex-col  items-center font-bold"><img className="" src={Images.icon} alt="" />Recipious</a></div>

                    <ul className="flex gap-[50px]">
                        <Link to={"/"}>
                            <li className="px-4 py-1 hover:bg-lime-100">Home</li>
                        </Link>
                        <Link to={"/Recipes/"}>
                            <li className="px-4 py-1 hover:bg-lime-100">Recipes</li>
                        </Link>
                        <Link to={"/Contact/"}>
                            <li className="px-4 py-1 hover:bg-lime-100">Contact</li>
                        </Link>
                        <Link to={"/About/"}>
                            <li className="px-4 py-1 hover:bg-lime-100">About</li>
                        </Link>

                    </ul>

                    <button className="bg-lime-100 px-5 py-1 border-2 hover:bg-lime-200">Login</button>
                </nav>
            </div>
    )

}

export default NavBar