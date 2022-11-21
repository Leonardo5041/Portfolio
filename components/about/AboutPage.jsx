import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/image";
import profile from '../../public/profile.jpeg';
export const AboutPage = () => {
    return (

        <>
            <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
                    Leonardo Ramirez
                </h2>
                <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                    Software Engineer
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
                    My fullname is Leonardo Ramirez Flores but i like to be called Leo. I am a software engineer from Mexico City. I am passionate about building software that improves the lives of those around me.
                </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a href="https://www.linkedin.com/in/leonardo-ramirez-flores-863a31241/" target={"_blank"} rel="noreferrer"><AiFillLinkedin cursor="pointer" /></a>
                <a href="https://github.com/Leonardo5041" target={"_blank"} rel="noreferrer"><AiFillGithub cursor={"pointer"} /></a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 my-10">
                <Image src={profile} layout="fill" objectFit="cover" alt="Profile-Leo" />
            </div>
        </>

    )
}