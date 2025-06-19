import React from "react";
import { Images } from "../Constents";

const Contact = () => {
    return (
        <article className="w-full flex justify-center py-15 rounded-2xl">
            <div className="w-[60%] h-140 bg-[#e4f1ff] rounded-2xl flex items-center justify-between relative">
                <section className="w-[45%] h-full"><img className="w-full h-full rounded-l-2xl" src={Images.heroC} alt="" /></section>
                <section className="w-[47%] bg-amber-600 mr-10">
                    f
                </section>
            </div>
        </article>
    )
}

export default Contact