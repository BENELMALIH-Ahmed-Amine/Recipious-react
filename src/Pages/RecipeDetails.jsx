import React from "react";
import { Link, useParams } from "react-router-dom";
import { Data } from "../Constents";
import { BiStar } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";


const RecipeDetails = () => {
    const { id } = useParams()
    const Recipes_Data = Data.recipes

    const recipe = Recipes_Data.find(e => e.id == id)

    return (
        <main className="w-full bg-lime-200  py-20 flex flex-col items-center justify-center gap-10">
            <article className="w-[60%]">
                <section style={{ backgroundImage: `url(${recipe.image})` }} className="bg-cover bg-center bg-no-repeat w-full">
                    <div className="w-full h-full bg-[#00000060] py-5 px-6 text-white">
                        <section className="flex items-end justify-between font-bold">
                            <h2 className="text-5xl">{recipe.name}</h2>
                            <div className="text-xl mr-10 border-double border-b-4">Servings: {recipe.servings}</div>
                        </section>

                        <section className="bg -amber-900 w-full p-12 pb-5 flex flex-col gap-20 relative">
                            <div className="flex justify-around">
                                <div className="bg-yellow-300 py-1 px-4 text-black font-bold">{recipe.mealType}</div>
                                <div className="bg-yellow-300 py-1 px-4 text-black font-bold">{recipe.cuisine}</div>
                                <div className="bg-yellow-300 py-1 px-4 text-black font-bold">{recipe.difficulty}</div>
                            </div>
                            <section className="w-full flex justify-center text-xl mb-12 font-black font-outline">
                                <div className="w-[550px] flex gap-5">
                                    <h3>Ingredients:</h3>
                                    <ul className="mt-7">
                                        {recipe.ingredients.map((i) =>
                                            <li className="list-[square] mb-2">{i}.</li>
                                        )}
                                    </ul>
                                </div>

                                <div className="w-[550px] flex gap-5">
                                    <h3>Instructions:</h3>
                                    <ul className="mt-7">
                                        {recipe.instructions.map((i) =>
                                            <li className="list-[square] mb-2">{i}</li>
                                        )}
                                    </ul>
                                </div>
                            </section>
                            <div className="w-fit flex items-center gap-1 font-bold border-2 border-amber-300 px-2 py-0.5 absolute bottom-1 right-0 hover:border-white hover:bg-amber-300 hover:in-hover:*:text-white">{recipe.rating}<BiStar className="text-amber-300"/></div>
                        </section>
                    </div>
                </section>
            </article>
                <Link to={"/"} className="bg-lime-600 text-lg text-white flex justify-center items-center gap-1.5 py-1.5 px-4 pr-5.5 hover:bg-lime-500 hover:text-black">
                    <IoIosArrowRoundBack className="text-3xl" />Back
                </Link>
        </main>
    )
}

export default RecipeDetails