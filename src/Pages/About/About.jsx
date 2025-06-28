import React, { useContext } from "react";
import Card from "./Card";
import { Mycontext } from "../../Context";


const About = () => {
    const {chefs} = useContext(Mycontext)
    return (
        <>
            <div className="w-full bg-lime-200 flex items-center justify-center">
                <section className="w-[60%] py-5 bg-lime-300 flex flex-wrap justify-center gap-x-5 gap-y-10">
                    {
                        chefs.map((c, index) =>
                            <Card key={index} image={c.image} name={c.name} baio={c.baio}/>
                        )
                    }

                    {/* Add Chef */}

                    <Card imgS={'hover:bg-lime-200'} image={"chefY"} name={"a name"} baio={"a baio"}/>
                    <Card imgS={'hover:bg-lime-200'} image={"chefX"} name={"a name"} baio={"a baio"}/>
                </section>
            </div>
        </>
    )
}

export default About