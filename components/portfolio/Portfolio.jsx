import Image from "next/image";
import cloud from "../../public/cloud.png";
import front from "../../public/front.png";
import backend from "../../public/backend.png";
export const Portfolio = () => {
    return (
        <section>
            <div>
                <h3 className="text-3xl py-1 dark:text-white">Skills</h3>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="text-center shadow-lg p-10 rounded-xl my-1 dark:bg-white flex-1">
                    <Image src={cloud} width={100} height={100} alt="cloud" style={{ margin: "auto" }} />
                    <h3 className="text-lg font-bold pt-2 pb-2">
                        IAAS
                    </h3>
                    <p className="text-gray-800 py-0">Amazon Web Services, Serverless Framework, AWS SDK</p>
                    <p className="text-gray-800 py-1">Lambda Functions, API Gateway</p>
                    <p className="text-gray-800 py-1">Cognito, EventBridge</p>
                    <p className="text-gray-800 py-0">SNS, SQS</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-1 dark:bg-white flex-1">
                    <Image src={backend} width={100} height={100} alt="backend" style={{ margin: "auto" }} />
                    <h3 className="text-lg font-bold pt-2 pb-2">
                        Backend Developer
                    </h3>
                    <p className="text-gray-800 font-semibold">Languages</p>
                    <p className="text-gray-800 py-1">Typescript, Go, JavaScript, Python</p>
                    <p className="text-gray-800 py-1 font-semibold">APIs</p>
                    <p className="text-gray-800 py-1">REST API, JSON APIs</p>
                    <p className="text-gray-800 py-1 font-semibold">Databases</p>
                    <p className="text-gray-800 py-1">MySQL, SQLite, Redis, Postgresql, MongDB, AWS DynamoDB</p>
                </div>

                <div className="text-center shadow-lg p-10 rounded-xl my-1 dark:bg-white flex-1">
                    <Image src={front} width={100} height={100} alt="" style={{ margin: "auto" }} />
                    <h3 className="text-lg font-bold pt-2 pb-2">
                        Frontend Developer
                    </h3>
                    <p className="text-gray-800 py-1">React, Vue, Svelte</p>
                    <p className="text-gray-800 py-1">Tailwind, CSS, Bootstrap</p>
                    <p className="text-gray-800 py-1">HTML, JavaScript</p>
                </div>

            </div>
        </section>
    );
}