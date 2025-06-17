import React from "react";
import { Images } from "../Constents";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return(
        <article className="w-full flex justify-center py-15 rounded-2xl">
            <div className="w-[55%] h-110 bg-[#e4f1ff] rounded-2xl flex items-center justify-between relative">
                <section className="w-[55%] h-full"><img className="w-full h-full rounded-l-2xl" src={Images.hero} alt="" /></section>
                <section className="w-[40%]">
                    <h1 className="text-3xl font-normal mb-5">Welcome to <span className="font-semibold">Recipious..</span><br/> All Chefs Labrairy</h1>
                    <p className="w-[330px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cupiditate, quidem autem earum quisquam reiciendis doloremque pariatur fugit et facilis eum, ipsa fugiat officia eligendi ipsam facere, nostrum magni iste!</p>
                </section>
                <div className="border-2 border-white p-3 rounded-[50%] bg-white text-orange-500 hover:bg-orange-500 hover:text-white absolute bottom-5 right-5">
                    <FaArrowRight className="text-sm"/>
                </div>
            </div>
        </article>
    )
}

export default Home