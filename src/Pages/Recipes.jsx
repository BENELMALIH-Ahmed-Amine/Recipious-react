import React from "react";
import { Images, Data } from "../Constents";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";

const Recipes = () => {
    const Recipes_Data = Data.Recipes_D.recipes
    // console.log(Recipes_D.recipes);

    return (
        <main className="w-full bg-lime-200 flex flex-col items-center">
            <Hero HeroImage={Images.heroR}/>

            <section className="w-[60%] h-auto p-5 bg-lime-300 flex flex-wrap justify-between gap-x-3 gap-y-10 mt-10">
                {
                    Recipes_Data.map((r, index) =>
                        <article key={index} className="w-[24%] bg-lime-400 pb-3 flex flex-col gap-1.5">
                            <Link to={`${r.id}`} className="w-auto">
                                <div className="w-full h-[200px] border-6 border-lime-400"><img className="w-full h-full" src={r.image} alt="" /></div>
                                <h2 className="font-bold ml-3">{r.name}</h2>
                            </Link>
                        </article>
                    )
                }
            </section>
        </main>
    )
}

export default Recipes