import React from "react";
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
import { Images } from "../Constents";

const Footer = () => {
    return (
        <footer className="w-full bg-[#ebe8e8] flex justify-center pt-20 pb-5">
            <div className="w-[55%]">
                <section className="flex justify-between items-center pb-20">
                    <section className="w-90 ">
                        <div className="w-[110px]"><a href="#" className="flex font-bold"><img className="" src={Images.icon} alt="" /></a></div>

                        <p className="text-[#7F7F7F]">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment"</p>
                    </section>
                    <section className="flex gap-32">
                        <div>
                            <h6 className="font-bold">Tastebite</h6>
                            <ul>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">About us</a></li>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">Careers</a></li>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">Contact us</a></li>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">Feedback</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-bold">Legal</h6>
                            <ul>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">Terms</a></li>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">Conditions</a></li>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">Cookies</a></li>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">Copyright</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-bold">Follow</h6>
                            <ul>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">Facebook</a></li>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">Twitter</a></li>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">Instagram</a></li>
                                <li className="text-[#7F7F7F] hover:text-orange-500"><a href="#">Youtube</a></li>
                            </ul>
                        </div>
                    </section>
                </section>
                <section className="flex flex-col justify-center">
                    <div className="w-full h-[1px] bg-[#c2bebe]"></div>

                    <div className="flex justify-between text-[#7F7F7F] pt-10">
                        <p className="text-sm">&copy; 2020 Tastebite - All rights reserved</p>
                        <section className=" flex gap-10">
                            <SlSocialFacebook className="text-xl" />
                            <SlSocialInstagram className="text-xl" />
                            <SlSocialTwitter className="text-xl" />
                            <SlSocialYoutube className="text-xl" />
                        </section>
                    </div>
                </section>
            </div>
        </footer>
    )
}
export default Footer

