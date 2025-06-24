import React from "react";
import Card from "./Card";
import { Data } from "../../Constents";


const About = () => {
    const chef = Data.Chefs.Profils
    return (
        <>
            <div className="w-full bg-lime-200 flex items-center justify-center">
                <section className="w-[60%] py-5 bg-lime-300 flex flex-wrap justify-center gap-x-5 gap-y-10">
                    {
                        chef.map((c, index) =>
                            <Card key={index} image={c.image} name={c.name} baio={c.baio}/>
                            
                        )
                    }
                </section>
            </div>
        </>
    )
}

export default About