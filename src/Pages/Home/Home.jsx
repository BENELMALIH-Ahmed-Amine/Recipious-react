import React from "react";
import Hero from "../../Components/Hero";
import { Images } from "../../Constents";

const Home = () => {
    return (
        <>
            <Hero HeroImage={Images.hero}/>

            {/* <div className="absolute top-0 z-2 w-[100vw] h-[100vh] bg-[#00000060] flex justify-center items-center">
                <form className="w-[250px]bg-white">
                    <legend>LOGIN</legend>

                    <section>
                        <div>

                            <input type="email" placeholder="Email" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" />
                            <a href="">Forget Password?</a>
                        </div>
                    </section>
                </form>
            </div> */}
        </>
    )
}

export default Home