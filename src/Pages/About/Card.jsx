import React from "react";
import { Images } from "../../Constents";


const Card = ({ image, name, baio }) => {
    return (
        <article className="w-[300px]">
            <div className="w-full h-[250px]"><img className="w-full h-full" src={Images[image]} alt="" /></div>

            <section>
                <h1>{name}</h1>
                <p>{baio}</p>
            </section>
        </article>
    )
}

export default Card