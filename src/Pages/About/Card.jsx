import React from "react";
import { Images } from "../../Constents";


const Card = ({ image, name, baio }) => {
    return (
        <article className="w-[250px]">
            <div className="w-[250px] h-[250px]"><img className="w-full h-full" src={Images[image]} alt="" /></div>

            <section className="w-[250px]">
                <h1>{name}</h1>
                <p>{baio}</p>
            </section>
        </article>
    )
}

export default Card