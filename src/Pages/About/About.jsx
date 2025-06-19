import React from "react";
import Card from "./Card";
import { Data } from "../../Constents";


const About = () => {
    const chef = Data.Chefs.Profil
    return (
        <>
            <div className="w-full bg-lime-200 flex items-center justify-center">
                <section className="w-[80%] bg-lime-300 flex flex-wrap justify-between gap-y-10">
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