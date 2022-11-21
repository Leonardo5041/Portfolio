import Image from "next/image";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
export const Experience = () => {
    return (
        <section>
            <div>
                <h3 className="text-3xl py-1 dark:text-white">Work Experience</h3>
                <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
                    Since I started my journey as a developer nearly 4 years I love to learn new technologies, frameworks, programming languages and be updated in technologies world. I am currently working as Backend Developer.
                </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    I like to do my work with passion and I am always looking for new challenges.
                    Share my knowledge with others and learn from them.
                </p>
            </div>
            <div className="lg:flex gap-10">
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <Image src={design} width={100} height={100} alt="" style={{ margin: "auto" }} />
                    <h3 className="text-lg font-medium pt-8 pb-2">
                        Software Enginner
                    </h3>
                    <h5 className="text-sm pb-2">January 2021 - Present</h5>
                    <p>Mexican Financial company <span className="text-teal-500"> <a href="https://www.ion.com.mx/" target="_blank" rel="noreferrer">ION Financiera</a></span></p>
                    <p>Development of APIs to streamline the process of obtaining credit for our customers, from credit simulation to formalization.</p>
                    <h4 className="py-4 text-teal-600">I use:</h4>
                    <p className="text-gray-800 py-1">AWS | Serverless Framework</p>
                    <p className="text-gray-800 py-1">Microservices | API Rest</p>
                    <p className="text-gray-800 py-1">Node.js | Typescript | Javascript</p>
                    <p className="text-gray-800 py-1">Golang</p>
                    <p className="text-gray-800 py-1">Agile Delivery Factory | Scrum</p>
                    <p className="text-gray-800 py-1">Continuous Integration | CI/CD</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <Image src={consulting} width={100} height={100} alt="" style={{ margin: "auto" }} />
                    <h3 className="text-lg font-medium pt-8 pb-2">
                        Freelance Developer
                    </h3>
                    <h5 className="text-sm pb-2">January 2020 - December 2020</h5>
                    <p>Development of a customer relationship management to have greater control of orders, sales and customers, this web system was developed under the MERN stack at <span className="text-teal-500"><a href="https://www.facebook.com/multilimpcuidadoautomotriz" target={"_blank"} rel="noreferrer">MP Multilimp</a> </span></p>
                    <h4 className="py-4 text-teal-600">I used:</h4>
                    <p className="text-gray-800 py-1">Git and Github control version</p>
                    <p className="text-gray-800 py-1">Unit Testing</p>
                    <p className="text-gray-800 py-1">Continuous integration</p>
                    <p className="text-gray-800 py-1">MongoDB, Express.js, React, Node.js</p>
                    <p className="text-gray-800 py-1">GraphQL, Tailwind</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <Image src={code} width={100} height={100} alt="" style={{ margin: "auto" }} />
                    <h3 className="text-lg font-medium pt-8 pb-2">
                        Android Developer
                    </h3>
                    <h5 className="text-sm pb-2">September 2019 - December 2019</h5>
                    <p>Development of a mobile application for the validation of student cover letters and the prototype of a cover letter separator machine using Arduino.</p>
                    <h4 className="py-4 text-teal-600">I used:</h4>
                    <p className="text-gray-800 py-1">Kotlin | Android Studio</p>
                    <p className="text-gray-800 py-1">Java</p>
                    <p className="text-gray-800 py-1">SQL Databases</p>
                    <p className="text-gray-800 py-1">Arduino</p>
                </div>
            </div>
        </section>
    )
}