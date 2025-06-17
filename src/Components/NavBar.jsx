import React from "react";
import { Images } from "../Constents";
import { Link } from "react-router-dom";

const NavBar = () => {
    console.log(Images);


    return (
        <nav className="w-full py-4 bg-lime-600 flex justify-center">
            <div className="w-[55%] flex justify-between items-center  text-xl">
                <div className="w-[90px]"><a href="#" className="flex flex-col  items-center font-bold"><img className="" src={Images.icon} alt="" />Recipious</a></div>

                <ul className="flex gap-[50px]">
                    <Link to={"/"}>
                        <li className="px-4 py-1 hover:bg-lime-50">Home</li>
                    </Link>
                    <Link to={"/Recipes/"}>
                        <li className="px-4 py-1 hover:bg-lime-50">Recipes</li>
                    </Link>
                    <Link to={"/Contact/"}>
                        <li className="px-4 py-1 hover:bg-lime-50">Contact</li>
                    </Link>
                    <Link to={"/About/"}>
                        <li className="px-4 py-1 hover:bg-lime-50">About</li>
                    </Link>

                </ul>

                <button className="bg-lime-100 px-5 py-1 border-2 hover:bg-lime-200">Search</button>
            </div>
        </nav>
    )

}

export default NavBar