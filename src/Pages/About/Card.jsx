import React from "react";
import { Images } from "../../Constents";


const Card = ({ image, name, baio, imgS }) => {
    return (
        <article className={`w-[270px] h-fit ${imgS} flex flex-col items-center`}>
            <div className="w-[250px] h-[250px] mt-2"><img className={`w-full h-full ${imgS}`} src={Images[image]} alt="" /></div>

            <section className="w-[250px] mb-1">
                <h1>{name}</h1>
                <p>{baio}</p>
            </section>
        </article>
    )
}

export default Card