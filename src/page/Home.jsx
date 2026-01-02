import Heading from "../component/Heading"
import Text from "../component/Text"
import Me from '../assets/ME.jpg'
import { Facebook, Github } from "lucide-react"


const HomePage = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-10 p-6 md:p-20 mt-10">
            {/* Left column */}
            <div className="flex flex-col gap-6 md:gap-10">
                <div className="flex flex-col gap-4">
                    <Heading>Hello, I'm Jerwin!</Heading>

                    <Text variant="md">
                        I am a third-year Bachelor of Science in Information Technology student at Dalubhasaan ng Lungsod ng Lucena, Philippines.
                    </Text>

                    <Text variant="md">
                        I am a backend-focused web developer with a strong interest in building scalable, user-centered web applications. I enjoy designing efficient systems, working with databases and APIs, and continuously improving application performance.
                    </Text>

                    <Text variant="md">
                        In the future, I aspire to become an IT instructor, dedicated to mentoring and guiding the next generation of IT professionals.
                    </Text>
                </div>

                <div className="flex gap-3">
                    {/* socials */}
                    <a href="" className="hover:text-blue-500">
                        <Github width={32} height={32} />
                    </a>
                    <a href="" className="hover:text-blue-500">
                        <Facebook width={32} height={32} />
                    </a>
                </div>
            </div>

            {/* Right column (image) */}
            <img
                src={Me}
                alt="picture_of_me"
                className="w-60 md:w-48 lg:w-72 rounded-md object-cover self-start"
            />
        </div>
    )
}

export default HomePage